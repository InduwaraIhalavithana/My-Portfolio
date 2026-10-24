import Image from "next/image";
import { ArrowRight, FileDown, GraduationCap, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";

// Values only; labels come from the dictionary in the same order.
const statValues = [String(projects.length), "3", "240+", "10+"];

const floatingChips = [
  { label: "React", className: "left-0 top-8 text-conf sm:-left-4" },
  { label: "FastAPI", className: "right-0 top-1/3 text-agri sm:-right-6" },
  { label: "PostgreSQL", className: "left-0 bottom-16 text-share sm:-left-8" },
  { label: "XGBoost", className: "right-0 bottom-4 text-spark sm:-right-2" },
];

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero, common } = dict;

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Colour blobs and dot grid behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"
      >
        <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-24 left-1/4 size-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute top-40 -right-20 size-80 rounded-full bg-spark/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-agri/20 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-12 pt-14 pb-16 lg:grid-cols-[1.3fr_1fr] lg:pt-20 xl:gap-20">
        <div>
          <FadeIn>
            <div className="mb-5 flex flex-wrap gap-2 text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full border bg-card/70 px-3 py-1 backdrop-blur">
                <GraduationCap className="size-4 text-primary" /> {site.degreeShort} · {common.university}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border bg-card/70 px-3 py-1 backdrop-blur">
                <MapPin className="size-4 text-share" /> {common.location}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="font-mono text-sm font-medium tracking-wide text-primary uppercase">
              {hero.greeting}
            </p>
            <h1 className="mt-2 text-5xl font-extrabold sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-gradient">{site.name}</span>
            </h1>
            <p className="mt-4 text-xl font-semibold text-foreground/90 sm:text-2xl">{hero.role}</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground xl:text-xl">{hero.tagline}</p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#projects">
                  {hero.seeProjects} <ArrowRight />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={site.links.github} target="_blank" rel="noreferrer">
                  <GitHubIcon /> GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={site.links.linkedin} target="_blank" rel="noreferrer">
                  <LinkedInIcon /> LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href={site.links.cv} download>
                  <FileDown /> {common.downloadCv}
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {statValues.map((value, i) => (
                <div
                  key={hero.stats[i]}
                  className="rounded-xl border bg-card/70 p-3 backdrop-blur transition-transform hover:-translate-y-0.5"
                >
                  <dt className="sr-only">{hero.stats[i]}</dt>
                  <dd className="font-heading text-2xl font-bold text-primary">{value}</dd>
                  <dd className="text-xs leading-snug text-muted-foreground">{hero.stats[i]}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="relative mx-auto w-full max-w-sm xl:max-w-md">
          <div className="relative aspect-square rounded-[2rem] bg-gradient-to-br from-primary via-spark to-share p-1.5 shadow-2xl shadow-primary/20">
            <div className="relative size-full overflow-hidden rounded-[1.7rem] bg-card">
              <Image
                src={site.photo}
                alt={hero.portraitAlt}
                fill
                priority
                sizes="(min-width: 1024px) 384px, 80vw"
                className="object-cover"
              />
            </div>
          </div>
          {floatingChips.map((chip, i) => (
            <span
              key={chip.label}
              style={{ animationDelay: `${i * 0.6}s` }}
              className={`absolute ${chip.className} animate-bounce rounded-full border bg-card px-3 py-1.5 font-mono text-xs font-semibold shadow-lg [animation-duration:3s] motion-reduce:animate-none`}
            >
              {chip.label}
            </span>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
