import "server-only";
import type { Locale } from "../config";
import type { GuideText } from "./types";

// The guide has its own dictionaries so the main site's stay small.
const guideTexts: Record<Locale, () => Promise<GuideText>> = {
  en: () => import("./en").then((m) => m.guideEn),
  si: () => import("./si").then((m) => m.guideSi),
  ta: () => import("./ta").then((m) => m.guideTa),
};

export const getGuideText = (locale: Locale) => guideTexts[locale]();
