import Link from "next/link";
import type { Project } from "@/types/portfolio";
import { TechnologyList } from "@/components/ui/TechnologyPill";
import { ProjectDetails } from "@/features/projects/ProjectDetails";
import { ProjectDialog } from "@/features/projects/ProjectDialog";
import { ProjectIconLinks } from "@/features/projects/ProjectLinks";
import { ProjectMedia } from "@/features/projects/ProjectMedia";

export function ProjectCard({ project, headingLevel = 3 }: { project: Project; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className="@container/card h-full rounded-[var(--radius-card)] border border-border bg-surface shadow-[var(--shadow-card)] transition-[border-color,box-shadow] duration-200 ease-out hover:border-border-strong hover:shadow-[var(--shadow-raised)]">
      <div className="grid h-full grid-rows-[auto_1fr] @[29rem]/card:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] @[29rem]/card:grid-rows-1 @[29rem]/card:items-center">
        <div className="p-1.5">
          <ProjectMedia
            project={project}
            className="rounded-[10px]"
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div className="flex h-full flex-col px-4 pb-3.5 pt-2.5 @[29rem]/card:py-4 @[29rem]/card:pl-3 @[29rem]/card:pr-4">
          <Heading className="text-balance text-base font-semibold leading-snug tracking-[-0.015em]">
            <Link
              href={`/projects/${project.slug}`}
              className="rounded-sm transition-colors duration-150 hover:text-primary"
            >
              {project.name}
            </Link>
          </Heading>

          <p className="mt-1 line-clamp-2 text-pretty text-[13.5px] leading-relaxed text-text-secondary">
            {project.shortDescription}
          </p>

          <TechnologyList
            items={project.technologies.slice(0, 4)}
            size="sm"
            className="mt-3"
            label={`Technologies used in ${project.name}`}
          />

          <div className="mt-auto flex items-center gap-1.5 pt-3">
            <ProjectDialog title={project.name} eyebrow={project.category}>
              <ProjectDetails project={project} />
            </ProjectDialog>
            <span className="flex-1" />
            <ProjectIconLinks project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}
