import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { achievement, profile } from "@/data/profile";
import { certifications } from "@/data/certifications";
import { skillGroups } from "@/data/skills";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { EducationTimeline } from "@/components/sections/EducationTimeline";
import { ExperienceList } from "@/components/sections/ExperienceTimeline";
import { SkillGroupGrid } from "@/components/sections/SkillsOverview";
import { pageMetadata } from "@/lib/metadata";
import { aboutJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "About Revanth Kumar | Software Engineer in Hyderabad",
  description:
    "About Revanth Kumar, a software engineer and full-stack developer in Hyderabad: experience at Fishin’ India Private Limited and Deepvibe IT Solutions, education, skills, and certifications.",
  path: "/about",
  absoluteTitle: true,
});

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
      <PageHeader
        eyebrow={profile.eyebrow}
        title="About"
        accent="me."
        description={profile.intro}
        portrait={profile.aboutPortrait}
        avatar={profile.aboutAvatar}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Button href={profile.resumePath} download={profile.resumeFilename}>
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </Button>
          <Link
            href="/contact"
            className="inline-flex min-h-10 items-center px-2 text-sm font-medium text-text-primary underline decoration-border-strong underline-offset-[5px] transition-colors duration-150 hover:text-primary hover:decoration-primary"
          >
            Contact Me
          </Link>
        </div>
      </PageHeader>

      <Section id="experience" labelledBy="experience-about-heading" className="pt-2 md:pt-4 lg:pt-6">
        <Container>
          <SectionHeading id="experience-about-heading" title="Experience" />
          <div className="mt-6 md:mt-8">
            <ExperienceList />
          </div>
        </Container>
      </Section>

      <Section id="education" labelledBy="education-heading" tone="alt">
        <Container>
          <SectionHeading id="education-heading" title="Education" />
          <div className="mt-5 md:mt-6">
            <EducationTimeline />
          </div>
        </Container>
      </Section>

      <Section id="skills" labelledBy="skills-heading">
        <Container>
          <SectionHeading id="skills-heading" title="Skills" />
          <div className="mt-6 md:mt-8">
            <SkillGroupGrid groups={skillGroups} />
          </div>
        </Container>
      </Section>

      <Section id="certifications" labelledBy="certifications-heading" tone="alt">
        <Container>
          <SectionHeading id="certifications-heading" title="Certifications" />
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-6 lg:grid-cols-4">
            {certifications.map((certification, index) => (
              <li key={certification.name}>
                <Reveal
                  delay={index * 60}
                  className="flex h-full flex-col rounded-[var(--radius-card)] border border-border bg-surface p-1.5 shadow-[var(--shadow-card)] transition-colors duration-200 hover:border-border-strong"
                >
                  <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[10px] border border-border bg-surface-subtle">
                    {certification.image ? (
                      <Image
                        src={certification.image.src}
                        alt={certification.image.alt}
                        fill
                        className="object-contain"
                        sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 100vw"
                      />
                    ) : certification.technology ? (
                      <span className="flex items-center gap-4 text-text-primary" aria-hidden="true">
                        <TechIcon name={certification.technology} className="size-8" />
                        <TechIcon name={certification.issuer} className="size-8" />
                      </span>
                    ) : null}
                  </div>
                  <div className="px-2.5 pb-2.5 pt-3">
                    <h3 className="text-[15px] font-semibold tracking-[-0.015em]">{certification.name}</h3>
                    <p className="mt-0.5 text-[13px] text-text-secondary">{certification.issuer}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-3 flex items-center gap-3 rounded-[var(--radius-card)] border border-border bg-surface p-4 shadow-[var(--shadow-card)] sm:gap-4">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-surface-subtle">
              <TechIcon name="LeetCode" className="size-5" />
            </span>
            <div>
              <h3 className="text-[15px] font-semibold tracking-[-0.015em]">{achievement.title}</h3>
              <p className="mt-0.5 text-sm leading-relaxed text-text-secondary">{achievement.detail}</p>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
