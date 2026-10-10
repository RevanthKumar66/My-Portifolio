import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { SocialCard, socialImageSize } from "@/lib/social-card";
import { getProject, getProjects, projectLabel } from "@/lib/projects";

export const alt = "Project case study by Revanth Kumar";
export const size = socialImageSize;
export const contentType = "image/png";
export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return new ImageResponse(
    (
      <SocialCard
        eyebrow={`${projectLabel} · ${project.category}`}
        title={project.name}
        subtitle={project.shortDescription}
      />
    ),
    { ...size },
  );
}
