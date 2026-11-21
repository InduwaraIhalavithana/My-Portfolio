import { ExternalLink, Hammer, Timer } from "lucide-react";
import { cn } from "@/lib/utils";
import { resources, trackIds } from "@/data/guide";
import type { GuideText } from "@/i18n/guide/types";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { deckStyle, trackColor } from "./guide-style";

const levels = ["beginner", "intermediate", "advanced"] as const;

type PracticeProps = {
  practice: GuideText["practice"];
  tracks: GuideText["ui"]["tracks"];
};

// Project ideas by level, free resources, and the one-minute self-test.
export function Practice({ practice, tracks }: PracticeProps) {
  return (
    <section id="practice" className="relative scroll-mt-20 bg-muted/40 py-16">
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-page relative">
        <SectionHeading eyebrow={practice.eyebrow} title={practice.title}>
          {practice.intro}
        </SectionHeading>

        <div className="grid gap-4 lg:grid-cols-3">
          {trackIds.filter((t) => t !== "pro").map((tr, i) => {
            const st = deckStyle[trackColor[tr]];
            return (
              <Reveal key={tr} delay={i * 0.05} className="h-full">
                <article className="h-full overflow-hidden rounded-2xl border bg-card">
                  <div className={cn("flex items-center gap-2 px-5 py-3", st.soft)}>
                    <Hammer className={cn("size-4", st.text)} />
                    <h3 className={cn("font-bold", st.text)}>{tracks[tr]}</h3>
                  </div>
                  <div className="space-y-4 p-5">
                    {levels.map((lv, n) => (
                      <div key={lv}>
                        <p className="flex items-center gap-2 text-xs font-bold tracking-wide uppercase">
                          <span className="flex gap-0.5" aria-hidden>
                            {levels.map((_, d) => (
                              <span key={d} className={cn("h-2.5 w-1.5 rounded-sm", d <= n ? st.bg : "bg-muted")} />
                            ))}
                          </span>
                          {practice.levels[lv]}
                        </p>
                        <ul className="mt-1.5 space-y-1 text-sm text-muted-foreground">
                          {practice.projects[tr][lv].map((p) => (
                            <li key={p} className="flex gap-2">
                              <span className={cn("mt-2 size-1.5 shrink-0 rounded-full", st.bg)} />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[2fr_1fr]">
          <Reveal>
            <div className="rounded-2xl border bg-card p-5">
              <h3 className="text-lg font-bold">{practice.resourcesTitle}</h3>
              <p className="text-sm text-muted-foreground">{practice.resourcesIntro}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {resources.map((r) => (
                  <li key={r.id}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "group flex h-full flex-col rounded-xl border-l-4 bg-muted/50 p-3 transition-colors hover:bg-accent",
                        deckStyle[trackColor[r.track]].border,
                      )}
                    >
                      <span className="flex items-center gap-1.5 text-sm font-semibold">
                        {r.name}
                        <ExternalLink className="size-3 opacity-50 transition-opacity group-hover:opacity-100" />
                      </span>
                      <span className="mt-0.5 text-xs text-muted-foreground">{practice.resources[r.id]}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border bg-gradient-to-br from-primary/15 via-card to-spark/10 p-5">
              <div className="flex items-center gap-2">
                <Timer className="size-5 text-primary" />
                <h3 className="text-lg font-bold">{practice.interviewTitle}</h3>
              </div>
              <ol className="mt-4 space-y-3">
                {practice.interview.map((step, n) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary font-mono text-xs font-bold text-primary-foreground">
                      {n + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
