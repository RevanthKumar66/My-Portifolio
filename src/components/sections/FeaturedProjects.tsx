import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLink } from "@/components/ui/SectionLink";
import { ProjectGrid } from "@/features/projects/ProjectGrid";
import { getProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const projects = getProjects();

  return (
    <Section id="work" labelledBy="work-heading" tone="showcase">
      <Container>
        <SectionHeading
          id="work-heading"
          eyebrow="Projects"
          title="Selected"
          accent="work."
          action={<SectionLink href="/projects">View all</SectionLink>}
        />
        <div className="mt-6 md:mt-8">
          <ProjectGrid projects={projects} />
        </div>
      </Container>
    </Section>
  );
}
