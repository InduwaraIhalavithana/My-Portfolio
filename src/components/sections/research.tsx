import Image from "next/image";
import { Download, FlaskConical, Presentation, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { OWNER_AUTHOR, research } from "@/data/research";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const objectiveColors = ["bg-conf", "bg-agri", "bg-spark", "bg-share"];

export function Research({ dict }: { dict: Dictionary }) {
  const t = dict.research;

  return (
    <section id="research" className="scroll-mt-20 py-20">
      <div className="container-page">
        <SectionHeading eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHeading>

        {research.map((r) => {
          const text = t.items[r.slug];
          return (
            <Reveal key={r.slug}>
              {/* min-w-0 lets long Sinhala or Tamil words wrap instead of widening the grid. */}
              <article className="grid grid-cols-1 overflow-hidden rounded-3xl border bg-card shadow-sm break-words lg:grid-cols-[340px_1fr] xl:grid-cols-[420px_1fr] [&>*]:min-w-0">
                <div className="bg-spark/10">
                  <a
                    href={r.poster.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block p-5 lg:sticky lg:top-16"
                    aria-label={t.openPoster}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl border shadow-lg">
                      <Image
                        src={r.poster.image}
                        alt={`${t.posterAlt}: ${r.title}`}
                        fill
                        sizes="(min-width: 1280px) 380px, (min-width: 1024px) 300px, 90vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-spark">
                      <Presentation className="size-4" /> {t.viewPoster}
                    </span>
                  </a>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-agri/15 px-3 py-1 text-agri">
                      <span className="size-1.5 animate-pulse rounded-full bg-agri" /> {text.status}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-spark/15 px-3 py-1 text-spark">
                      <FlaskConical className="size-3.5" /> {text.venue}
                    </span>
                  </div>

                  <h3 lang="en" className="mt-4 text-xl leading-snug font-bold sm:text-2xl">
                    {r.title}
                  </h3>
                  {text.translatedTitle && (
                    <p className="mt-1 font-medium text-foreground/80">{text.translatedTitle}</p>
                  )}
                  <p className="mt-2 text-sm text-muted-foreground">
                    {r.authors.map((a, i) => (
                      <span key={a}>
                        <span
                          className={cn(
                            a === OWNER_AUTHOR &&
                              "font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4",
                          )}
                        >
                          {a}
                        </span>
                        {i < r.authors.length - 1 && ", "}
                      </span>
                    ))}
                    <span className="block">{text.affiliation}</span>
                  </p>

                  <blockquote className="mt-5 flex gap-3 rounded-2xl border-l-4 border-primary bg-primary/5 p-4">
                    <Quote className="size-5 shrink-0 text-primary" />
                    <p className="italic">{text.question}</p>
                  </blockquote>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-bold tracking-wide text-muted-foreground uppercase">
                        {t.problemTitle}
                      </h4>
                      <ul className="mt-2 space-y-2 text-sm">
                        {text.problem.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-destructive" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wide text-muted-foreground uppercase">
                        {t.objectivesTitle}
                      </h4>
                      <ol className="mt-2 space-y-2 text-sm">
                        {text.objectives.map((o, i) => (
                          <li key={o} className="flex gap-2">
                            <span
                              className={cn(
                                "grid size-5 shrink-0 place-items-center rounded-full text-[11px] font-bold text-white",
                                objectiveColors[i % objectiveColors.length],
                              )}
                            >
                              {i + 1}
                            </span>
                            {o}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <h4 className="mt-6 text-sm font-bold tracking-wide text-muted-foreground uppercase">
                    {t.techTitle}
                  </h4>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {r.technologies.map((name, i) => (
                      <li key={name} className="rounded-xl border bg-muted/50 px-3 py-2">
                        <span className="block text-sm font-semibold">{name}</span>
                        <span className="block text-xs text-muted-foreground">{text.technologies[i]}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button variant="outline" asChild>
                      <a href={r.poster.pdf} download>
                        <Download /> {t.downloadPoster}
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
