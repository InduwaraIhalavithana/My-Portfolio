export const locales = ["en", "si", "ta"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// Each language named in its own script, as shown in the switcher.
export const localeNames: Record<Locale, string> = {
  en: "English",
  si: "සිංහල",
  ta: "தமிழ்",
};

export const LOCALE_COOKIE = "lang";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Remembers the visitor's choice so a later visit to "/" opens the same language.
export function saveLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}
