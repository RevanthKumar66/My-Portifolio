"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
    {
        title: "AI Chatbot Platform",
        description: "Intelligent customer service automation with NLP",
        image: "/projects/chatbot.jpg",
        tech: ["React", "Node.js", "OpenAI"],
        link: "/projects/chatbot"
    },
    {
        title: "E-Commerce Dashboard",
        description: "Full-stack analytics and inventory management",
        image: "/projects/ecommerce.jpg",
        tech: ["Next.js", "MongoDB", "Stripe"],
        link: "/projects/ecommerce"
    },
    {
        title: "Data Visualization Tool",
        description: "Interactive charts and real-time insights",
        image: "/projects/dataviz.jpg",
        tech: ["React", "D3.js", "Python"],
        link: "/projects/dataviz"
    }
];

export default function FeaturedProjects() {
    return (
        <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Real-world implementations showcasing my expertise
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card overflow-hidden group hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-48 bg-gradient-to-br from-primary/10 to-indigo-500/10 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                                    {index === 0 && "🤖"}
                                    {index === 1 && "🛒"}
                                    {index === 2 && "📊"}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-muted-foreground mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <Link
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                                    >
                                        View Details
                                        <FiArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                    >
                        View All Projects
                        <FiArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
