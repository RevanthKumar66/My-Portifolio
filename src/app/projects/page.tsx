import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGrid } from "@/features/projects/ProjectGrid";
import { pageMetadata } from "@/lib/metadata";
import { getProjectGroups } from "@/lib/projects";

export const metadata = pageMetadata({
  title: "Projects by Revanth Kumar | Full-Stack Developer",
  description:
    "Software projects by Revanth Kumar: AI web apps, Next.js websites, a driver-booking platform, and machine learning work, each with a case study and live or source links.",
  path: "/projects",
  absoluteTitle: true,
});

export default function ProjectsPage() {
  const groups = getProjectGroups();

  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="My"
        accent="projects."
        description="Professional and personal work, each with a case study."
      />
      {groups.map((group, index) => (
        <Section
          key={group.id}
          id={group.id}
          labelledBy={`${group.id}-heading`}
          tone={index === 0 ? "showcase" : "default"}
        >
          <Container>
            <SectionHeading id={`${group.id}-heading`} title={group.title} description={group.description} />
            <div className="mt-6 md:mt-8">
              <ProjectGrid projects={group.projects} />
            </div>
          </Container>
        </Section>
      ))}
    </>
  );
}
