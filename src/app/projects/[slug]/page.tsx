import { Button } from "@/components/ui/Button";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const projectsData: Record<string, any> = {
    "pneumonia-detection": {
        title: "Pneumonia Detection",
        description: "Deep learning model to detect pneumonia from chest X-ray images with high accuracy using CNNs.",
        overview: "This project aims to assist radiologists in diagnosing pneumonia by automatically analyzing chest X-ray images. Using a Convolutional Neural Network (CNN), the system classifies images as either 'Normal' or 'Pneumonia' with high precision.",
        problem: "Pneumonia is a life-threatening disease that requires early detection. Manual diagnosis from X-rays can be time-consuming and subject to human error, especially in resource-constrained settings.",
        techStack: ["Python", "TensorFlow", "Keras", "Flask", "React"],
        challenges: "Handling class imbalance in the dataset and optimizing the model for faster inference on edge devices.",
        github: "https://github.com",
        demo: "#"
    },
    "deepvibe-website": {
        title: "Deepvibe Website",
        description: "Official website for Deepvibe IT Solutions.",
        overview: "A modern, responsive corporate website for Deepvibe IT Solutions to showcase their services, portfolio, and company culture.",
        problem: "The company needed a professional online presence to attract clients and talent.",
        techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        challenges: "Ensuring SEO optimization and fast load times while maintaining high-quality visuals.",
        github: "https://github.com",
        demo: "#"
    },
    "ai-assistant": {
        title: "AI Assistant Chatbot",
        description: "Intelligent chatbot powered by LLMs.",
        overview: "An advanced chatbot capable of understanding context and providing accurate responses.",
        problem: "Users needed a quick way to get answers without searching through documentation.",
        techStack: ["Next.js", "OpenAI API", "Tailwind"],
        challenges: "Managing token limits and ensuring context retention.",
        github: "https://github.com",
        demo: "#"
    }
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData[slug];

    if (!project) {
        return (
            <div className="container py-12 md:py-24 px-4 md:px-6">
                <Link href="/projects">
                    <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
                        <FiArrowLeft className="mr-2" /> Back to Projects
                    </Button>
                </Link>
                <h1 className="text-4xl font-bold mb-4 capitalize">{slug.replace(/-/g, ' ')}</h1>
                <p className="text-muted-foreground mb-8">Detailed case study coming soon.</p>
                <div className="flex gap-4">
                    <Button variant="outline">View Code</Button>
                    <Button>Live Demo</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-12 md:py-24 px-4 md:px-6">
            <Link href="/projects">
                <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
                    <FiArrowLeft className="mr-2" /> Back to Projects
                </Button>
            </Link>

            <div className="grid gap-12 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">{project.title}</h1>
                        <p className="text-xl text-muted-foreground">{project.description}</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Project Overview</h2>
                        <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Problem Statement</h2>
                        <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Challenges & Learnings</h2>
                        <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
                        <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech: string) => (
                                <span key={tech} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl border bg-card text-card-foreground shadow p-6 space-y-4">
                        <h3 className="text-lg font-bold">Links</h3>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="block">
                            <Button variant="outline" className="w-full gap-2">
                                <FiGithub /> GitHub Repository
                            </Button>
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block">
                            <Button className="w-full gap-2">
                                <FiExternalLink /> Live Demo
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
