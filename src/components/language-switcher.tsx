"use client";

import { Check, Languages } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { localeNames, locales, saveLocale, type Locale } from "@/i18n/config";
import { Button } from "@/components/ui/button";

type LanguageSwitcherProps = {
  lang: Locale;
  label: string;
};

// Dropdown that moves to /en, /si or /ta, keeps the current section, and remembers the choice.
export function LanguageSwitcher({ lang, label }: LanguageSwitcherProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  const choose = (next: Locale) => {
    setOpen(false);
    if (next === lang) return;
    saveLocale(next);
    router.push(`/${next}${window.location.hash}`, { scroll: false });
  };

  return (
    <div ref={ref} className="relative">
      <Button
        variant="ghost"
        className="gap-1.5 px-2.5"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <Languages className="size-5" />
        <span className="text-sm font-semibold">{localeNames[lang]}</span>
      </Button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border bg-popover p-1 text-popover-foreground shadow-xl animate-in fade-in zoom-in-95"
        >
          {locales.map((l) => (
            <li key={l} role="option" aria-selected={l === lang}>
              <button
                type="button"
                lang={l}
                onClick={() => choose(l)}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-accent",
                  l === lang && "font-semibold text-primary",
                )}
              >
                {localeNames[l]}
                {l === lang && <Check className="size-4" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
