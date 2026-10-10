import { coreSkillGroups } from "@/data/skills";
import type { SkillGroup } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLink } from "@/components/ui/SectionLink";
import { TechnologyList } from "@/components/ui/TechnologyPill";
import { cn } from "@/lib/utils";

export function SkillGroupGrid({ groups, headingLevel = 3 }: { groups: SkillGroup[]; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-3 sm:grid-cols-2",
        groups.length % 4 === 0 ? "lg:grid-cols-4" : groups.length % 3 === 0 && "lg:grid-cols-3",
      )}
    >
      {groups.map((group, index) => (
        <li key={group.title}>
          <Reveal
            delay={(index % 4) * 50}
            className="h-full rounded-[var(--radius-card)] border border-border bg-surface p-4 shadow-[var(--shadow-card)] transition-colors duration-200 hover:border-border-strong"
          >
            <Heading className="text-[15px] font-semibold tracking-[-0.015em]">{group.title}</Heading>
            <p className="mt-0.5 text-[13px] text-text-muted">{group.description}</p>
            <TechnologyList items={group.skills} className="mt-3" />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function SkillsOverview() {
  return (
    <Section id="skills" labelledBy="skills-heading" tone="alt">
      <Container>
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="Tech"
          accent="stack."
          action={<SectionLink href="/about#skills">Full skill list</SectionLink>}
        />
        <div className="mt-6 md:mt-8">
          <SkillGroupGrid groups={coreSkillGroups} />
        </div>
      </Container>
    </Section>
  );
}
