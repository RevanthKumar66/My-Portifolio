import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroAvatar, HeroPortrait } from "@/components/sections/HeroPortrait";

export function Hero() {
  return (
    <section className="bg-hero overflow-hidden" aria-labelledby="hero-heading">
      <Container className="grid grid-cols-1 items-center gap-10 pb-10 pt-8 md:grid-cols-[minmax(0,1fr)_clamp(220px,27vw,300px)] md:gap-12 md:pb-14 md:pt-12 lg:gap-16 lg:pb-16 lg:pt-14">
        <div>
          <div className="enter flex items-center gap-3">
            <span className="md:hidden">
              <HeroAvatar />
            </span>
            <div className="min-w-0">
              <p className="text-[15px] font-semibold tracking-[-0.01em] text-text-primary">{profile.name}</p>
              <p className="mt-0.5 inline-flex items-center gap-1.5 text-[13px] text-text-secondary">
                <MapPin className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                {profile.eyebrow}
              </p>
            </div>
          </div>

          <h1
            id="hero-heading"
            className="rise mt-5 max-w-[15ch] text-balance text-[clamp(2rem,1.5rem+2.4vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-text-primary md:mt-6"
          >
            {profile.headline} <span className="accent-phrase whitespace-nowrap">{profile.headlineAccent}</span>
          </h1>

          <p
            className="enter mt-4 max-w-[50ch] text-pretty text-[15px] leading-relaxed text-text-secondary"
            style={{ "--enter-delay": "80ms" } as React.CSSProperties}
          >
            {profile.summary}
          </p>

          <p
            className="enter mt-3 flex gap-2 text-[13px] leading-snug text-text-secondary"
            style={{ "--enter-delay": "120ms" } as React.CSSProperties}
          >
            <span className="mt-[0.4em] size-1.5 shrink-0 rounded-full bg-success ring-[3px] ring-success/15" aria-hidden="true" />
            <span>
              <span className="sr-only">Currently: </span>
              {profile.currentRole}
            </span>
          </p>

          <div
            className="enter mt-6 flex flex-wrap items-center gap-2"
            style={{ "--enter-delay": "160ms" } as React.CSSProperties}
          >
            <Button href="/projects">
              View Projects
              <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" aria-hidden="true" />
            </Button>
            <Button href={profile.resumePath} download={profile.resumeFilename} variant="secondary">
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
        </div>

        <div className="hidden md:block">
          <HeroPortrait />
        </div>
      </Container>
    </section>
  );
}
