import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsOverview from "@/components/projects/ProjectsOverview";
import ProjectList from "@/components/projects/ProjectList";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Revanth Kumar",
    description: "Explore my technical portfolio featuring full-stack development, AI solutions, and data-driven projects.",
    alternates: {
        canonical: "/projects",
    },
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
