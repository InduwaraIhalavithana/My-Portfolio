import type { Priority, TrackId } from "@/data/guide/types";

export type TopicText = {
  title: string;
  /** Plain-words definition. */
  line: string;
  /** A real-life picture that makes it click. */
  analogy: string;
  /** A real scenario where you would meet it. */
  example?: string;
  /** One description per name in the topic's `compare` list, same order. */
  compare?: readonly string[];
  /** "Use it when…" points. */
  use?: readonly string[];
  /** Box labels for flow, cycle and layers pictures. */
  labels?: readonly string[];
  /** Small table for table pictures: a header row and body rows. */
  table?: { head: readonly string[]; rows: readonly (readonly string[])[] };
};

/** Extra slide content written separately from the base topic text, merged in at load time. */
export type TopicExtra = Partial<Pick<TopicText, "example" | "use" | "labels" | "table">>;

export type QuizQuestion = { q: string; options: readonly string[]; why: string };

export type SectionText = {
  title: string;
  intro: string;
  /** The deck's character: a name and one line of personality. */
  character?: { name: string; says: string };
  /** The whole deck in a few lines, for memorising. */
  recap?: readonly string[];
  quiz?: readonly QuizQuestion[];
  /** The deck's Toolbox slide: one row per tool in the deck's `tools` list, plus how to choose. */
  toolbox?: Toolbox;
};

export type Toolbox = { rows: readonly { best: string; pick: string }[]; choose: readonly string[] };

export type SectionExtra = Required<Pick<SectionText, "character" | "recap" | "quiz">>;

export type TrackText = { sections: Record<string, SectionText>; topics: Record<string, TopicText> };
export type TrackExtras = { sections: Record<string, SectionExtra>; topics: Record<string, TopicExtra> };

export type RoleText = { name: string; does: string; builds: string; key: string };

export type GuideText = {
  meta: { title: string; description: string };
  ui: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: { topics: string; tracks: string; languages: string };
    tracks: Record<TrackId | "all", string>;
    trackIntro: Record<TrackId, string>;
    priority: Record<Priority, string>;
    priorityHint: string;
    analogy: string;
    example: string;
    useWhen: string;
    /** "{done} of {total} learned" */
    backToPortfolio: string;
    browseTopics: string;
    decksTitle: string;
    decksIntro: string;
    /** "{count} slides" */
    slides: string;
    start: string;
    deck: string;
    /** "Slide {n} of {total}" */
    slideOf: string;
    previous: string;
    next: string;
    allDecks: string;
    outline: string;
    meet: string;
    youWillLearn: string;
    recapTitle: string;
    quizTitle: string;
    quizIntro: string;
    quizSkip: string;
    check: string;
    correct: string;
    wrong: string;
    /** "You got {score} of {total}" */
    retry: string;
    nextDeck: string;
    finished: string;
    finishedIntro: string;
    keyboardHint: string;
    toolboxTitle: string;
    toolboxIntro: string;
    bestFor: string;
    pickWhen: string;
    howToChoose: string;
  };
  paths: {
    eyebrow: string;
    title: string;
    intro: string;
    roadmapTitle: string;
    overlapTitle: string;
    overlap: string;
    roles: Record<"fullstack" | "ai" | "ml" | "dl", RoleText>;
    labels: { does: string; builds: string; key: string; steps: string };
  };
  practice: {
    eyebrow: string;
    title: string;
    intro: string;
    levels: Record<"beginner" | "intermediate" | "advanced", string>;
    projects: Record<Exclude<TrackId, "pro">, Record<"beginner" | "intermediate" | "advanced", readonly string[]>>;
    resourcesTitle: string;
    resourcesIntro: string;
    resources: Record<string, string>;
    interviewTitle: string;
    interview: readonly string[];
  };
  sections: Record<string, SectionText>;
  topics: Record<string, TopicText>;
};
