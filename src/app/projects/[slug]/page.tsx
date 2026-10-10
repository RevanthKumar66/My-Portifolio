import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/features/projects/ProjectCaseStudy";
import { pageMetadata } from "@/lib/metadata";
import { getProject, getProjects } from "@/lib/projects";
import type { Project } from "@/types/portfolio";

function projectContext(project: Project) {
  if (project.kind === "personal") return "A personal project by Revanth Kumar";
  if (project.kind === "employment") return "Case study by Revanth Kumar";
  return `Built by Revanth Kumar for ${project.organization}`;
}

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return pageMetadata({
    title: `${project.name} Case Study`,
    description: `${project.shortDescription} ${projectContext(project)}, with role, features, and implementation details.`,
    path: `/projects/${project.slug}`,
    hasOwnSocialImage: true,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
