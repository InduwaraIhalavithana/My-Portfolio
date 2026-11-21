import { Bot, Brain, Layers, LineChart, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { deckNumber, roleIds, rolePaths, type RoleId } from "@/data/guide";
import type { GuideText } from "@/i18n/guide/types";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const roleLook: Record<RoleId, { Icon: LucideIcon; text: string; bg: string; soft: string; border: string }> = {
  fullstack: { Icon: Layers, text: "text-share", bg: "bg-share", soft: "bg-share/10", border: "border-share/40" },
  ai: { Icon: Bot, text: "text-spark", bg: "bg-spark", soft: "bg-spark/10", border: "border-spark/40" },
  ml: { Icon: LineChart, text: "text-agri", bg: "bg-agri", soft: "bg-agri/10", border: "border-agri/40" },
  dl: { Icon: Brain, text: "text-conf", bg: "bg-conf", soft: "bg-conf/10", border: "border-conf/40" },
};

type RolePathsProps = {
  lang: string;
  paths: GuideText["paths"];
  sections: GuideText["sections"];
};

// The four roles, what each one does, and the order to learn the guide's sections in.
export function RolePaths({ lang, paths, sections }: RolePathsProps) {
  return (
    <section id="paths" className="relative scroll-mt-20 bg-muted/40 py-16">
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-page relative">
        <SectionHeading eyebrow={paths.eyebrow} title={paths.title}>
          {paths.intro}
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2">
          {roleIds.map((id, i) => {
            const r = paths.roles[id];
            const look = roleLook[id];
            return (
              <Reveal key={id} delay={i * 0.05} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card">
                  <div className={cn("h-1.5", look.bg)} />
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-3">
                      <span className={cn("grid size-11 place-items-center rounded-xl", look.soft)}>
                        <look.Icon className={cn("size-6", look.text)} />
                      </span>
                      <h3 className="text-xl font-bold">{r.name}</h3>
                    </div>
                    <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-3">
                      {(["does", "builds", "key"] as const).map((k) => (
                        <div key={k} className="rounded-xl bg-muted/60 p-3">
                          <dt className={cn("text-xs font-bold", look.text)}>{paths.labels[k]}</dt>
                          <dd className="mt-1 leading-relaxed text-muted-foreground">{r[k]}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-4 text-xs font-bold tracking-wide text-muted-foreground uppercase">
                      {paths.labels.steps}
                    </p>
                    <ol className="mt-2 flex flex-wrap items-center gap-y-2">
                      {rolePaths[id].map((sectionId, n) => (
                        <li key={sectionId} className="flex items-center">
                          <a
                            href={`/${lang}/guide/${sectionId}`}
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-all hover:-translate-y-0.5 hover:shadow-md",
                              look.border,
                            )}
                          >
                            <span
                              className={cn(
                                "grid size-4 place-items-center rounded-full font-mono text-[0.6rem] font-bold text-white",
                                look.bg,
                              )}
                            >
                              {deckNumber[sectionId]}
                            </span>
                            {sections[sectionId].title}
                          </a>
                          {n < rolePaths[id].length - 1 && (
                            <span aria-hidden className={cn("mx-1 h-0.5 w-3", look.bg)} />
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-4">
          <div className="rounded-2xl border bg-card p-5">
            <h3 className="font-bold">{paths.overlapTitle}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{paths.overlap}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
