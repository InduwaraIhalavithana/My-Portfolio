import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

// CSS-only entrance for above-the-fold content: visible without JavaScript and before hydration.
export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <div
      className={cn(
        "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both motion-reduce:animate-none",
        className,
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
