import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <p className="font-mono text-sm font-medium tracking-wide text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      {children && <p className="mt-3 text-lg text-muted-foreground">{children}</p>}
    </Reveal>
  );
}
