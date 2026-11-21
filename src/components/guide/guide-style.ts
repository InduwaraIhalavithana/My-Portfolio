import type { DeckColor, Priority, TrackId } from "@/data/guide";

// Each deck has one colour, used for its cover, icons, borders and progress bars.
export const deckStyle: Record<
  DeckColor,
  { text: string; bg: string; soft: string; softer: string; border: string; ring: string; fill: string; stroke: string }
> = {
  primary: { text: "text-primary", bg: "bg-primary", soft: "bg-primary/15", softer: "bg-primary/5", border: "border-primary/40", ring: "ring-primary/30", fill: "fill-primary", stroke: "stroke-primary" },
  conf: { text: "text-conf", bg: "bg-conf", soft: "bg-conf/15", softer: "bg-conf/5", border: "border-conf/40", ring: "ring-conf/30", fill: "fill-conf", stroke: "stroke-conf" },
  share: { text: "text-share", bg: "bg-share", soft: "bg-share/15", softer: "bg-share/5", border: "border-share/40", ring: "ring-share/30", fill: "fill-share", stroke: "stroke-share" },
  spark: { text: "text-spark", bg: "bg-spark", soft: "bg-spark/15", softer: "bg-spark/5", border: "border-spark/40", ring: "ring-spark/30", fill: "fill-spark", stroke: "stroke-spark" },
  agri: { text: "text-agri", bg: "bg-agri", soft: "bg-agri/15", softer: "bg-agri/5", border: "border-agri/40", ring: "ring-agri/30", fill: "fill-agri", stroke: "stroke-agri" },
};

// Track colours for headings and roadmaps.
export const trackColor: Record<TrackId, DeckColor> = { foundations: "conf", fullstack: "share", ai: "spark", pro: "agri" };

export const priorityStyle: Record<Priority, string> = {
  must: "bg-primary text-primary-foreground border-transparent",
  should: "border-primary/50 text-primary",
  good: "border-border text-muted-foreground",
};

export const fill = (template: string, values: Record<string, number | string>) =>
  template.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? ""));
