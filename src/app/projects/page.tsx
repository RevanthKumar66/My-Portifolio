import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectGrid } from "@/features/projects/ProjectGrid";
import { pageMetadata } from "@/lib/metadata";
import { getProjects } from "@/lib/projects";

export const metadata = pageMetadata({
  title: "Projects by Revanth Kumar | Full-Stack Developer",
  description:
    "Personal projects by Revanth Kumar: Next.js websites and AI web apps, including CRO Engine and Mentor OS AI, each with a case study and a live site.",
  path: "/projects",
  absoluteTitle: true,
});

export default function ProjectsPage() {
  return (
    <>
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
