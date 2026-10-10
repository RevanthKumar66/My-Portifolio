import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow, TwoToneTitle } from "@/components/ui/SectionHeading";

export default function NotFound() {
  return (
    <section className="bg-hero py-20 md:py-28">
      <Container>
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-3 text-[clamp(2rem,1.55rem+1.9vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.04em]">
          <TwoToneTitle title="Page" accent="not found." />
        </h1>
        <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-text-secondary md:text-base">
          This address is outdated or the page was removed.
        </p>
        <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
          <Button href="/">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Button>
          <Button href="/projects" variant="secondary">
            View projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
