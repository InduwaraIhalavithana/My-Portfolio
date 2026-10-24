import type { Dictionary } from "@/i18n/dictionaries/en";

export type Accent = "agri" | "share" | "conf";
export type ProjectSlug = keyof Dictionary["projects"]["items"];

export type Project = {
  slug: ProjectSlug;
  name: string;
  accent: Accent;
  cover: string;
  stack: string[];
  // Values only; their labels come from the dictionary, in the same order.
  stats: string[];
  repo: string;
  live?: string;
};

// Facts here come from each project's README; keep them in sync when a project changes.
export const projects: Project[] = [
  {
    slug: "smartagri",
    name: "SmartAgri",
    accent: "agri",
    cover: "/projects/smartagri-cover.png",
    stack: ["React", "FastAPI", "PostgreSQL", "XGBoost", "Docker", "GitHub Actions", "Azure"],
    stats: ["4", "3", "25"],
    repo: "https://github.com/Ravindu08/SmartAgri",
  },
  {
    slug: "sharing-excess",
    name: "Sharing Excess",
    accent: "share",
    cover: "/projects/sharing-excess-cover.png",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
    stats: ["187", "56", "3"],
    repo: "https://github.com/InduwaraIhalavithana/Sharing-Excess",
  },
  {
    slug: "conferencehub",
    name: "ConferenceHub",
    accent: "conf",
    cover: "/projects/conferencehub-cover.png",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Leaflet", "Docker", "GitHub Actions"],
    stats: ["3", "85", "3"],
    repo: "https://github.com/InduwaraIhalavithana/Conference-Manager",
  },
];
