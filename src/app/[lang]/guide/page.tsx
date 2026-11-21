import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Compass, Languages, Layers, Presentation } from "lucide-react";
import { guideSections, topicCount, trackIds } from "@/data/guide";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getGuideText } from "@/i18n/guide";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FadeIn } from "@/components/fade-in";
import { DeckGrid } from "@/components/guide/deck-grid";
import { Practice } from "@/components/guide/practice";
import { RolePaths } from "@/components/guide/role-paths";
import { Button } from "@/components/ui/button";

export async function generateMetadata({ params }: PageProps<"/[lang]/guide">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const g = await getGuideText(lang);
  return {
    title: g.meta.title,
    description: g.meta.description,
    alternates: {
      canonical: `/${lang}/guide`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/guide`])),
    },
    openGraph: { type: "website", title: g.meta.title, description: g.meta.description, url: `/${lang}/guide` },
    twitter: { card: "summary_large_image", title: g.meta.title, description: g.meta.description },
  };
}

export default async function GuidePage({ params }: PageProps<"/[lang]/guide">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const [dict, g] = await Promise.all([getDictionary(lang), getGuideText(lang)]);
  const { ui } = g;
  // Only what the deck cards need, so the page stays light.
  const cardText = Object.fromEntries(
    guideSections.map((s) => [s.id, { title: g.sections[s.id].title, intro: g.sections[s.id].intro, character: g.sections[s.id].character }]),
  );

  const stats = [
    { value: `${guideSections.length}`, label: ui.decksTitle, Icon: Presentation, color: "text-conf" },
    { value: `${topicCount}`, label: ui.stats.topics, Icon: Layers, color: "text-share" },
    { value: `${locales.length}`, label: ui.stats.languages, Icon: Languages, color: "text-spark" },
  ];

  return (
    <>
      <SiteHeader lang={lang} nav={dict.nav} page="guide" />
      <main className="flex-1">
        <section id="top" className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
            <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
            <div className="absolute -top-24 left-1/4 size-96 rounded-full bg-conf/20 blur-3xl" />
            <div className="absolute top-20 -right-20 size-80 rounded-full bg-spark/20 blur-3xl" />
            <div className="absolute -bottom-24 left-10 size-72 rounded-full bg-share/20 blur-3xl" />
          </div>

          <div className="container-page grid items-center gap-10 pt-10 pb-8 lg:grid-cols-[1.4fr_1fr] lg:pt-16">
            <FadeIn>
              <a href={`/${lang}`} className="mb-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="size-4" />
                {ui.backToPortfolio}
              </a>
              <p className="font-mono text-sm font-medium tracking-wide text-primary uppercase">{ui.eyebrow}</p>
              <h1 className="mt-2 text-4xl leading-tight font-bold sm:text-5xl">
                <span className="text-gradient">{ui.title}</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{ui.intro}</p>
              <p className="mt-3 max-w-2xl text-sm font-medium">{ui.priorityHint}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <a href={`/${lang}/guide/${guideSections[0].id}`}>
                    {ui.start}: {guideSections[0].emoji} {g.sections[guideSections[0].id].title}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href="#paths">
                    <Compass className="size-4" />
                    {g.paths.title}
                  </a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ul className="grid grid-cols-3 gap-3">
                {stats.map(({ value, label, Icon, color }) => (
                  <li key={label} className="rounded-2xl border bg-card/80 p-4 text-center shadow-sm backdrop-blur">
                    <Icon className={`mx-auto size-6 ${color}`} />
                    <p className="mt-2 font-heading text-2xl font-bold sm:text-3xl">{value}</p>
                    <p className="text-xs text-muted-foreground sm:text-sm">{label}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2" aria-hidden>
                {guideSections.map((s) => (
                  <span key={s.id} className="grid size-10 place-items-center rounded-xl border bg-card/80 text-xl backdrop-blur transition-transform hover:-translate-y-1 hover:rotate-6">
                    {s.emoji}
                  </span>
                ))}
              </div>
              <ul className="mt-3 grid gap-2">
                {trackIds.map((tr, i) => (
                  <li key={tr} className={`flex items-center gap-3 rounded-xl border border-l-4 bg-card/80 px-4 py-2.5 text-sm backdrop-blur ${["border-l-conf", "border-l-share", "border-l-spark", "border-l-agri"][i]}`}>
                    <span className="font-semibold">{ui.tracks[tr]}</span>
                    <span className="text-muted-foreground">{ui.trackIntro[tr]}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        <DeckGrid lang={lang} ui={ui} sections={cardText} />
        <RolePaths lang={lang} paths={g.paths} sections={g.sections} />
        <Practice practice={g.practice} tracks={ui.tracks} />
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
