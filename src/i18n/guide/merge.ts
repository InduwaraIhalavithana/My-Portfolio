import type { SectionText, Toolbox, TopicText, TrackExtras, TrackText } from "./types";

/** Combines a track's base text with its slide extras (use-when, scenarios, diagram labels, recap, quiz). */
export function mergeTracks(...tracks: [TrackText, TrackExtras][]): TrackText {
  const sections: Record<string, SectionText> = {};
  const topics: Record<string, TopicText> = {};
  for (const [base, extra] of tracks) {
    for (const [id, s] of Object.entries(base.sections)) sections[id] = { ...s, ...extra.sections[id] };
    for (const [id, t] of Object.entries(base.topics)) topics[id] = { ...t, ...extra.topics[id] };
  }
  return { sections, topics };
}

/** Adds each deck's Toolbox slide text to its section text. */
export function withToolbox(sections: Record<string, SectionText>, toolbox: Record<string, Toolbox>) {
  return Object.fromEntries(Object.entries(sections).map(([id, s]) => [id, { ...s, toolbox: toolbox[id] }]));
}
