import { describe, expect, it } from "vitest";
import { guideEn } from "@/i18n/guide/en";
import { guideSi } from "@/i18n/guide/si";
import { guideTa } from "@/i18n/guide/ta";
import type { GuideText } from "@/i18n/guide/types";
import { chartIds, guideSections, nextDeckOf, resources, roleIds, rolePaths, trackIds } from ".";

const texts: Record<string, GuideText> = { en: guideEn, si: guideSi, ta: guideTa };
const allTopics = guideSections.flatMap((s) => s.topics);

// Every leaf path with its value, e.g. ["topics.big-o.compare.0", "Constant: …"].
function leaves(value: unknown, path = ""): [string, unknown][] {
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) => leaves(v, path ? `${path}.${k}` : k));
  }
  return [[path, value]];
}

// Titles may stay English technical names; table cells and diagram labels often are code or numbers.
const mayStayEnglish = (path: string) =>
  /^(topics|sections)\.[^.]+\.title$/.test(path) ||
  /^topics\.[^.]+\.(labels|table)\./.test(path) ||
  /^sections\.[^.]+\.character\.name$/.test(path) ||
  /^sections\.[^.]+\.quiz\.\d+\.options\./.test(path);

describe("study guide data", () => {
  it("has unique section and topic ids", () => {
    const sections = guideSections.map((s) => s.id);
    const topics = allTopics.map((t) => t.id);
    expect(new Set(sections).size).toBe(sections.length);
    expect(new Set(topics).size).toBe(topics.length);
  });

  it("puts every deck in a known track, in track order", () => {
    const order = guideSections.map((s) => trackIds.indexOf(s.track));
    expect(order.every((t) => t >= 0)).toBe(true);
    expect([...order].sort((a, b) => a - b)).toEqual(order);
  });

  it("chains every deck to the next one, ending at the last", () => {
    guideSections.forEach((s, i) => expect(nextDeckOf(s.id)?.id).toBe(guideSections[i + 1]?.id));
  });

  it("gives every topic a picture and only known charts", () => {
    const pictures = ["flow", "cycle", "layers", "table", ...chartIds];
    for (const t of allTopics) {
      expect(t.emoji.trim(), t.id).not.toBe("");
      if (t.visual) expect(pictures, t.id).toContain(t.visual);
    }
  });

  it("builds role paths only from real decks", () => {
    const ids = new Set(guideSections.map((s) => s.id));
    for (const role of roleIds) for (const id of rolePaths[role]) expect(ids.has(id), `${role}: ${id}`).toBe(true);
  });

  it("links resources over https with unique ids", () => {
    expect(new Set(resources.map((r) => r.id)).size).toBe(resources.length);
    for (const r of resources) expect(r.url).toMatch(/^https:\/\//);
  });
});

describe.each(Object.entries(texts))("study guide text (%s)", (_, g) => {
  it("names every deck and topic, and nothing else", () => {
    expect(Object.keys(g.sections).sort()).toEqual(guideSections.map((s) => s.id).sort());
    expect(Object.keys(g.topics).sort()).toEqual(allTopics.map((t) => t.id).sort());
  });

  it.each(guideSections)("deck $id has a character, a recap and a knowledge check", (deck) => {
    const s = g.sections[deck.id];
    expect(s.character?.name).toBeTruthy();
    expect(s.character?.says).toBeTruthy();
    expect(s.recap?.length ?? 0).toBeGreaterThanOrEqual(3);
    expect(s.quiz).toHaveLength(deck.quiz.length);
    expect(deck.tools.length).toBeGreaterThanOrEqual(4);
    expect(s.toolbox?.rows).toHaveLength(deck.tools.length);
    expect(s.toolbox?.choose.length ?? 0).toBeGreaterThanOrEqual(2);
    s.quiz?.forEach((q, i) => {
      expect(q.options).toHaveLength(4);
      expect(deck.quiz[i]).toBeLessThan(q.options.length);
      expect(q.why).toBeTruthy();
    });
  });

  it.each(allTopics)("slide $id has its definition, analogy, scenario, use-when and picture text", (topic) => {
    const t = g.topics[topic.id];
    for (const field of [t.title, t.line, t.analogy, t.example ?? ""]) expect(field.trim()).not.toBe("");
    expect(t.use?.length ?? 0).toBeGreaterThanOrEqual(1);
    expect(t.compare?.length ?? 0).toBe(topic.compare?.length ?? 0);
    if (topic.visual === "flow" || topic.visual === "cycle" || topic.visual === "layers") {
      expect(t.labels?.length ?? 0).toBeGreaterThanOrEqual(2);
    }
    if (topic.visual === "tree" && t.labels) expect(t.labels).toHaveLength(7);
    if (topic.visual === "table") {
      expect(t.table?.head.length).toBeGreaterThan(0);
      for (const row of t.table?.rows ?? []) expect(row).toHaveLength(t.table!.head.length);
    }
  });

  it("describes every resource", () => {
    expect(Object.keys(g.practice.resources).sort()).toEqual(resources.map((r) => r.id).sort());
  });
});

describe.each([
  ["si", guideSi, /[඀-෿]/],
  ["ta", guideTa, /[஀-௿]/],
] as const)("study guide translation (%s)", (_, g, script) => {
  it("has exactly the same strings and list lengths as English", () => {
    expect(leaves(g).map(([p]) => p).sort()).toEqual(leaves(guideEn).map(([p]) => p).sort());
  });

  it("has no empty strings", () => {
    // Table corner cells may be blank on purpose, as in English.
    const blank = leaves(g).filter(([p, v]) => typeof v === "string" && v.trim() === "" && !p.includes(".table."));
    expect(blank).toEqual([]);
  });

  // Catches an English sentence left behind by mistake.
  it("writes every sentence in its own script", () => {
    const sentences = leaves(g).filter(([p, v]) => typeof v === "string" && v.length > 25 && !mayStayEnglish(p));
    expect(sentences.filter(([, v]) => !script.test(v as string))).toEqual([]);
  });

  it("keeps the {placeholders} the UI fills in", () => {
    for (const key of ["progressCount", "slides", "slideOf", "score"] as const) {
      const want = guideEn.ui[key].match(/\{\w+\}/g)?.sort();
      expect(g.ui[key].match(/\{\w+\}/g)?.sort()).toEqual(want);
    }
  });
});
