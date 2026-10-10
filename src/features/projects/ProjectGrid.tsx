import type { Project } from "@/types/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/features/projects/ProjectCard";
import { cn } from "@/lib/utils";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  // Three columns only when rows fill evenly; otherwise two columns, where wide cards switch to a side-by-side layout.
  const threeColumns = projects.length % 3 === 0;

  return (
    <ul className={cn("grid grid-cols-1 gap-4 md:grid-cols-2", threeColumns && "lg:grid-cols-3")}>
      {projects.map((project, index) => (
        <li
          key={project.slug}
          className={cn("h-full", threeColumns ? "md:max-lg:last:odd:col-span-2" : "md:last:odd:col-span-2")}
        >
          <Reveal className="h-full" delay={(index % 3) * 60}>
            <ProjectCard project={project} />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
