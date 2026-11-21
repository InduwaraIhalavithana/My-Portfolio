// Shape of the study guide. Structure (order, priority, visuals, quiz answers) lives here in
// src/data/guide; every word a reader sees lives in src/i18n/guide/<lang>, keyed by the same ids.

export const trackIds = ["foundations", "fullstack", "ai", "pro"] as const;
export type TrackId = (typeof trackIds)[number];

export const priorities = ["must", "should", "good"] as const;
export type Priority = (typeof priorities)[number];

/** Hand-drawn charts for ideas that are easier to see than to read. */
export const chartIds = [
  "big-o",
  "binary-search",
  "stack-queue",
  "tree",
  "overfit",
  "bias-variance",
  "gradient",
  "activation",
  "confusion",
  "regression",
  "clusters",
  "scaling",
  "bell",
] as const;
export type ChartId = (typeof chartIds)[number];

/**
 * The picture on a slide.
 * flow / cycle / layers read their box labels from the dictionary (`labels`), table reads `table`.
 */
export type Visual = "flow" | "cycle" | "layers" | "table" | ChartId;

export type GuideTopic = {
  id: string;
  priority: Priority;
  /** A big friendly picture for the slide. */
  emoji: string;
  visual?: Visual;
  /** Code or a command, shown as-is in every language. */
  code?: string;
  /** Names of the things compared in an "X vs Y" topic; their descriptions come from the dictionary. */
  compare?: readonly string[];
};

export type GuideSection = {
  id: string;
  track: TrackId;
  icon: GuideIcon;
  /** The section's character: a face for the deck. */
  emoji: string;
  /** Deck colour, one of the site's accent tokens. */
  color: DeckColor;
  topics: readonly GuideTopic[];
  /** Index of the right option for each knowledge-check question, same order as the dictionary. */
  quiz: readonly number[];
  /** Everyday tools for this deck's Toolbox slide; what each is for comes from the dictionary, same order. */
  tools: readonly string[];
};

export type DeckColor = "conf" | "share" | "spark" | "agri" | "primary";

export type GuideIcon =
  | "code"
  | "binary"
  | "sparkles"
  | "puzzle"
  | "cpu"
  | "wrench"
  | "test"
  | "shield"
  | "layout"
  | "server"
  | "key"
  | "database"
  | "boxes"
  | "cloud"
  | "network"
  | "sigma"
  | "table"
  | "tree"
  | "target"
  | "brain"
  | "bot"
  | "rocket"
  | "scale";
