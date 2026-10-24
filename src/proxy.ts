import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, LOCALE_COOKIE, type Locale } from "@/i18n/config";

// Picks the language for a visit to "/": the visitor's last choice, else their browser language.
function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (saved && hasLocale(saved)) return saved;

  const accepted = request.headers.get("accept-language") ?? "";
  for (const part of accepted.split(",")) {
    const code = part.split(";")[0].trim().slice(0, 2).toLowerCase();
    if (hasLocale(code)) return code;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/"],
};
