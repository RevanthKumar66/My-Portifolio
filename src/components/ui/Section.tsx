import { cn } from "@/lib/utils";

const tones = {
  default: "",
  alt: "bg-alt",
  showcase: "bg-showcase",
  fade: "bg-fade-down",
};

export function Section({
  id,
  className,
  children,
  labelledBy,
  tone = "default",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
  tone?: keyof typeof tones;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-14 py-10 md:py-14 lg:py-16", tones[tone], className)}
    >
      {children}
    </section>
  );
}
