import Image from "next/image";
import { BadgeCheck, GraduationCap } from "lucide-react";
import { site } from "@/data/site";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About({ dict }: { dict: Dictionary }) {
  const t = dict.about;

  return (
    <section id="about" className="scroll-mt-20 bg-muted/40 py-20">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1.6fr]">
        <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border shadow-xl">
          <Image src={site.photo} alt="" fill sizes="384px" className="object-cover" />
        </Reveal>
        <div>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} />
          <Reveal className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              {t.p1Start}
              <span className="font-semibold text-foreground">{t.p1Strong}</span>
              {t.p1End}
            </p>
            <p>{t.p2}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 border-l-4 border-spark pl-4 font-heading text-xl font-semibold">{t.motto}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex gap-4 rounded-2xl border bg-card p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                <GraduationCap className="size-6" />
              </span>
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{t.educationLabel}</p>
                <p className="mt-1 text-lg font-bold">{t.degree}</p>
                <p className="text-muted-foreground">{dict.common.university}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-agri/15 px-3 py-1 text-sm font-semibold text-agri">
                  <BadgeCheck className="size-4" /> {t.studyStatus}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-3 grid grid-cols-2 gap-3 xl:grid-cols-4">
              {t.facts.map((f) => (
                <div key={f.label} className="rounded-xl border bg-card p-4">
                  <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{f.label}</dt>
                  <dd className="mt-1 font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
