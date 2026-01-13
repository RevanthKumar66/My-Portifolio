"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui/Button";

const projects = [
    {
        title: "Pneumonia Detection System",
        description: "AI-powered medical diagnosis system using deep learning to detect pneumonia from chest X-rays with 95% accuracy.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
        technologies: ["Python", "TensorFlow", "React", "Flask"],
        link: "/projects/pneumonia-detection",
        github: "https://github.com"
    },
    {
        title: "Deepvibe Corporate Website",
        description: "Modern, responsive corporate website with CMS integration and analytics dashboard for business insights.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
        link: "/projects/deepvibe-website",
        github: "https://github.com"
    },
    {
        title: "AI Assistant Chatbot",
        description: "Intelligent conversational AI powered by GPT models with context awareness and task automation capabilities.",
        image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=800&q=80",
        technologies: ["Next.js", "OpenAI", "Tailwind CSS"],
        link: "/projects/ai-assistant",
        github: "https://github.com"
    }
];

export default function ProjectHighlights() {
    return (
        <section className="relative py-16 md:py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl" />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Showcase of my best work and technical achievements
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="relative p-[1.5px] rounded-lg overflow-hidden group"
                        >
                            {/* Animated Border Gradient */}
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                style={{
                                    background: `conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(var(--primary-rgb, 59, 130, 246), 0.6) 360deg)`,
                                }}
                                className="absolute inset-[-200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />

                            {/* Card Background */}
                            <div className="relative bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-300 h-full z-10">
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                                <div className="relative h-48 overflow-hidden rounded">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 group-hover:brightness-105 transition-all duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Image Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="p-6 relative z-20">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-2">
                                        <Link href={project.link} className="flex-1">
                                            <Button size="sm" className="w-full rounded-full hover:scale-105 transition-transform">
                                                <FiExternalLink className="w-4 h-4 mr-1" /> View
                                            </Button>
                                        </Link>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Button size="sm" variant="outline" className="rounded-full hover:scale-110 transition-transform">
                                                <FiGithub className="w-4 h-4" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link href="/projects">
                        <Button variant="outline" className="rounded-full px-8">
                            View All Projects
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
