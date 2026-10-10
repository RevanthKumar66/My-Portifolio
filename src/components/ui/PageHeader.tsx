import { Container } from "@/components/ui/Container";
import { Eyebrow, TwoToneTitle } from "@/components/ui/SectionHeading";

export function PageHeader({
  eyebrow,
  title,
  accent,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="bg-hero pb-8 pt-10 md:pb-12 md:pt-14">
      <Container>
        <div className="enter">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1 className="rise mt-2.5 max-w-[20ch] text-balance text-[clamp(1.75rem,1.4rem+1.6vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
          <TwoToneTitle title={title} accent={accent} />
        </h1>
        <p
          className="enter mt-3 max-w-[60ch] text-pretty text-[15px] leading-relaxed text-text-secondary"
          style={{ "--enter-delay": "80ms" } as React.CSSProperties}
        >
          {description}
        </p>
        {children ? (
          <div className="enter mt-5" style={{ "--enter-delay": "140ms" } as React.CSSProperties}>
            {children}
          </div>
        ) : null}
      </Container>
    </header>
  );
}
