import { Container } from "@/components/ui/Container";
import { PortraitLightbox } from "@/components/ui/PortraitLightbox";
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
              <div className="mt-2.5 grid grid-cols-[minmax(0,1fr)_8rem] items-start gap-3.5 sm:grid-cols-[minmax(0,1fr)_9rem] sm:gap-4">
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
                  <PortraitLightbox
                    image={portrait}
                    priority
                    sizes="(min-width: 640px) 144px, 128px"
                    className="w-full rounded-[10px]"
                    frameClassName="aspect-[4/5] rounded-[10px] bg-surface-subtle"
                    imageClassName="object-cover object-[50%_16%]"
                  />
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
                <PortraitLightbox
                  image={portrait}
                  priority
                  sizes="(min-width: 1024px) 260px, 24vw"
                  className="w-full rounded-[15px]"
                  frameClassName="group/portrait aspect-[4/5] rounded-[15px] bg-surface-subtle"
                  imageClassName="object-cover object-[50%_30%] transition-transform duration-500 ease-out group-hover/portrait:scale-[1.015]"
                />
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
                <figure className="enter relative size-16 shrink-0 overflow-hidden rounded-full border border-border bg-surface-subtle shadow-[var(--shadow-card)] md:hidden">
                  <PortraitLightbox
                    image={avatar}
                    priority
                    sizes="64px"
                    className="size-full rounded-full"
                    frameClassName="size-full rounded-full"
                    imageClassName="object-cover"
                  />
                </figure>
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
