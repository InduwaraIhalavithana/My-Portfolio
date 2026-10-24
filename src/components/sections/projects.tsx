import { projects } from "@/data/projects";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Projects({ dict }: { dict: Dictionary }) {
  const t = dict.projects;

  return (
    <section id="projects" className="scroll-mt-20 py-20">
      <div className="container-page">
        <SectionHeading eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHeading>
        <div className="grid gap-10">
          {projects.map((p, i) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} labels={t} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
