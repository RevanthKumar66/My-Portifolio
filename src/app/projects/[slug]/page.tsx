import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/features/projects/ProjectCaseStudy";
import { pageMetadata } from "@/lib/metadata";
import { getProject, getProjects } from "@/lib/projects";

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
    title: project.name,
    description: project.shortDescription,
    path: `/projects/${project.slug}`,
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
