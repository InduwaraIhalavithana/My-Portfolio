import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { projects } from "./projects";
import { research } from "./research";
import { skillGroups } from "./skills";
import { site } from "./site";

const publicFile = (p: string) => join(process.cwd(), "public", p);

describe("projects data", () => {
  it("has unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it.each(projects)("$name has a cover image on disk", (p) => {
    expect(existsSync(publicFile(p.cover))).toBe(true);
  });

  it.each(projects)("$name links to GitHub over https", (p) => {
    expect(p.repo).toMatch(/^https:\/\/github\.com\//);
  });

  it.each(projects)("$name has exactly three stat tiles", (p) => {
    expect(p.stats).toHaveLength(3);
  });
});

describe("research data", () => {
  it.each(research)("$slug has its poster image and PDF on disk", (r) => {
    expect(existsSync(publicFile(r.poster.image))).toBe(true);
    expect(existsSync(publicFile(r.poster.pdf))).toBe(true);
  });

  it.each(research)("$slug lists the site owner as an author", (r) => {
    expect(r.authors).toContain("P.I. Ihalavithana");
  });
});

describe("site data", () => {
  it("has a portrait on disk", () => {
    expect(existsSync(publicFile(site.photo))).toBe(true);
  });

  it("has the linked CV on disk", () => {
    expect(existsSync(publicFile(site.links.cv))).toBe(true);
  });

  it("lists no skill twice within a group", () => {
    for (const g of skillGroups) {
      expect(new Set(g.items).size).toBe(g.items.length);
    }
  });
});
