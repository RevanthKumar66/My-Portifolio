import { ImageResponse } from "next/og";
import { SocialCard, socialImageSize } from "@/lib/social-card";
import { getProject, getProjects, projectKindLabels } from "@/lib/projects";

export const alt = "Project case study by Revanth Kumar";
export const size = socialImageSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  return new ImageResponse(
    (
      <SocialCard
        eyebrow={project ? `${projectKindLabels[project.kind]} · ${project.category}` : "Project"}
        title={project?.name ?? "Project"}
        subtitle={project?.shortDescription ?? "Case study"}
      />
    ),
    { ...size },
  );
}
