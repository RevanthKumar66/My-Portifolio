import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex min-h-10 items-center gap-1.5 text-[13px] font-medium text-primary transition-colors duration-150 hover:text-primary-hover"
    >
      {children}
      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
