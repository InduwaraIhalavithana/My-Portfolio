import type { Dictionary } from "@/i18n/dictionaries/en";

export type SkillGroup = {
  key: keyof Dictionary["skills"]["groups"];
  color: "primary" | "agri" | "share" | "conf" | "spark";
  items: string[];
};

// Drawn from the stacks of the featured projects. Tool names are the same in every language.
export const skillGroups: SkillGroup[] = [
  {
    key: "frontend",
    color: "conf",
    items: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "React Router", "Leaflet", "PWA"],
  },
  {
    key: "backend",
    color: "agri",
    items: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "REST APIs", "JWT auth", "Server-Sent Events", "SMTP email"],
  },
  {
    key: "data",
    color: "spark",
    items: ["PostgreSQL", "XGBoost", "scikit-learn", "pandas", "Explainable AI"],
  },
  {
    key: "devops",
    color: "share",
    items: ["Docker", "Docker Compose", "GitHub Actions", "nginx", "Azure VMs", "Let's Encrypt"],
  },
  {
    key: "quality",
    color: "primary",
    items: ["pytest", "Vitest", "Testing Library", "ESLint", "Ruff", "i18n (EN / SI / TA)"],
  },
];
