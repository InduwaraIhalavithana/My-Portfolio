import { fireEvent, render, screen } from "@testing-library/react";
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

  it("shows the demo button only when a demo link is set", () => {
    const { unmount } = render(<ProjectCard project={{ ...project, demo: undefined }} labels={en.projects} />);
    expect(screen.queryByRole("link", { name: /watch demo/i })).not.toBeInTheDocument();
    unmount();
    const demo = "https://www.linkedin.com/posts/example";
    render(<ProjectCard project={{ ...project, demo }} labels={en.projects} />);
    expect(screen.getByRole("link", { name: /watch demo/i })).toHaveAttribute("href", demo);
  });

  it("starts the slideshow on the cover and moves to the first screenshot", () => {
    render(<ProjectCard project={project} labels={en.projects} />);
    expect(screen.getByAltText(`${project.name} ${en.projects.cover}`)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: en.projects.nextSlide }));
    expect(screen.getByAltText(`${project.name}: ${text.slides[0]}`)).toBeInTheDocument();
    expect(screen.getByText(text.slides[0])).toBeInTheDocument();
  });

  it("renders in Sinhala", () => {
    render(<ProjectCard project={project} labels={si.projects} />);
    expect(screen.getByText(si.projects.items[project.slug].summary)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: si.projects.sourceCode })).toBeInTheDocument();
  });
});
