import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.en),
  si: () => import("./dictionaries/si").then((m) => m.si),
  ta: () => import("./dictionaries/ta").then((m) => m.ta),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
