import { Check, Play, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { labs } from "@/data/labs";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { GitHubIcon } from "@/components/brand-icons";
import { ProjectSlideshow } from "@/components/project-slideshow";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

// Step colours: orange for the manual way, green for the automated way.
const stepColors = ["bg-share", "bg-agri"];

export function Labs({ dict }: { dict: Dictionary }) {
  const t = dict.labs;

  return (
    <section id="labs" className="scroll-mt-20 py-20">
      <div className="container-page">
        <SectionHeading eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHeading>

        <div className="grid gap-10">
          {labs.map((lab) => {
            const text = t.items[lab.slug];
            return (
              <Reveal key={lab.slug}>
                {/* min-w-0 lets long Sinhala or Tamil words wrap instead of widening the grid. */}
                <article className="grid grid-cols-1 overflow-hidden rounded-3xl border bg-card shadow-sm break-words lg:grid-cols-[1.15fr_1fr] [&>*]:min-w-0">
                  <div className="flex flex-col justify-center gap-4 bg-conf/10 p-4 sm:p-6">
                    {/* The cover comes first, then the presentation slides. */}
                    <ProjectSlideshow
                      slides={[
                        { src: lab.cover, alt: `${lab.name} ${t.cover}`, fit: "cover" },
                        ...lab.slides.map((src, i) => ({
                          src,
                          alt: `${lab.name}: ${text.slides[i]}`,
                          caption: text.slides[i],
                          fit: "contain" as const,
                        })),
                      ]}
                      accentText="text-conf"
                      accentDot="bg-conf"
                      labels={{ previous: t.previousSlide, next: t.nextSlide, show: t.showSlide }}
                    />
                  </div>

                  <div className="flex flex-col p-6 sm:p-8">
                    <p className="font-mono text-xs font-semibold tracking-wide text-conf uppercase">{text.tagline}</p>
                    <h3 className="mt-1 text-2xl font-bold sm:text-3xl">{lab.name}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{text.summary}</p>

                    <h4 className="mt-6 text-sm font-semibold">{t.stepsTitle}</h4>
                    <ol className="mt-2 grid gap-2 text-sm">
                      {text.steps.map((s, i) => (
                        <li key={s} className="flex gap-3">
                          <span
                            className={cn(
                              "grid size-6 shrink-0 place-items-center rounded-full text-xs font-bold text-white",
                              stepColors[i % stepColors.length],
                            )}
                          >
                            {i + 1}
                          </span>
                          <span className="pt-0.5">{s}</span>
                        </li>
                      ))}
                    </ol>

                    <h4 className="mt-6 flex items-center gap-1.5 text-sm font-semibold">
                      <Wrench className="size-4 text-conf" /> {t.solvedTitle}
                    </h4>
                    <ul className="mt-2 grid gap-2 text-sm">
                      {text.solved.map((s) => (
                        <li key={s} className="flex gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-conf" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={t.techStack}>
                      {lab.stack.map((s) => (
                        <li key={s} className="rounded-md border bg-muted/60 px-2 py-1 font-mono text-xs">
                          {s}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      <Button variant="outline" asChild>
                        <a href={lab.repo} target="_blank" rel="noreferrer">
                          <GitHubIcon /> {t.sourceCode}
                        </a>
                      </Button>
                      {lab.demo && (
                        <Button variant="outline" asChild>
                          <a href={lab.demo} target="_blank" rel="noreferrer">
                            <Play /> {t.watchDemo}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
