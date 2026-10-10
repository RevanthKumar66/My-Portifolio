import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

export function ProjectMedia({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw",
  className,
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group/media relative aspect-[16/10] overflow-hidden rounded-[var(--radius-media)] border border-border bg-showcase",
        className,
      )}
    >
      <div className="absolute inset-x-[4%] inset-y-[6%] transition-transform duration-300 ease-out group-hover/media:scale-[1.02] dark:bg-[radial-gradient(closest-side,rgb(255_255_255/0.09),transparent)]">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-contain drop-shadow-[0_12px_18px_rgb(0_0_0/0.14)]"
        />
      </div>
    </div>
  );
}
