import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, TwoToneTitle, sectionTitleClasses } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { WhatsAppButton } from "@/components/ui/WhatsAppLink";

export function ContactCTA() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-14 pb-10 md:pb-14 lg:pb-16">
      <Container>
        <Reveal className="bg-panel-glow grid grid-cols-1 gap-6 rounded-[var(--radius-panel)] border border-border px-5 py-7 shadow-[var(--shadow-card)] sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-10 md:px-10 md:py-9">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h2 id="contact-heading" className={`mt-2.5 ${sectionTitleClasses}`}>
              <TwoToneTitle title="Let’s" accent="talk." />
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              <a
                href={`mailto:${profile.email}`}
                className="break-all text-base font-semibold tracking-[-0.015em] text-text-primary underline decoration-border-strong underline-offset-[5px] transition-colors duration-150 hover:text-primary hover:decoration-primary sm:text-lg"
              >
                {profile.email}
              </a>
              <CopyEmailButton email={profile.email} variant="icon" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <WhatsAppButton />
            <Button href={profile.linkedin} external variant="secondary">
              <TechIcon name="LinkedIn" className="size-4" />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
