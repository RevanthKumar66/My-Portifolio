import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { TechnologyList } from "@/components/ui/TechnologyPill";
import { ProjectMedia } from "@/features/projects/ProjectMedia";
import { ProjectTextLinks } from "@/features/projects/ProjectLinks";
import { projectKindLabels } from "@/lib/projects";

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-4">
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">{title}</h3>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-[14.5px] leading-relaxed text-text-secondary">
          <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="space-y-5">
      <ProjectMedia project={project} sizes="(min-width: 768px) 650px, 100vw" />

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="accent">{projectKindLabels[project.kind]}</Badge>
          {project.kind !== "personal" ? (
            <span className="text-[12px] text-text-muted">{project.organization}</span>
          ) : null}
          {project.period ? <span className="text-[12px] text-text-muted">· {project.period}</span> : null}
        </div>
        <p className="mt-3 text-pretty text-[14.5px] leading-relaxed text-text-secondary">{project.description}</p>
      </div>

      <DetailBlock title="My contribution">
        <p className="mb-2.5 text-[13px] text-text-muted">{project.role}</p>
        <BulletList items={project.contribution} />
      </DetailBlock>

      <DetailBlock title="Key features">
        <ul className="flex flex-wrap gap-1.5">
          {project.features.map((feature) => (
            <li key={feature} className="rounded-full bg-surface-subtle px-2.5 py-1 text-[12.5px] text-text-secondary">
              {feature}
            </li>
          ))}
        </ul>
      </DetailBlock>

      {project.technologies.length > 0 ? (
        <DetailBlock title="Technology">
          <TechnologyList items={project.technologies} size="sm" />
        </DetailBlock>
      ) : null}

      {project.note ? <p className="text-[12.5px] leading-relaxed text-text-muted">{project.note}</p> : null}

      <div className="flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
        <ProjectTextLinks project={project} />
        <Link
          href={`/projects/${project.slug}`}
          className="group inline-flex min-h-10 items-center gap-1.5 text-[13px] font-medium text-primary transition-colors hover:text-primary-hover"
        >
          Read the full case study
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
