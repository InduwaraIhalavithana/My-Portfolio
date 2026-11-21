import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { guideSections } from "@/data/guide";
import { locales } from "@/i18n/config";

// One entry per language page, each pointing at its translations so search engines pair them up.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/guide", priority: 0.9 },
    ...guideSections.map((s) => ({ path: `/guide/${s.id}`, priority: 0.7 })),
  ];
  return pages.flatMap(({ path, priority }) => {
    const languages = Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}`]));
    return locales.map((lang) => ({
      url: `${site.url}/${lang}${path}`,
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages },
    }));
  });
}
