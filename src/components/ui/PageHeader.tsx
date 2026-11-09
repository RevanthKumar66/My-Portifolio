import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow, TwoToneTitle } from "@/components/ui/SectionHeading";
import type { ImageAsset } from "@/types/portfolio";

export function PageHeader({
  eyebrow,
  title,
  accent,
  description,
  portrait,
  avatar,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  portrait?: ImageAsset;
  avatar?: ImageAsset;
  children?: React.ReactNode;
}) {
  return (
    <header className="bg-hero pb-5 pt-8 md:pb-12 md:pt-14">
      <Container>
        {portrait ? (
          <>
            {/* Mobile: title + copy beside a larger portrait so heights align */}
            <div className="md:hidden">
              <div className="enter">
                <Eyebrow>{eyebrow}</Eyebrow>
              </div>
              <div className="mt-2.5 grid grid-cols-[minmax(0,1fr)_7rem] items-start gap-3.5 sm:grid-cols-[minmax(0,1fr)_8rem] sm:gap-4">
                <div className="min-w-0">
                  <h1 className="rise text-balance text-[clamp(1.7rem,1.45rem+1.2vw,2.1rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
                    <TwoToneTitle title={title} accent={accent} />
                  </h1>
                  <p
                    className="enter mt-2 text-pretty text-[13.5px] leading-relaxed text-text-secondary"
                    style={{ "--enter-delay": "80ms" } as React.CSSProperties}
                  >
                    {description}
                  </p>
                </div>
                <figure
                  className="enter relative w-full rounded-[14px] border border-border bg-surface p-1 shadow-[var(--shadow-card)]"
                  style={{ "--enter-delay": "100ms" } as React.CSSProperties}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[10px] bg-surface-subtle">
                    <Image
                      src={portrait.src}
                      alt={portrait.alt}
                      fill
                      priority
                      sizes="(min-width: 640px) 128px, 112px"
                      className="object-cover object-[50%_16%]"
                    />
                  </div>
                </figure>
              </div>
              {children ? (
                <div className="enter mt-4" style={{ "--enter-delay": "140ms" } as React.CSSProperties}>
                  {children}
                </div>
              ) : null}
            </div>

            {/* Desktop: text column + large portrait */}
            <div className="hidden items-center gap-12 md:grid md:grid-cols-[minmax(0,1fr)_clamp(200px,24vw,260px)] lg:gap-16">
              <div>
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
              </div>
              <figure
                className="enter relative mx-auto w-full rounded-[20px] border border-border bg-surface p-1.5 shadow-[var(--shadow-raised)]"
                style={{ "--enter-delay": "100ms" } as React.CSSProperties}
              >
                <div className="group/portrait relative aspect-[4/5] overflow-hidden rounded-[15px] bg-surface-subtle">
                  <Image
                    src={portrait.src}
                    alt={portrait.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 260px, 24vw"
                    className="object-cover object-[50%_30%] transition-transform duration-500 ease-out group-hover/portrait:scale-[1.015]"
                  />
                </div>
              </figure>
            </div>
          </>
        ) : (
          <div>
            <div className="enter">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <div className="mt-2.5 flex items-center justify-between gap-4">
              <h1 className="rise max-w-[20ch] text-balance text-[clamp(1.75rem,1.4rem+1.6vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.035em]">
                <TwoToneTitle title={title} accent={accent} />
              </h1>
              {avatar ? (
                <span className="enter relative inline-flex size-16 shrink-0 overflow-hidden rounded-full border border-border bg-surface-subtle shadow-[var(--shadow-card)] md:hidden">
                  <Image src={avatar.src} alt={avatar.alt} fill sizes="64px" className="object-cover" />
                </span>
              ) : null}
            </div>
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
          </div>
        )}
      </Container>
    </header>
  );
}
