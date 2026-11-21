"use client";

import { GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { sectionIds, site } from "@/data/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { GitHubIcon } from "@/components/brand-icons";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

type SiteHeaderProps = {
  lang: Locale;
  nav: Dictionary["nav"];
  /** Which page the header sits on; section links point back to the home page from the guide. */
  page?: "home" | "guide";
  /** Path after the language segment, kept when switching language. Defaults to the page's own. */
  path?: string;
};

export function SiteHeader({ lang, nav, page = "home", path }: SiteHeaderProps) {
  const sectionHref = (id: string) => (page === "home" ? `#${id}` : `/${lang}#${id}`);
  const guideHref = `/${lang}/guide`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-2">
        <a href={page === "home" ? "#top" : `/${lang}`} className="group flex items-center gap-2 font-heading text-lg font-bold">
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm text-primary-foreground transition-transform group-hover:rotate-6">
            II
          </span>
          <span className="hidden sm:inline">{site.shortName}</span>
        </a>

        <nav aria-label={nav.sections} className="hidden items-center gap-1 xl:flex">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={sectionHref(id)}
              className="rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {nav[id]}
            </a>
          ))}
          <Link
            href={guideHref}
            aria-current={page === "guide" ? "page" : undefined}
            className={cn(
              "ml-1 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold whitespace-nowrap transition-all",
              page === "guide"
                ? "bg-primary text-primary-foreground"
                : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
            )}
          >
            <GraduationCap className="size-4" />
            {nav.guide}
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher lang={lang} label={nav.language} path={path ?? (page === "guide" ? "/guide" : "")} />
          <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
            <a href={site.links.github} target="_blank" rel="noreferrer" aria-label={nav.githubProfile}>
              <GitHubIcon className="size-5" />
            </a>
          </Button>
          <ThemeToggle label={nav.toggleTheme} />
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav aria-label={nav.sections} className="border-t px-4 pb-4 xl:hidden">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={sectionHref(id)}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-3 font-medium hover:bg-accent"
            >
              {nav[id]}
            </a>
          ))}
          <Link
            href={guideHref}
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-2 rounded-md bg-primary/10 px-3 py-3 font-semibold text-primary"
          >
            <GraduationCap className="size-4" />
            {nav.guide}
          </Link>
        </nav>
      )}
    </header>
  );
}
