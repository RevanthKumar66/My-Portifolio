import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TechnologyList } from "@/components/ui/TechnologyPill";
import { BulletList } from "@/features/projects/ProjectDetails";
import { ProjectTextLinks } from "@/features/projects/ProjectLinks";
import { ProjectMedia } from "@/features/projects/ProjectMedia";
import { getAdjacentProjects, projectKindLabels } from "@/lib/projects";
import { breadcrumbJsonLd } from "@/lib/structured-data";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-6 first:border-t-0 first:pt-0 md:py-7">
      <h2 className="text-lg font-semibold tracking-[-0.02em]">{title}</h2>
      <div className="mt-3 max-w-[68ch] text-[15px] leading-relaxed text-text-secondary">
        {children}
      </div>
    </section>
  );
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(project)) }}
      />
      <header className="bg-hero pb-10 pt-8 md:pb-14 md:pt-12">
        <Container>
          <nav aria-label="Breadcrumb" className="enter">
            <ol className="flex items-center gap-2 text-[13px] text-text-muted">
              <li>
                <Link href="/projects" className="inline-flex min-h-9 items-center hover:text-text-primary">
                  Projects
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="truncate text-text-secondary">
                {project.name}
              </li>
            </ol>
          </nav>

          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12">
            <div>
              <div className="enter flex flex-wrap items-center gap-2">
                <Badge tone="accent">{projectKindLabels[project.kind]}</Badge>
                <span className="text-[12px] text-text-muted">{project.category}</span>
              </div>
              <h1 className="rise mt-3 text-balance text-[clamp(1.625rem,1.25rem+1.8vw,3rem)] font-semibold leading-[1.06] tracking-[-0.04em]">
                {project.name}
              </h1>
              <p
                className="enter mt-4 max-w-[60ch] text-pretty text-[15px] leading-relaxed text-text-secondary md:text-base"
                style={{ "--enter-delay": "100ms" } as React.CSSProperties}
              >
                {project.description}
              </p>
              <dl
                className="enter mt-6 grid gap-4 border-t border-border pt-5 text-[13px] sm:grid-cols-3"
                style={{ "--enter-delay": "160ms" } as React.CSSProperties}
              >
                <div>
                  <dt className="text-text-muted">Role</dt>
                  <dd className="mt-1 font-medium text-text-primary">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-text-muted">Context</dt>
                  <dd className="mt-1 font-medium text-text-primary">{project.organization}</dd>
                </div>
                {project.period ? (
                  <div>
                    <dt className="text-text-muted">Period</dt>
                    <dd className="mt-1 font-medium text-text-primary">{project.period}</dd>
                  </div>
                ) : null}
              </dl>
              <div className="enter mt-6" style={{ "--enter-delay": "220ms" } as React.CSSProperties}>
                <ProjectTextLinks project={project} />
              </div>
            </div>
            <div className="enter" style={{ "--enter-delay": "140ms" } as React.CSSProperties}>
              <ProjectMedia
                project={project}
                priority
                sizes="(min-width: 1024px) 600px, 100vw"
                className="shadow-[var(--shadow-raised)]"
              />
              {project.visual.type === "screenshot" ? (
                <p className="mt-2.5 text-[12.5px] text-text-muted">{project.visual.caption}</p>
              ) : null}
            </div>
          </div>
        </Container>
      </header>

      <Container className="grid grid-cols-1 gap-10 py-10 md:py-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
        <div>
          <Block title="Problem and users">
            <p>{project.problem}</p>
            <p className="mt-3">{project.users}</p>
          </Block>

          <Block title="My role">
            <BulletList items={project.contribution} />
          </Block>

          <Block title="Implementation">
            <p>{project.architecture}</p>
          </Block>

          <Block title="Technical decisions">
            <BulletList items={project.decisions} />
          </Block>

          {project.note ? (
            <p className="border-t border-border pt-6 text-[13px] leading-relaxed text-text-muted">{project.note}</p>
          ) : null}
        </div>

        <aside className="lg:sticky lg:top-20 lg:self-start">
          <Reveal className="space-y-6 rounded-[var(--radius-card)] border border-border bg-surface p-5 shadow-[var(--shadow-card)]">
            {project.technologies.length > 0 ? (
              <div>
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">Technology</h2>
                <TechnologyList items={project.technologies} size="sm" className="mt-2.5" />
              </div>
            ) : null}
            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">Key features</h2>
              <ul className="mt-2.5 space-y-1.5 text-[13.5px] text-text-secondary">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5">
                    <span className="mt-[0.55em] size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </aside>
      </Container>

      <Container className="pb-12 md:pb-16">
        <nav className="grid gap-3 sm:grid-cols-2" aria-label="Other projects">
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group rounded-card border border-border bg-surface p-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-border-strong"
            >
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-text-muted">
                <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
                Previous
              </span>
              <span className="mt-2 block font-medium group-hover:text-primary">{previous.name}</span>
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group rounded-card border border-border bg-surface p-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-border-strong sm:text-right"
            >
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-text-muted">
                Next
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
              <span className="mt-2 block font-medium group-hover:text-primary">{next.name}</span>
            </Link>
          ) : null}
        </nav>
      </Container>
    </article>
  );
}
