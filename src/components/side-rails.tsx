"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { sectionIds as pageSections, site } from "@/data/site";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";

const sectionIds = ["top", ...pageSections] as const;

// Returns the id of the section that currently covers the middle of the viewport.
function useActiveSection() {
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

type SideRailsProps = {
  nav: Dictionary["nav"];
  location: string;
};

// Scroll progress bar plus the fixed rails that fill the page edges on wide screens.
export function SideRails({ nav, location }: SideRailsProps) {
  const active = useActiveSection();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const socials = [
    { href: site.links.github, label: "GitHub", Icon: GitHubIcon },
    { href: site.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  ].filter((s) => s.href);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-primary via-spark to-share"
      />

      <div className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-5 xl:flex">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary"
          >
            <Icon className="size-5" />
          </a>
        ))}
        <span className="vertical-text font-mono text-xs tracking-[0.3em] text-muted-foreground">
          {location.toUpperCase()}
        </span>
        <span className="h-24 w-px bg-gradient-to-b from-border to-primary" />
      </div>

      <nav
        aria-label={nav.sections}
        className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 xl:flex"
      >
        {sectionIds.map((id) => {
          const label = id === "top" ? nav.home : nav[id];
          const isActive = active === id;
          return (
            <a key={id} href={`#${id}`} aria-label={label} className="group flex items-center gap-3">
              <span
                className={cn(
                  "font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100",
                  isActive && "text-primary opacity-100",
                )}
              >
                {label}
              </span>
              <span
                className={cn(
                  "block rounded-full transition-all duration-300",
                  isActive ? "h-6 w-2 bg-primary" : "size-2 bg-muted-foreground/40 group-hover:bg-primary/70",
                )}
              />
            </a>
          );
        })}
      </nav>
    </>
  );
}
