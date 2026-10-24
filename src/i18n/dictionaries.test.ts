import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";
import { research } from "@/data/research";
import { locales } from "./config";
import { en } from "./dictionaries/en";
import { si } from "./dictionaries/si";
import { ta } from "./dictionaries/ta";

const all = { en, si, ta };

// Every leaf path with its value, e.g. ["hero.stats.0", "Full-stack platforms"].
function leaves(value: unknown, path = ""): [string, unknown][] {
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) => leaves(v, path ? `${path}.${k}` : k));
  }
  return [[path, value]];
}

// Values that are tool names on purpose and stay in English in every language.
const SAME_IN_EVERY_LANGUAGE = new Set(["about.facts.2.value"]);

const SINHALA = /[\u0D80-\u0DFF]/;
const TAMIL = /[\u0B80-\u0BFF]/;

describe("dictionaries", () => {
  it("has one dictionary per locale", () => {
    expect(Object.keys(all).sort()).toEqual([...locales].sort());
  });

  it.each([
    ["si", si],
    ["ta", ta],
  ] as const)("%s has exactly the same strings and list lengths as English", (_, dict) => {
    expect(leaves(dict).map(([p]) => p)).toEqual(leaves(en).map(([p]) => p));
  });

  it.each(Object.entries(all))("%s has no empty strings (except optional translated titles)", (lang, dict) => {
    const empty = leaves(dict).filter(([p, v]) => v === "" && !(lang === "en" && p.endsWith("translatedTitle")));
    expect(empty).toEqual([]);
  });

  // Catches English text pasted into the other languages by mistake.
  it("writes the Sinhala page in Sinhala script", () => {
    const sentences = leaves(si).filter(
      ([p, v]) => typeof v === "string" && v.length > 25 && !SAME_IN_EVERY_LANGUAGE.has(p),
    );
    expect(sentences.filter(([, v]) => !SINHALA.test(v as string))).toEqual([]);
  });

  it("writes the Tamil page in Tamil script", () => {
    const sentences = leaves(ta).filter(
      ([p, v]) => typeof v === "string" && v.length > 25 && !SAME_IN_EVERY_LANGUAGE.has(p),
    );
    expect(sentences.filter(([, v]) => !TAMIL.test(v as string))).toEqual([]);
  });

  it("labels every project stat and research technology", () => {
    for (const dict of Object.values(all)) {
      for (const p of projects) expect(dict.projects.items[p.slug].stats).toHaveLength(p.stats.length);
      for (const r of research) {
        expect(dict.research.items[r.slug].technologies).toHaveLength(r.technologies.length);
      }
    }
  });
});
