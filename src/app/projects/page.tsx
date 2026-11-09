import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectGrid } from "@/features/projects/ProjectGrid";
import { pageMetadata } from "@/lib/metadata";
import { getProjects } from "@/lib/projects";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Selected web and AI projects by Revanth Kumar, with live demos and case studies.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("Projects", "/projects")) }}
      />
      <PageHeader
        eyebrow="Work"
        title="Personal"
        accent="projects."
        description="Live sites I built and deployed, each with a case study."
      />
      <Section id="personal" labelledBy="personal-heading" tone="showcase">
        <Container>
          <h2 id="personal-heading" className="sr-only">
            Personal projects
          </h2>
          <ProjectGrid projects={getProjects()} />
        </Container>
      </Section>
    </>
  );
}
