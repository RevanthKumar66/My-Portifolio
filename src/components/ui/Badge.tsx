import { cn } from "@/lib/utils";

const tones = {
  neutral: "border-border bg-surface text-text-secondary",
  accent: "border-transparent bg-primary-subtle text-primary",
};

export function Badge({
  children,
  className,
  tone = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: keyof typeof tones;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-[22px] items-center rounded-full border px-2 text-[11px] font-medium leading-none",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
