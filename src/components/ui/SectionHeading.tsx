import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted",
        className,
      )}
    >
      <span className="h-px w-4 bg-primary" aria-hidden="true" />
      {children}
    </p>
  );
}

export function TwoToneTitle({ title, accent }: { title: string; accent?: string }) {
  if (!accent) return <>{title}</>;
  return (
    <>
      {title} <span className="accent-phrase">{accent}</span>
    </>
  );
}

export const sectionTitleClasses =
  "text-balance text-[clamp(1.4375rem,1.2rem+0.9vw,2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-text-primary";

export function SectionHeading({
  id,
  eyebrow,
  title,
  accent,
  description,
  className,
  action,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6", className)}>
      <div className="max-w-[620px]">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 id={id} className={cn(sectionTitleClasses, eyebrow && "mt-2.5")}>
          <TwoToneTitle title={title} accent={accent} />
        </h2>
        {description ? (
          <p className="mt-2 max-w-[60ch] text-pretty text-[14.5px] leading-relaxed text-text-secondary">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
