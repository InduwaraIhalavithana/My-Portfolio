import Image from "next/image";
import { CircleCheck, Download, FlaskConical, Milestone, Presentation, Quote, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { OWNER_AUTHOR, research } from "@/data/research";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { ProjectSlideshow } from "@/components/project-slideshow";
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
              <article className="grid grid-cols-1 overflow-hidden rounded-3xl border bg-card shadow-sm break-words lg:grid-cols-[1.15fr_1fr] [&>*]:min-w-0">
                <div className="bg-spark/10 p-4 sm:p-6">
                  {/* Sticky, so the slides stay in view beside the longer Sinhala and Tamil text. */}
                  <div className="flex flex-col gap-4 lg:sticky lg:top-20">
                    {/* Proposal presentation slides, as in the Labs section. */}
                    <ProjectSlideshow
                      slides={r.slides.map((src, i) => ({
                        src,
                        alt: `${r.title}: ${text.slides[i]}`,
                        caption: text.slides[i],
                        fit: "contain" as const,
                      }))}
                      accentText="text-spark"
                      accentDot="bg-spark"
                      labels={{
                        previous: t.previousSlide,
                        next: t.nextSlide,
                        show: t.showSlide,
                      }}
                    />

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      <div className="rounded-2xl border bg-card p-4">
                        <h4 className="flex items-center gap-1.5 text-sm font-bold tracking-wide text-muted-foreground uppercase">
                          <Milestone className="size-4 text-spark" /> {t.progressTitle}
                        </h4>
                        <ol className="mt-2 space-y-2 text-sm">
                          {text.progress.map((step, i) => {
                            const current = i === text.progress.length - 1;
                            return (
                              <li key={step} className="flex gap-2">
                                {current ? (
                                  <span className="mt-1 grid size-4 shrink-0 place-items-center">
                                    <span className="size-2 animate-pulse rounded-full bg-agri" />
                                  </span>
                                ) : (
                                  <CircleCheck className="mt-0.5 size-4 shrink-0 text-agri" />
                                )}
                                <span className={cn(current && "font-semibold")}>{step}</span>
                              </li>
                            );
                          })}
                        </ol>
                      </div>

                      <a
                        href={r.poster.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex gap-4 rounded-2xl border bg-card p-4 transition-shadow hover:shadow-md"
                        aria-label={t.openPoster}
                      >
                        <div className="relative aspect-[3/4] w-24 shrink-0 overflow-hidden rounded-lg border shadow sm:w-28">
                          <Image
                            src={r.poster.image}
                            alt={`${t.posterAlt}: ${r.title}`}
                            fill
                            sizes="112px"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex min-w-0 flex-col">
                          <span className="text-sm font-bold tracking-wide text-muted-foreground uppercase">
                            {t.posterAlt}
                          </span>
                          <span className="mt-2 text-sm text-muted-foreground">{t.posterNote}</span>
                          <span className="mt-auto flex items-center gap-1.5 pt-3 text-sm font-medium text-spark">
                            <Presentation className="size-4 shrink-0" /> {t.viewPoster}
                          </span>
                        </div>
                      </a>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold tracking-wide text-muted-foreground uppercase">{t.techTitle}</h4>
                      <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                        {r.technologies.map((name, i) => (
                          <li key={name} className="rounded-xl border bg-muted/50 px-3 py-2">
                            <span className="block text-sm font-semibold">{name}</span>
                            <span className="block text-xs text-muted-foreground">{text.technologies[i]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-agri/15 px-3 py-1 text-agri">
                      <span className="size-1.5 animate-pulse rounded-full bg-agri" /> {text.status}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-spark/15 px-3 py-1 text-spark">
                      <FlaskConical className="size-3.5" /> {text.venue}
                    </span>
                    <span lang="en" className="inline-flex items-center rounded-full bg-conf/15 px-3 py-1 text-conf">
                      {r.lab}
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
                    <span className="block">
                      {t.supervisor}: <span lang="en">{r.supervisor}</span>
                    </span>
                    <span className="block">{text.affiliation}</span>
                  </p>

                  <blockquote className="mt-5 flex gap-3 rounded-2xl border-l-4 border-primary bg-primary/5 p-4">
                    <Quote className="size-5 shrink-0 text-primary" />
                    <p className="italic">{text.question}</p>
                  </blockquote>

                  <div className="mt-4 flex gap-3 rounded-2xl border bg-spark/10 p-4">
                    <UserRound className="mt-0.5 size-5 shrink-0 text-spark" />
                    <div>
                      <h4 className="text-sm font-bold tracking-wide text-muted-foreground uppercase">{t.roleTitle}</h4>
                      <p className="mt-1 text-sm leading-relaxed">{text.role}</p>
                    </div>
                  </div>

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
