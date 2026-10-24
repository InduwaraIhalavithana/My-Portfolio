import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { projects } from "@/data/projects";
import { en } from "@/i18n/dictionaries/en";
import { si } from "@/i18n/dictionaries/si";
import { ProjectCard } from "./project-card";

// next/image needs the Next.js runtime; a plain <img> is enough for these checks.
vi.mock("next/image", () => ({
  // eslint-disable-next-line @next/next/no-img-element
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

describe("ProjectCard", () => {
  const project = projects[0];
  const text = en.projects.items[project.slug];

  it("shows the name, highlights and stack", () => {
    render(<ProjectCard project={project} labels={en.projects} />);
    expect(screen.getByRole("heading", { name: project.name })).toBeInTheDocument();
    for (const h of text.highlights) expect(screen.getByText(h)).toBeInTheDocument();
    for (const t of project.stack) expect(screen.getByText(t)).toBeInTheDocument();
  });

  it("links to the source code in a new tab", () => {
    render(<ProjectCard project={project} labels={en.projects} />);
    const link = screen.getByRole("link", { name: /source code/i });
    expect(link).toHaveAttribute("href", project.repo);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("hides the live demo button when there is no live URL", () => {
    render(<ProjectCard project={{ ...project, live: undefined }} labels={en.projects} />);
    expect(screen.queryByRole("link", { name: /live demo/i })).not.toBeInTheDocument();
  });

  it("renders in Sinhala", () => {
    render(<ProjectCard project={project} labels={si.projects} />);
    expect(screen.getByText(si.projects.items[project.slug].summary)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: si.projects.sourceCode })).toBeInTheDocument();
  });
});
