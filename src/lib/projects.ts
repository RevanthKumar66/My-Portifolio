import { projects } from "@/data/projects";
import type { Project, ProjectKind } from "@/types/portfolio";

export const projectKindLabels: Record<ProjectKind, string> = {
  employment: "Work at Deepvibe",
  company: "Company website",
  personal: "Personal project",
};

export function getProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectGroups() {
  return [
    {
      id: "professional",
      title: "Professional work",
      description: "What I contributed at work.",
      projects: projects.filter((project) => project.kind !== "personal"),
    },
    {
      id: "personal",
      title: "Personal projects",
      description: "Built on my own, live or open source.",
      projects: projects.filter((project) => project.kind === "personal"),
    },
  ];
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };

  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
