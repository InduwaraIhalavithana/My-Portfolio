import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { deckNumber, findDeck, guideSections, nextDeckOf } from "@/data/guide";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getGuideText } from "@/i18n/guide";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { DeckPlayer } from "@/components/guide/deck-player";

export function generateStaticParams() {
  return locales.flatMap((lang) => guideSections.map((s) => ({ lang, deck: s.id })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/guide/[deck]">): Promise<Metadata> {
  const { lang, deck } = await params;
  if (!hasLocale(lang) || !findDeck(deck)) return {};
  const g = await getGuideText(lang);
  const s = g.sections[deck];
  return {
    title: `${s.title} · ${g.meta.title}`,
    description: s.intro,
    alternates: {
      canonical: `/${lang}/guide/${deck}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/guide/${deck}`])),
    },
    openGraph: { type: "website", title: s.title, description: s.intro, url: `/${lang}/guide/${deck}` },
  };
}

export default async function DeckPage({ params }: PageProps<"/[lang]/guide/[deck]">) {
  const { lang, deck: deckId } = await params;
  const deck = findDeck(deckId);
  if (!hasLocale(lang) || !deck) notFound();
  const [dict, g] = await Promise.all([getDictionary(lang), getGuideText(lang)]);
  // Only this deck's words go to the browser.
  const topics = Object.fromEntries(deck.topics.map((t) => [t.id, g.topics[t.id]]));
  const next = nextDeckOf(deck.id);

  return (
    <>
      <SiteHeader lang={lang} nav={dict.nav} page="guide" path={`/guide/${deck.id}`} />
      <main className="flex-1">
        <DeckPlayer
          lang={lang}
          deck={deck}
          number={deckNumber[deck.id]}
          text={g.sections[deck.id]}
          topics={topics}
          ui={g.ui}
          next={next && { id: next.id, title: g.sections[next.id].title, emoji: next.emoji }}
        />
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
