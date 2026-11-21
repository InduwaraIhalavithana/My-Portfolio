"use client";

import { ArrowRight, Check, CheckCircle2, Lightbulb, MapPin, RotateCcw, Trophy, XCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { chartIds, type ChartId, type GuideSection, type GuideTopic } from "@/data/guide";
import type { GuideText, SectionText, TopicText } from "@/i18n/guide/types";
import { deckStyle, fill, priorityStyle } from "./guide-style";
import { Chart, CycleVisual, FlowVisual, LayersVisual, TableVisual } from "./visuals";

type UI = GuideText["ui"];

// Fades and lifts each block in, one after another.
export function Rise({ i = 0, children, className }: { i?: number; children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 + i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Bubble({ emoji, color, size = "lg" }: { emoji: string; color: GuideSection["color"]; size?: "lg" | "md" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn(
        "grid shrink-0 place-items-center rounded-3xl",
        deckStyle[color].soft,
        size === "lg" ? "size-28 text-6xl sm:size-36 sm:text-7xl" : "size-16 text-4xl sm:size-20 sm:text-5xl",
      )}
      initial={reduce ? false : { scale: 0.6, rotate: -8, opacity: 0 }}
      animate={reduce ? { opacity: 1 } : { scale: 1, rotate: 0, opacity: 1, y: [0, -6, 0] }}
      transition={{ duration: 0.6, y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }}
    >
      <span aria-hidden>{emoji}</span>
    </motion.div>
  );
}

export function CoverSlide({
  deck,
  number,
  text,
  topics,
  ui,
  onJump,
}: {
  deck: GuideSection;
  number: number;
  text: SectionText;
  topics: Record<string, TopicText>;
  ui: UI;
  onJump: (topicIndex: number) => void;
}) {
  const s = deckStyle[deck.color];
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <Rise>
          <p className={cn("font-mono text-sm font-bold tracking-wide uppercase", s.text)}>
            {ui.deck} {number} · {ui.tracks[deck.track]}
          </p>
        </Rise>
        <Rise i={1}>
          <h1 className="mt-2 text-4xl leading-tight font-bold sm:text-5xl">{text.title}</h1>
        </Rise>
        <Rise i={2}>
          <p className="mt-3 text-lg text-muted-foreground">{text.intro}</p>
        </Rise>
        {text.character && (
          <Rise i={3} className="mt-6 flex items-center gap-4">
            <Bubble emoji={deck.emoji} color={deck.color} size="md" />
            <div className={cn("relative rounded-2xl border-2 bg-card p-4", s.border)}>
              <p className={cn("text-xs font-bold tracking-wide uppercase", s.text)}>
                {ui.meet}: {text.character.name}
              </p>
              <p className="mt-1 text-sm leading-relaxed italic">“{text.character.says}”</p>
            </div>
          </Rise>
        )}
      </div>
      <Rise i={3}>
        <div className={cn("rounded-3xl border p-5", s.softer)}>
          <p className="mb-3 text-sm font-bold">
            {ui.youWillLearn} · {fill(ui.slides, { count: deck.topics.length })}
          </p>
          <ol className="grid gap-1.5 sm:grid-cols-2">
            {deck.topics.map((t, i) => (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => onJump(i)}
                  className="flex w-full items-center gap-2 rounded-lg bg-card px-2.5 py-1.5 text-left text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span aria-hidden className="text-base">
                    {t.emoji}
                  </span>
                  <span className="min-w-0 flex-1 truncate">{topics[t.id].title}</span>
                  <span className={cn("font-mono text-[0.65rem]", s.text)}>{i + 1}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </Rise>
    </div>
  );
}

function topicVisual({ topic, text, color }: { topic: GuideTopic; text: TopicText; color: GuideSection["color"] }) {
  const v = topic.visual;
  const names = topic.compare ?? [];
  if (v && (chartIds as readonly string[]).includes(v)) {
    return <Chart id={v as ChartId} color={color} names={names} labels={text.labels} />;
  }
  if (v === "flow" && text.labels) return <FlowVisual labels={text.labels} color={color} />;
  if (v === "cycle" && text.labels) return <CycleVisual labels={text.labels} color={color} />;
  if (v === "layers" && text.labels) return <LayersVisual labels={text.labels} color={color} />;
  if (v === "table" && text.table) return <TableVisual head={text.table.head} rows={text.table.rows} color={color} />;
  return null;
}

function CompareCards({ names, notes, color }: { names: readonly string[]; notes: readonly string[]; color: GuideSection["color"] }) {
  const tones = ["bg-conf/10 border-conf/40", "bg-share/10 border-share/40", "bg-spark/10 border-spark/40", "bg-agri/10 border-agri/40", "bg-primary/10 border-primary/40"];
  return (
    <div className={cn("grid gap-2", names.length === 2 ? "sm:grid-cols-2" : names.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2")}>
      {names.map((n, i) => (
        <Rise key={n} i={i + 2}>
          <div className={cn("h-full rounded-xl border-2 p-3", tones[i % tones.length])}>
            <p className={cn("font-mono text-sm font-bold", deckStyle[color].text)}>{n}</p>
            <p className="mt-1 text-sm leading-relaxed">{notes[i]}</p>
          </div>
        </Rise>
      ))}
    </div>
  );
}

/** A big illustrated analogy, for slides that have no diagram. */
function PictureCard({ emoji, label, analogy, color }: { emoji: string; label: string; analogy: string; color: GuideSection["color"] }) {
  const s = deckStyle[color];
  const reduce = useReducedMotion();
  return (
    <Rise i={1}>
      <figure className={cn("relative overflow-hidden rounded-2xl border p-6 text-center", s.softer)}>
        <div aria-hidden className={cn("absolute -bottom-12 -left-12 size-40 rounded-full", s.soft)} />
        <div aria-hidden className={cn("absolute -top-10 -right-10 size-28 rounded-full", s.soft)} />
        <motion.div
          aria-hidden
          className="relative text-7xl sm:text-8xl"
          initial={reduce ? false : { scale: 0.5, rotate: -10, opacity: 0 }}
          animate={reduce ? { opacity: 1 } : { scale: 1, rotate: 0, opacity: 1, y: [0, -8, 0] }}
          transition={{ duration: 0.6, delay: 0.15, y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 } }}
        >
          {emoji}
        </motion.div>
        <figcaption className="relative mt-4">
          <p className={cn("text-xs font-bold tracking-wide uppercase", s.text)}>
            <Lightbulb className="mr-1 inline size-3.5" />
            {label}
          </p>
          <p className="mt-1 text-base leading-relaxed font-medium sm:text-lg">{analogy}</p>
        </figcaption>
      </figure>
    </Rise>
  );
}

export function TopicSlide({
  topic,
  text,
  color,
  index,
  total,
  ui,
}: {
  topic: GuideTopic;
  text: TopicText;
  color: GuideSection["color"];
  index: number;
  total: number;
  ui: UI;
}) {
  const s = deckStyle[color];
  const visual = topicVisual({ topic, text, color });
  const hasCompare = !!(topic.compare && text.compare);
  // Slides without a diagram turn their analogy into the picture.
  const hasPicture = !!visual;

  return (
    <div className="space-y-5">
      <Rise className="flex items-start gap-4">
        <Bubble emoji={topic.emoji} color={color} size="md" />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className={cn("font-mono text-xs font-bold", s.text)}>
              {index + 1}/{total}
            </span>
            <span className={cn("rounded-full border px-2 py-0.5 text-[0.7rem] font-semibold", priorityStyle[topic.priority])}>
              {ui.priority[topic.priority]}
            </span>
          </div>
          <h2 className="mt-1 text-2xl leading-tight font-bold sm:text-3xl">{text.title}</h2>
          <p className="mt-2 text-base leading-relaxed sm:text-lg">{text.line}</p>
        </div>
      </Rise>

      <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr]">
        <div className="space-y-3">
          {hasPicture && (
            <Rise i={1}>
              <div className={cn("flex gap-3 rounded-2xl p-4", s.soft)}>
                <Lightbulb className={cn("mt-0.5 size-5 shrink-0", s.text)} />
                <p className="text-sm leading-relaxed sm:text-base">
                  <span className={cn("font-bold", s.text)}>{ui.analogy}: </span>
                  {text.analogy}
                </p>
              </div>
            </Rise>
          )}
          {text.example && (
            <Rise i={2}>
              <div className="flex gap-3 rounded-2xl border bg-card p-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-share" />
                <p className="text-sm leading-relaxed sm:text-base">
                  <span className="font-bold text-share">{ui.example}: </span>
                  {text.example}
                </p>
              </div>
            </Rise>
          )}
          {text.use && text.use.length > 0 && (
            <Rise i={3}>
              <div className="rounded-2xl border bg-card p-4">
                <p className="text-sm font-bold text-agri">{ui.useWhen}</p>
                <ul className="mt-2 space-y-1.5">
                  {text.use.map((u) => (
                    <li key={u} className="flex gap-2 text-sm leading-relaxed">
                      <Check className="mt-0.5 size-4 shrink-0 text-agri" strokeWidth={3} />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </Rise>
          )}
        </div>

        <div className="space-y-3">
          {visual && (
            <Rise i={2}>
              <div className={cn("rounded-2xl border p-4 sm:p-5", s.softer)}>{visual}</div>
            </Rise>
          )}
          {!hasPicture && <PictureCard emoji={topic.emoji} label={ui.analogy} analogy={text.analogy} color={color} />}
          {topic.code && (
            <Rise i={3}>
              <pre className="overflow-x-auto rounded-2xl bg-zinc-950 p-4 font-mono text-xs leading-relaxed text-zinc-100 sm:text-sm">
                <code>{topic.code}</code>
              </pre>
            </Rise>
          )}
        </div>
      </div>

      {hasCompare && <CompareCards names={topic.compare!} notes={text.compare!} color={color} />}
    </div>
  );
}

export function ToolboxSlide({ deck, text, ui }: { deck: GuideSection; text: SectionText; ui: UI }) {
  const s = deckStyle[deck.color];
  const box = text.toolbox;
  if (!box) return null;
  return (
    <div>
      <Rise className="flex items-start gap-4">
        <Bubble emoji="🧰" color={deck.color} size="md" />
        <div>
          <p className={cn("font-mono text-sm font-bold uppercase", s.text)}>{text.title}</p>
          <h2 className="mt-1 text-2xl font-bold sm:text-3xl">{ui.toolboxTitle}</h2>
          <p className="mt-1 text-muted-foreground">{ui.toolboxIntro}</p>
        </div>
      </Rise>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {deck.tools.map((name, i) => (
          <Rise key={name} i={i + 1}>
            <div className="group h-full rounded-2xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md">
              <p className={cn("font-mono text-base font-bold", s.text)}>{name}</p>
              <dl className="mt-2 space-y-1.5 text-sm">
                <div>
                  <dt className="text-xs font-bold text-muted-foreground uppercase">{ui.bestFor}</dt>
                  <dd className="leading-relaxed">{box.rows[i]?.best}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold text-agri uppercase">{ui.pickWhen}</dt>
                  <dd className="leading-relaxed">{box.rows[i]?.pick}</dd>
                </div>
              </dl>
            </div>
          </Rise>
        ))}
      </div>
      <Rise i={deck.tools.length + 1}>
        <div className={cn("mt-4 rounded-2xl p-4", s.soft)}>
          <p className={cn("text-sm font-bold", s.text)}>🧭 {ui.howToChoose}</p>
          <ul className="mt-2 space-y-1.5">
            {box.choose.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-relaxed">
                <Check className={cn("mt-0.5 size-4 shrink-0", s.text)} strokeWidth={3} />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Rise>
    </div>
  );
}

export function RecapSlide({ deck, text, ui }: { deck: GuideSection; text: SectionText; ui: UI }) {
  const s = deckStyle[deck.color];
  return (
    <div className="mx-auto max-w-3xl">
      <Rise className="flex flex-col items-center text-center">
        <Bubble emoji="🧠" color={deck.color} size="md" />
        <h2 className="mt-4 text-3xl font-bold">{ui.recapTitle}</h2>
        <p className="mt-1 text-muted-foreground">{text.title}</p>
      </Rise>
      <ol className="mt-6 space-y-3">
        {text.recap?.map((line, i) => (
          <Rise key={line} i={i + 1}>
            <li className="flex items-center gap-4 rounded-2xl border bg-card p-4">
              <span className={cn("grid size-9 shrink-0 place-items-center rounded-xl font-mono text-sm font-bold text-white", s.bg)}>{i + 1}</span>
              <span className="text-base leading-relaxed sm:text-lg">{line}</span>
            </li>
          </Rise>
        ))}
      </ol>
    </div>
  );
}

export function QuizSlide({
  deck,
  text,
  ui,
  onDone,
  onSkip,
}: {
  deck: GuideSection;
  text: SectionText;
  ui: UI;
  onDone: (score: number) => void;
  onSkip: () => void;
}) {
  const s = deckStyle[deck.color];
  const questions = text.quiz ?? [];
  const [picked, setPicked] = useState<(number | null)[]>(() => questions.map(() => null));
  const answered = picked.filter((p) => p !== null).length;
  const score = picked.filter((p, i) => p === deck.quiz[i]).length;
  const done = answered === questions.length;

  const choose = (qi: number, oi: number) => {
    if (picked[qi] !== null) return;
    const next = picked.map((p, i) => (i === qi ? oi : p));
    setPicked(next);
    if (next.every((p) => p !== null)) onDone(next.filter((p, i) => p === deck.quiz[i]).length);
  };

  return (
    <div>
      <Rise className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className={cn("font-mono text-sm font-bold uppercase", s.text)}>✍️ {ui.quizTitle}</p>
          <h2 className="mt-1 text-2xl font-bold sm:text-3xl">{text.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{ui.quizIntro}</p>
        </div>
        <button type="button" onClick={onSkip} className="text-sm font-semibold text-muted-foreground hover:text-foreground">
          {ui.quizSkip} →
        </button>
      </Rise>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {questions.map((q, qi) => {
          const p = picked[qi];
          const right = deck.quiz[qi];
          return (
            <Rise key={q.q} i={qi + 1}>
              <fieldset className="h-full rounded-2xl border bg-card p-4">
                <legend className="sr-only">{q.q}</legend>
                <p className="font-semibold">
                  <span className={cn("mr-1 font-mono", s.text)}>{qi + 1}.</span> {q.q}
                </p>
                <div className="mt-3 grid gap-1.5">
                  {q.options.map((o, oi) => {
                    const state = p === null ? "idle" : oi === right ? "right" : oi === p ? "wrong" : "dim";
                    return (
                      <button
                        key={o}
                        type="button"
                        disabled={p !== null}
                        onClick={() => choose(qi, oi)}
                        className={cn(
                          "flex items-center gap-2 rounded-xl border-2 px-3 py-2 text-left text-sm transition-all",
                          state === "idle" && "border-border hover:-translate-y-0.5 hover:border-primary hover:shadow-sm",
                          state === "right" && "border-agri bg-agri/15 font-semibold",
                          state === "wrong" && "border-spark bg-spark/10",
                          state === "dim" && "border-transparent opacity-50",
                        )}
                      >
                        <span className="grid size-5 shrink-0 place-items-center rounded-full border font-mono text-[0.65rem]">
                          {"ABCD"[oi]}
                        </span>
                        <span className="flex-1">{o}</span>
                        {state === "right" && <CheckCircle2 className="size-4 text-agri" />}
                        {state === "wrong" && <XCircle className="size-4 text-spark" />}
                      </button>
                    );
                  })}
                </div>
                {p !== null && (
                  <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-sm leading-relaxed" role="status">
                    <span className={cn("font-bold", p === right ? "text-agri" : "text-spark")}>{p === right ? ui.correct : ui.wrong}</span> {q.why}
                  </motion.p>
                )}
              </fieldset>
            </Rise>
          );
        })}
      </div>
      {done && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-5 flex flex-wrap items-center justify-center gap-3 text-center">
          <p className="text-lg font-bold">{fill(ui.score, { score, total: questions.length })}</p>
          <button type="button" onClick={() => setPicked(questions.map(() => null))} className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold hover:bg-accent">
            <RotateCcw className="size-4" /> {ui.retry}
          </button>
        </motion.div>
      )}
    </div>
  );
}

export function FinishSlide({
  deck,
  ui,
  lang,
  best,
  total,
  next,
}: {
  deck: GuideSection;
  ui: UI;
  lang: string;
  best?: number;
  total: number;
  next?: { id: string; title: string; emoji: string };
}) {
  const s = deckStyle[deck.color];
  const reduce = useReducedMotion();
  return (
    <div className="flex flex-col items-center py-6 text-center">
      <div className="relative">
        {!reduce &&
          ["🎉", "⭐", "✨", "🎊", "💡", "🚀"].map((e, i) => (
            <motion.span
              key={e}
              aria-hidden
              className="absolute top-1/2 left-1/2 text-2xl"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ x: Math.cos(i) * 110, y: Math.sin(i) * 80 - 20, opacity: [0, 1, 0.8] }}
              transition={{ duration: 1, delay: 0.2 + i * 0.05 }}
            >
              {e}
            </motion.span>
          ))}
        <Rise>
          <div className={cn("grid size-28 place-items-center rounded-full", s.soft)}>
            <Trophy className={cn("size-14", s.text)} />
          </div>
        </Rise>
      </div>
      <Rise i={1}>
        <h2 className="mt-6 text-3xl font-bold">{ui.finished}</h2>
      </Rise>
      <Rise i={2}>
        <p className="mt-2 max-w-md text-muted-foreground">{ui.finishedIntro}</p>
      </Rise>
      {best !== undefined && (
        <Rise i={3}>
          <p className={cn("mt-4 rounded-full px-4 py-1.5 font-bold", s.soft, s.text)}>{fill(ui.score, { score: best, total })}</p>
        </Rise>
      )}
      <Rise i={4} className="mt-6 flex flex-wrap justify-center gap-3">
        {next && (
          <Link href={`/${lang}/guide/${next.id}`} className={cn("inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5", s.bg)}>
            {ui.nextDeck}: <span aria-hidden>{next.emoji}</span> {next.title}
            <ArrowRight className="size-4" />
          </Link>
        )}
        <Link href={`/${lang}/guide#decks`} className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-semibold hover:bg-accent">
          {ui.allDecks}
        </Link>
      </Rise>
    </div>
  );
}
