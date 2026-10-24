import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Accent, Project } from "@/data/projects";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { GitHubIcon } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";

// Tailwind needs full class names in the source, so each accent spells them out.
const accentClasses: Record<Accent, { text: string; soft: string; border: string; glow: string }> = {
  agri: { text: "text-agri", soft: "bg-agri/10", border: "border-agri/30", glow: "hover:shadow-agri/20" },
  share: { text: "text-share", soft: "bg-share/10", border: "border-share/30", glow: "hover:shadow-share/20" },
  conf: { text: "text-conf", soft: "bg-conf/10", border: "border-conf/30", glow: "hover:shadow-conf/20" },
};

type ProjectCardProps = {
  project: Project;
  labels: Dictionary["projects"];
  flip?: boolean;
};

export function ProjectCard({ project, labels, flip = false }: ProjectCardProps) {
  const a = accentClasses[project.accent];
  const text = labels.items[project.slug];

  return (
    <article
      className={cn(
        "group grid grid-cols-1 overflow-hidden rounded-3xl border bg-card shadow-sm break-words transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:grid-cols-2 [&>*]:min-w-0",
        a.glow,
      )}
    >
      {/* Covers are 16:9 artwork with text, so they are never cropped; the column fills with the accent. */}
      <div className={cn("relative flex flex-col justify-center gap-4 p-4 sm:p-6", a.soft, flip && "lg:order-2")}>
        <span
          className={cn(
            "w-fit rounded-full border bg-background/85 px-3 py-1 text-xs font-semibold backdrop-blur",
            a.text,
          )}
        >
          {text.context}
        </span>
        <div className="relative aspect-video overflow-hidden rounded-2xl border shadow-lg">
          <Image
            src={project.cover}
            alt={`${project.name} ${labels.cover}`}
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-col p-6 sm:p-8">
        <p className={cn("font-mono text-xs font-semibold tracking-wide uppercase", a.text)}>{text.tagline}</p>
        <h3 className="mt-1 text-2xl font-bold sm:text-3xl">{project.name}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{text.summary}</p>

        <ul className="mt-5 grid gap-2 text-sm">
          {text.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <Check className={cn("mt-0.5 size-4 shrink-0", a.text)} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <dl className="mt-6 grid grid-cols-3 gap-2">
          {project.stats.map((value, i) => (
            <div key={text.stats[i]} className={cn("rounded-xl border p-3 text-center", a.soft, a.border)}>
              <dd className={cn("font-heading text-xl font-bold", a.text)}>{value}</dd>
              <dt className="text-[11px] leading-tight text-muted-foreground">{text.stats[i]}</dt>
            </div>
          ))}
        </dl>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label={labels.techStack}>
          {project.stack.map((t) => (
            <li key={t} className="rounded-md border bg-muted/60 px-2 py-1 font-mono text-xs">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <Button variant="outline" asChild>
            <a href={project.repo} target="_blank" rel="noreferrer">
              <GitHubIcon /> {labels.sourceCode}
            </a>
          </Button>
          {project.live && (
            <Button asChild>
              <a href={project.live} target="_blank" rel="noreferrer">
                {labels.liveDemo}
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
