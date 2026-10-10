import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { buttonClasses } from "@/components/ui/Button";
import { TechIcon } from "@/components/ui/TechIcon";

export function ProjectIconLinks({ project }: { project: Project }) {
  return (
    <>
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit the live ${project.name} (opens in a new tab)`}
          title="Live site"
          className={buttonClasses({ variant: "icon" })}
        >
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/btn:-translate-y-px group-hover/btn:translate-x-px" aria-hidden="true" />
        </a>
      ) : null}
      {project.repositoryUrl ? (
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} source code on GitHub (opens in a new tab)`}
          title="Source on GitHub"
          className={buttonClasses({ variant: "icon" })}
        >
          <TechIcon name="GitHub" className="size-4" />
        </a>
      ) : null}
    </>
  );
}

export function ProjectTextLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.repositoryUrl) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses({ variant: "primary", size: "sm" })}
        >
          Visit live site
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
      {project.repositoryUrl ? (
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses({ variant: "secondary", size: "sm" })}
        >
          <TechIcon name="GitHub" className="size-4" />
          Source on GitHub
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
    </div>
  );
}
