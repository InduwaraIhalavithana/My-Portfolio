import { cn } from "@/lib/utils";
import { skillGroups, type SkillGroup } from "@/data/skills";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const colorClasses: Record<SkillGroup["color"], { bar: string; chip: string }> = {
  primary: { bar: "bg-primary", chip: "hover:border-primary hover:text-primary" },
  agri: { bar: "bg-agri", chip: "hover:border-agri hover:text-agri" },
  share: { bar: "bg-share", chip: "hover:border-share hover:text-share" },
  conf: { bar: "bg-conf", chip: "hover:border-conf hover:text-conf" },
  spark: { bar: "bg-spark", chip: "hover:border-spark hover:text-spark" },
};

export function Skills({ dict }: { dict: Dictionary }) {
  const t = dict.skills;

  return (
    <section id="skills" className="relative scroll-mt-20 bg-muted/40 py-20">
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-page relative">
        <SectionHeading eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHeading>
        {/* Six-column grid: three cards on the first row, two wider ones on the second, no empty slot. */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((g, i) => {
            const c = colorClasses[g.color];
            return (
              <Reveal key={g.key} delay={i * 0.05} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
                <div className="h-full overflow-hidden rounded-2xl border bg-card">
                  <div className={cn("h-1.5", c.bar)} />
                  <div className="p-5">
                    <h3 className="text-lg font-bold">{t.groups[g.key]}</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <li
                          key={item}
                          className={cn(
                            "rounded-full border px-3 py-1 text-sm transition-colors",
                            c.chip,
                          )}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
