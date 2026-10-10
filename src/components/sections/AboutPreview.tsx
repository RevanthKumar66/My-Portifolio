import { achievement } from "@/data/profile";
import { highestEducation } from "@/data/education";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Eyebrow, TwoToneTitle, sectionTitleClasses } from "@/components/ui/SectionHeading";
import { SectionLink } from "@/components/ui/SectionLink";

const facts = [
  {
    label: "Education",
    value: highestEducation.qualification,
    detail: `${highestEducation.institution}, ${highestEducation.start}–${highestEducation.end}`,
  },
  { label: "Practice", value: achievement.title, detail: achievement.detail },
];

export function AboutPreview() {
  return (
    <Section id="about" labelledBy="about-heading">
      <Container className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-12">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h2 id="about-heading" className={`mt-2.5 ${sectionTitleClasses}`}>
            <TwoToneTitle title="Full-stack" accent="engineer." />
          </h2>
          <div className="mt-2">
            <SectionLink href="/about">More about me</SectionLink>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <dl className="divide-y divide-border rounded-[var(--radius-card)] border border-border bg-surface px-4 shadow-[var(--shadow-card)] sm:px-5">
            {facts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-1 gap-0.5 py-3.5 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-4">
                <dt className="text-[13px] text-text-muted">{fact.label}</dt>
                <dd>
                  <span className="block text-sm font-medium text-text-primary">{fact.value}</span>
                  <span className="mt-0.5 block text-[13px] text-text-secondary">{fact.detail}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </Section>
  );
}
