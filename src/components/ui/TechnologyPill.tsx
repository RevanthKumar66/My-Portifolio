import { TechIcon } from "@/components/ui/TechIcon";
import { cn } from "@/lib/utils";

export function TechnologyPill({
  name,
  size = "md",
  className,
}: {
  name: string;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border border-border bg-surface-subtle/60 leading-none text-text-secondary transition-colors duration-150 ease-out hover:border-border-strong hover:text-text-primary",
        size === "sm" ? "h-6 gap-1 px-2 text-[12px]" : "h-[26px] gap-1.5 px-2.5 text-[12.5px]",
        className,
      )}
    >
      <TechIcon name={name} className={size === "sm" ? "size-3" : "size-3.5"} />
      {name}
    </span>
  );
}

export function TechnologyList({
  items,
  size = "md",
  className,
  label,
}: {
  items: string[];
  size?: "sm" | "md";
  className?: string;
  label?: string;
}) {
  if (items.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)} aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <TechnologyPill name={item} size={size} />
        </li>
      ))}
    </ul>
  );
}
