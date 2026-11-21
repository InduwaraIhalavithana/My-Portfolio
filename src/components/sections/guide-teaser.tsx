import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { guideSections, roleIds, topicCount } from "@/data/guide";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

// A sample of topic names; they are technical terms, so they stay the same in every language.
const sampleTopics = [
  { label: "Big-O", color: "text-conf border-conf/40" },
  { label: "SOLID", color: "text-conf border-conf/40" },
  { label: "Design patterns", color: "text-conf border-conf/40" },
  { label: "REST vs GraphQL", color: "text-share border-share/40" },
  { label: "JWT", color: "text-share border-share/40" },
  { label: "Docker", color: "text-share border-share/40" },
  { label: "SQL vs NoSQL", color: "text-share border-share/40" },
  { label: "XGBoost", color: "text-spark border-spark/40" },
  { label: "Transformers", color: "text-spark border-spark/40" },
  { label: "RAG", color: "text-spark border-spark/40" },
  { label: "LoRA", color: "text-spark border-spark/40" },
  { label: "MLOps", color: "text-spark border-spark/40" },
];

export function GuideTeaser({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const t = dict.guideTeaser;

  return (
    <section id="guide" className="scroll-mt-20 py-20">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border bg-card p-6 sm:p-10">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-10 size-72 rounded-full bg-conf/20 blur-3xl" />
              <div className="absolute -right-10 -bottom-24 size-72 rounded-full bg-spark/20 blur-3xl" />
              <div className="absolute top-10 right-1/3 size-48 rounded-full bg-share/15 blur-3xl" />
            </div>

            <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="inline-flex items-center gap-1.5 font-mono text-sm font-medium tracking-wide text-primary uppercase">
                  <GraduationCap className="size-4" />
                  {t.eyebrow}
                </p>
                <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{t.title}</h2>
                <p className="mt-3 text-lg text-muted-foreground">{t.intro}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                  {t.points.map((p, i) => (
                    <li key={p} className="rounded-xl border bg-background/60 p-3 text-sm backdrop-blur">
                      <span className={`font-heading text-2xl font-bold ${["text-conf", "text-share", "text-spark"][i]}`}>
                        {[topicCount, guideSections.length, roleIds.length][i]}
                      </span>
                      <span className="block text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-6 rounded-full">
                  <Link href={`/${lang}/guide`}>
                    {t.cta}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>

              <ul className="flex flex-wrap gap-2" aria-label={t.sampleLabel}>
                {sampleTopics.map((s, i) => (
                  <li
                    key={s.label}
                    className={`animate-in fade-in zoom-in-90 rounded-full border bg-background/70 px-3.5 py-1.5 font-mono text-sm font-semibold backdrop-blur fill-mode-both motion-reduce:animate-none ${s.color}`}
                    style={{ animationDelay: `${i * 60}ms`, animationDuration: "500ms" }}
                  >
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
