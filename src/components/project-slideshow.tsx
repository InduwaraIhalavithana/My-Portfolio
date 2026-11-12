"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type Slide = {
  src: string;
  alt: string;
  // Captions are shown under screenshots; the cover artwork already carries its own text.
  caption?: string;
  // Covers are 16:9 artwork and fill the frame; screenshots are wider and are letterboxed instead.
  fit: "cover" | "contain";
};

type ProjectSlideshowProps = {
  slides: Slide[];
  accentText: string;
  accentDot: string;
  labels: { previous: string; next: string; show: string };
};

// One slide is mounted at a time, so only the image on screen is downloaded.
export function ProjectSlideshow({ slides, accentText, accentDot, labels }: ProjectSlideshowProps) {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const count = slides.length;
  const go = (i: number) => setIndex((i + count) % count);
  const slide = slides[index];

  return (
    <div
      className="flex flex-col gap-3"
      role="region"
      aria-roledescription="carousel"
      aria-label={slides[0].alt}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl border bg-[#0b1220] shadow-lg">
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(min-width: 1024px) 540px, 100vw"
          className={cn(
            "animate-in fade-in duration-300",
            slide.fit === "cover" ? "object-cover transition-transform duration-700 group-hover:scale-105" : "object-contain",
          )}
        />
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label={labels.previous}
              className="absolute top-1/2 left-2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-background/80 shadow backdrop-blur transition hover:bg-background"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label={labels.next}
              className="absolute top-1/2 right-2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-background/80 shadow backdrop-blur transition hover:bg-background"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
      </div>

      <div className="flex min-h-6 items-center justify-between gap-3">
        <p className={cn("min-w-0 text-sm font-medium", accentText)} aria-live="polite">
          {slide.caption ?? " "}
        </p>
        {count > 1 && (
          <div className="flex shrink-0 gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`${labels.show} ${i + 1} / ${count}`}
                aria-current={i === index}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index ? cn("w-5", accentDot) : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
