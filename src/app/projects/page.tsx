import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsOverview from "@/components/projects/ProjectsOverview";
import ProjectList from "@/components/projects/ProjectList";

export const metadata = {
    title: "Portfolio | Revanth Kumar",
    description: "Explore my technical portfolio featuring full-stack development, AI solutions, and data-driven projects.",
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ProjectsHero />
            <ProjectsOverview />
            <ProjectList />
        </div>
    );
}
