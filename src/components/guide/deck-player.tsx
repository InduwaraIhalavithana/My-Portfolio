"use client";

import { ArrowLeft, ArrowRight, LayoutGrid, ListOrdered, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { GuideSection } from "@/data/guide";
import type { GuideText, SectionText, TopicText } from "@/i18n/guide/types";
import { deckStyle, fill } from "./guide-style";
import { CoverSlide, FinishSlide, QuizSlide, RecapSlide, ToolboxSlide, TopicSlide } from "./slides";

type DeckPlayerProps = {
  lang: string;
  deck: GuideSection;
  number: number;
  text: SectionText;
  topics: Record<string, TopicText>;
  ui: GuideText["ui"];
  next?: { id: string; title: string; emoji: string };
};

// Slide order: cover, one slide per topic, toolbox, recap, knowledge check, finish.
export function DeckPlayer({ lang, deck, number, text, topics, ui, next }: DeckPlayerProps) {
  const total = deck.topics.length + 5;
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [outline, setOutline] = useState(false);
  const reduce = useReducedMotion();
  const top = useRef<HTMLDivElement>(null);
  const s = deckStyle[deck.color];

  const go = useCallback(
    (to: number) => {
      const clamped = Math.max(0, Math.min(total - 1, to));
      setState(([cur]) => [clamped, clamped >= cur ? 1 : -1]);
      setOutline(false);
    },
    [total],
  );

  // Open the slide named in the URL (#5), and keep the URL in step so a slide can be shared.
  useEffect(() => {
    const fromHash = () => {
      const n = Number(window.location.hash.slice(1));
      if (Number.isInteger(n) && n >= 1 && n <= total) setState(([cur]) => (cur === n - 1 ? [cur, 0] : [n - 1, 1]));
    };
    const frame = requestAnimationFrame(fromHash);
    window.addEventListener("hashchange", fromHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", fromHash);
    };
  }, [total]);

  // Only react to real slide changes (effects can run twice for the same slide in development).
  const shown = useRef(index);
  useEffect(() => {
    if (shown.current === index) return;
    shown.current = index;
    window.history.replaceState(null, "", index === 0 ? window.location.pathname : `#${index + 1}`);
    top.current?.scrollIntoView({ block: "start", behavior: reduce ? "auto" : "smooth" });
  }, [index, reduce]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("input, textarea, select")) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") go(index + 1);
      if (e.key === "ArrowLeft" || e.key === "PageUp") go(index - 1);
      if (e.key === "Escape") setOutline(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index]);

  // Swipe left or right on touch screens.
  const touch = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY });
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dy = e.changedTouches[0].clientY - touch.current.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(index + (dx < 0 ? 1 : -1));
    touch.current = null;
  };

  const slideLabel = (i: number) => {
    if (i === 0) return `${deck.emoji} ${text.title}`;
    if (i <= deck.topics.length) return `${deck.topics[i - 1].emoji} ${topics[deck.topics[i - 1].id].title}`;
    if (i === total - 4) return `🧰 ${ui.toolboxTitle}`;
    if (i === total - 3) return `🧠 ${ui.recapTitle}`;
    if (i === total - 2) return `✍️ ${ui.quizTitle}`;
    return `🏆 ${ui.finished}`;
  };

  let slide: React.ReactNode;
  if (index === 0) {
    slide = <CoverSlide deck={deck} number={number} text={text} topics={topics} ui={ui} onJump={(t) => go(t + 1)} />;
  } else if (index <= deck.topics.length) {
    const t = deck.topics[index - 1];
    slide = <TopicSlide topic={t} text={topics[t.id]} color={deck.color} index={index - 1} total={deck.topics.length} ui={ui} />;
  } else if (index === total - 4) {
    slide = <ToolboxSlide deck={deck} text={text} ui={ui} />;
  } else if (index === total - 3) {
    slide = <RecapSlide deck={deck} text={text} ui={ui} />;
  } else if (index === total - 2) {
    slide = <QuizSlide deck={deck} text={text} ui={ui} onSkip={() => go(total - 1)} />;
  } else {
    slide = <FinishSlide deck={deck} ui={ui} lang={lang} next={next} />;
  }

  return (
    <div ref={top} className="scroll-mt-16">
      {/* Progress bar */}
      <div className="sticky top-16 z-30 border-b bg-background/85 backdrop-blur-lg">
        <div className="h-1.5 bg-muted">
          <motion.div className={cn("h-full", s.bg)} initial={false} animate={{ width: `${((index + 1) / total) * 100}%` }} transition={{ duration: 0.4 }} />
        </div>
        <div className="container-page flex h-12 items-center justify-between gap-2">
          <Link href={`/${lang}/guide#decks`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground">
            <LayoutGrid className="size-4" />
            <span className="hidden sm:inline">{ui.allDecks}</span>
          </Link>
          <p className="min-w-0 truncate text-sm font-semibold">
            <span aria-hidden>{deck.emoji}</span> {text.title}
          </p>
          <div className="flex items-center gap-2">
            <span className="hidden font-mono text-xs text-muted-foreground sm:inline">{fill(ui.slideOf, { n: index + 1, total })}</span>
            <button
              type="button"
              onClick={() => setOutline((v) => !v)}
              aria-expanded={outline}
              aria-label={ui.outline}
              className="grid size-8 place-items-center rounded-lg hover:bg-accent"
            >
              {outline ? <X className="size-4" /> : <ListOrdered className="size-4" />}
            </button>
          </div>
        </div>
        {outline && (
          <nav aria-label={ui.outline} className="container-page max-h-[60vh] overflow-y-auto border-t py-3">
            <ol className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: total }, (_, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={i === index ? "step" : undefined}
                    className={cn("w-full truncate rounded-lg px-2.5 py-1.5 text-left text-sm hover:bg-accent", i === index && cn(s.soft, "font-semibold"))}
                  >
                    <span className="mr-1.5 font-mono text-xs text-muted-foreground">{i + 1}</span>
                    {slideLabel(i)}
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>

      {/* Slide */}
      <div className="container-page py-6 sm:py-10" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className={cn("relative overflow-hidden rounded-[2rem] border bg-card p-5 shadow-xl sm:p-8 lg:p-10", "min-h-[60vh]")}>
          <div aria-hidden className={cn("pointer-events-none absolute -top-24 -right-24 size-72 rounded-full blur-3xl", s.soft)} />
          <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 opacity-30" />
          <AnimatePresence mode="wait" initial={false} custom={dir}>
            <motion.section
              key={index}
              aria-live="polite"
              aria-label={fill(ui.slideOf, { n: index + 1, total })}
              className="relative"
              custom={dir}
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {slide}
            </motion.section>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2.5 text-sm font-semibold transition-all hover:-translate-x-0.5 hover:bg-accent disabled:opacity-40"
          >
            <ArrowLeft className="size-4" />
            <span className="hidden sm:inline">{ui.previous}</span>
          </button>
          <div className="flex max-w-[55%] flex-wrap justify-center gap-1" aria-hidden>
            {Array.from({ length: total }, (_, i) => (
              <span
                key={i}
                className={cn("h-1.5 rounded-full transition-all", i === index ? cn("w-5", s.bg) : i < index ? cn("w-1.5", s.bg, "opacity-40") : "w-1.5 bg-muted-foreground/25")}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === total - 1}
            className={cn("inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:translate-x-0.5 disabled:opacity-40", s.bg)}
          >
            <span className="hidden sm:inline">{index === 0 ? ui.start : ui.next}</span>
            <ArrowRight className="size-4" />
          </button>
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">{ui.keyboardHint}</p>
      </div>
    </div>
  );
}
