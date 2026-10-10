import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function IconLink({
  href,
  icon: Icon,
  children,
  className,
}: {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 text-[15px] text-text-secondary transition-colors duration-150 ease-out hover:text-primary",
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Icon className="size-4 shrink-0" aria-hidden="true" />
      {children}
    </a>
  );
}
