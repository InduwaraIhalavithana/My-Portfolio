"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { deckNumber, guideSections, trackIds } from "@/data/guide";
import type { GuideText } from "@/i18n/guide/types";
import { Reveal } from "@/components/reveal";
import { deckStyle, fill, trackColor } from "./guide-style";

type DeckGridProps = {
  lang: string;
  ui: GuideText["ui"];
  sections: GuideText["sections"];
};

// Every deck as a card, grouped by track and numbered in learning order.
export function DeckGrid({ lang, ui, sections }: DeckGridProps) {
  return (
    <section id="decks" className="container-page scroll-mt-20 py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="font-mono text-sm font-medium tracking-wide text-primary uppercase">{ui.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{ui.decksTitle}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{ui.decksIntro}</p>
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
                          <p className="text-xs text-muted-foreground">{fill(ui.slides, { count: deck.topics.length })}</p>
                          <p className={cn("mt-2 inline-flex items-center gap-1 text-sm font-semibold", s.text)}>
                            {ui.start}
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
