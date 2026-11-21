import { ai } from "./ai";
import { foundations } from "./foundations";
import { fullstack } from "./fullstack";
import { pro } from "./pro";
import type { GuideSection, TrackId } from "./types";

export * from "./types";

export const guideSections: readonly GuideSection[] = [...foundations, ...fullstack, ...ai, ...pro];

export const topicCount = guideSections.reduce((n, s) => n + s.topics.length, 0);

/** Each deck's place in the learning order, starting at 1. */
export const deckNumber: Record<string, number> = Object.fromEntries(guideSections.map((s, i) => [s.id, i + 1]));

export const findDeck = (id: string) => guideSections.find((s) => s.id === id);

/** The deck that comes after this one in the learning order, if any. */
export const nextDeckOf = (id: string) => guideSections[deckNumber[id]];

export const roleIds = ["fullstack", "ai", "ml", "dl"] as const;
export type RoleId = (typeof roleIds)[number];

// Suggested learning order for each role, as section ids. Section names come from the dictionary.
export const rolePaths: Record<RoleId, readonly string[]> = {
  fullstack: ["programming", "dsa", "tools", "frontend", "react", "backend", "databases", "auth", "testing", "security", "devops", "architecture", "system-design", "sdlc", "teamwork"],
  ai: ["programming", "tools", "backend", "data", "classic-ml", "evaluation", "llm", "mlops", "responsible-ai", "sdlc", "teamwork"],
  ml: ["programming", "math", "data", "classic-ml", "evaluation", "deep-learning", "mlops", "responsible-ai", "sdlc", "teamwork"],
  dl: ["programming", "math", "data", "evaluation", "deep-learning", "llm", "mlops", "sdlc", "teamwork"],
};

export const roleColor: Record<RoleId, TrackId> = { fullstack: "fullstack", ai: "ai", ml: "ai", dl: "ai" };

export type Resource = { id: string; name: string; url: string; track: TrackId };

// Free resources, linked only. Descriptions come from the dictionary under practice.resources.
export const resources: readonly Resource[] = [
  { id: "cs50", name: "Harvard CS50", url: "https://cs50.harvard.edu/x/", track: "foundations" },
  { id: "refactoring-guru", name: "Refactoring.Guru", url: "https://refactoring.guru/design-patterns", track: "foundations" },
  { id: "roadmap-sh", name: "roadmap.sh", url: "https://roadmap.sh", track: "foundations" },
  { id: "mdn", name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn", track: "fullstack" },
  { id: "react-dev", name: "react.dev", url: "https://react.dev/learn", track: "fullstack" },
  { id: "full-stack-open", name: "Full Stack Open", url: "https://fullstackopen.com/en/", track: "fullstack" },
  { id: "system-design-primer", name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", track: "fullstack" },
  { id: "owasp", name: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", track: "fullstack" },
  { id: "google-ml", name: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course", track: "ai" },
  { id: "kaggle-learn", name: "Kaggle Learn", url: "https://www.kaggle.com/learn", track: "ai" },
  { id: "3b1b", name: "3Blue1Brown: Neural networks", url: "https://www.3blue1brown.com/topics/neural-networks", track: "ai" },
  { id: "d2l", name: "Dive into Deep Learning", url: "https://d2l.ai", track: "ai" },
  { id: "karpathy", name: "Karpathy: Neural Networks Zero to Hero", url: "https://karpathy.ai/zero-to-hero.html", track: "ai" },
  { id: "hugging-face", name: "Hugging Face Learn", url: "https://huggingface.co/learn", track: "ai" },
  { id: "made-with-ml", name: "Made With ML", url: "https://madewithml.com", track: "ai" },
];
