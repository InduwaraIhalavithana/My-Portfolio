"use client";

import { ArrowRight, RotateCcw, Trophy } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { deckNumber, guideSections, topicCount, trackIds } from "@/data/guide";
import type { GuideText } from "@/i18n/guide/types";
import { Reveal } from "@/components/reveal";
import { deckStyle, fill, trackColor } from "./guide-style";
import { resetProgress, useQuizScores, useSeen } from "./progress-store";

type DeckGridProps = {
  lang: string;
  ui: GuideText["ui"];
  sections: GuideText["sections"];
};

// Every deck as a card, grouped by track and numbered in learning order.
export function DeckGrid({ lang, ui, sections }: DeckGridProps) {
  const { seen } = useSeen();
  const { scores } = useQuizScores();
  const done = guideSections.reduce((n, s) => n + s.topics.filter((t) => seen.has(t.id)).length, 0);
  return (
    <section id="decks" className="container-page scroll-mt-20 py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-mono text-sm font-medium tracking-wide text-primary uppercase">{ui.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{ui.decksTitle}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{ui.decksIntro}</p>
        </div>
        <div className="w-full max-w-xs rounded-2xl border bg-card p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-bold">{ui.progress}</span>
            <button
              type="button"
              onClick={() => {
                if (window.confirm(ui.resetConfirm)) resetProgress();
              }}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="size-3" />
              {ui.resetProgress}
            </button>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-gradient-to-r from-conf via-share to-spark transition-all duration-700" style={{ width: `${(done / topicCount) * 100}%` }} />
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground">{fill(ui.progressCount, { done, total: topicCount })}</p>
          <p className="text-[0.7rem] text-muted-foreground">{ui.progressNote}</p>
        </div>
      </div>

      <div className="space-y-12">
        {trackIds.map((tr) => (
          <div key={tr}>
            <div className="mb-4 flex items-center gap-3">
              <span className={cn("h-8 w-1.5 rounded-full", deckStyle[trackColor[tr]].bg)} />
              <div>
                <h3 className={cn("text-xl font-bold", deckStyle[trackColor[tr]].text)}>{ui.tracks[tr]}</h3>
                <p className="text-sm text-muted-foreground">{ui.trackIntro[tr]}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {guideSections
                .filter((d) => d.track === tr)
                .map((deck, i) => {
                  const number = deckNumber[deck.id];
                  const s = deckStyle[deck.color];
                  const t = sections[deck.id];
                  const seenHere = deck.topics.filter((x) => seen.has(x.id)).length;
                  const pct = (seenHere / deck.topics.length) * 100;
                  const label = seenHere === 0 ? ui.start : seenHere === deck.topics.length ? ui.review : ui.continue;
                  const best = scores[deck.id];
                  return (
                    <Reveal key={deck.id} delay={i * 0.04} className="h-full">
                      <Link
                        href={`/${lang}/guide/${deck.id}`}
                        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      >
                        <div aria-hidden className={cn("absolute -top-10 -right-10 size-32 rounded-full transition-transform duration-500 group-hover:scale-125", s.soft)} />
                        <div className="relative flex items-start justify-between gap-3">
                          <span className={cn("grid size-14 place-items-center rounded-2xl text-3xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110", s.soft)} aria-hidden>
                            {deck.emoji}
                          </span>
                          <span className={cn("font-heading text-3xl font-bold opacity-25", s.text)}>{String(number).padStart(2, "0")}</span>
                        </div>
                        <h4 className="relative mt-4 text-lg font-bold">{t.title}</h4>
                        {t.character && <p className={cn("relative text-xs font-bold tracking-wide uppercase", s.text)}>{t.character.name}</p>}
                        <p className="relative mt-2 flex-1 text-sm text-muted-foreground">{t.intro}</p>
                        <div className="relative mt-4">
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{fill(ui.slides, { count: deck.topics.length })}</span>
                            {best !== undefined && (
                              <span className={cn("inline-flex items-center gap-1 font-semibold", s.text)}>
                                <Trophy className="size-3" /> {best}/{deck.quiz.length}
                              </span>
                            )}
                          </div>
                          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                            <div className={cn("h-full rounded-full transition-all duration-700", s.bg)} style={{ width: `${pct}%` }} />
                          </div>
                          <p className={cn("mt-3 inline-flex items-center gap-1 text-sm font-semibold", s.text)}>
                            {label}
                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                          </p>
                        </div>
                      </Link>
                    </Reveal>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
