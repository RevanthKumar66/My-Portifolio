import Image from "next/image";
import { experiences } from "@/data/experience";
import type { Experience } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CompanyMark({ experience }: { experience: Experience }) {
  if (experience.logo) {
    return (
      <span className="relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[12px] border border-border bg-white p-1">
        <Image
          src={experience.logo.src}
          alt={experience.logo.alt}
          width={experience.logo.width}
          height={experience.logo.height}
          className="h-auto max-h-full w-auto max-w-full object-contain"
          sizes="40px"
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-[12px] border border-primary/20 bg-primary-subtle text-[13px] font-semibold tracking-[-0.02em] text-primary"
    >
      {experience.monogram}
    </span>
  );
}

export function ExperienceList({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <ol className="divide-y divide-border border-y border-border">
      {experiences.map((experience, index) => (
        <li key={experience.id}>
          <Reveal
            delay={index * 60}
            className="grid grid-cols-1 gap-3 py-6 md:grid-cols-[288px_minmax(0,1fr)] md:gap-10 md:py-7"
          >
            <div className="flex gap-3">
              <CompanyMark experience={experience} />
              <div className="min-w-0">
                <Heading className="text-base font-semibold leading-snug tracking-[-0.015em]">{experience.title}</Heading>
                <p className="mt-0.5 text-[13.5px] text-text-secondary">{experience.organization}</p>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-text-muted">
                  <span>
                    <time>{experience.start}</time> – <time>{experience.end}</time>
                  </span>
                  {experience.current ? (
                    <span className="inline-flex h-5 items-center gap-1 rounded-full bg-success-subtle px-2 text-[11px] font-medium text-success">
                      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
                      Current
                    </span>
                  ) : null}
                </p>
              </div>
            </div>

            <div className="md:pt-0.5">
              <p className="max-w-[68ch] text-pretty text-[14.5px] leading-relaxed text-text-primary">{experience.summary}</p>
              <ul className="mt-2.5 grid gap-1.5">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex max-w-[68ch] gap-2.5 text-[14px] leading-relaxed text-text-secondary">
                    <span className="mt-[0.65em] size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function ExperienceTimeline() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <Container>
        <SectionHeading id="experience-heading" eyebrow="Experience" title="Work" accent="history." />
        <div className="mt-6 md:mt-8">
          <ExperienceList />
        </div>
      </Container>
    </Section>
  );
}
