"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = {
    frontend: [
        { name: "React", logo: "/tech-logos/react.svg" },
        { name: "Next.js", logo: "/tech-logos/nextjs.svg" },
        { name: "TypeScript", logo: "/tech-logos/typescript.svg" },
        { name: "Tailwind CSS", logo: "/tech-logos/tailwind.svg" }
    ],
    backend: [
        { name: "Node.js", logo: "/tech-logos/nodejs.svg" },
        { name: "Express", logo: "/tech-logos/express.svg" },
        { name: "Python", logo: "/tech-logos/python.svg" },
        { name: "FastAPI", logo: "/tech-logos/fastapi.svg" }
    ],
    aiml: [
        { name: "TensorFlow", logo: "/tech-logos/tensorflow.svg" },
        { name: "PyTorch", logo: "/tech-logos/pytorch.svg" },
        { name: "Scikit-learn", logo: "/tech-logos/sklearn.svg" },
        { name: "OpenAI", logo: "/tech-logos/openai.svg" }
    ],
    databases: [
        { name: "MongoDB", logo: "/tech-logos/mongodb.svg" },
        { name: "PostgreSQL", logo: "/tech-logos/postgresql.svg" },
        { name: "MySQL", logo: "/tech-logos/mysql.svg" },
        { name: "Redis", logo: "/tech-logos/redis.svg" }
    ],
    tools: [
        { name: "Git", logo: "/tech-logos/git.svg" },
        { name: "Docker", logo: "/tech-logos/docker.svg" },
        { name: "VS Code", logo: "/tech-logos/vscode.svg" },
        { name: "Figma", logo: "/tech-logos/figma.svg" }
    ]
};

export default function ToolsTechnologies() {
    return (
        <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Tools & <span className="text-primary">Technologies</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Modern tech stack for robust solutions
                    </p>
                </motion.div>

                <div className="space-y-10">
                    {Object.entries(technologies).map(([category, techs], catIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            <h3 className="text-lg font-bold capitalize mb-6 text-center">
                                {category === "aiml" ? "AI / ML" : category}
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {techs.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="glass-card p-6 flex flex-col items-center gap-3 group hover:shadow-lg transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="w-12 h-12 relative grayscale group-hover:grayscale-0 transition-all">
                                            <div className="w-full h-full flex items-center justify-center text-4xl">
                                                {tech.name === "React" && "⚛️"}
                                                {tech.name === "Next.js" && "▲"}
                                                {tech.name === "TypeScript" && "TS"}
                                                {tech.name === "Tailwind CSS" && "🎨"}
                                                {tech.name === "Node.js" && "🟢"}
                                                {tech.name === "Express" && "🚂"}
                                                {tech.name === "Python" && "🐍"}
                                                {tech.name === "FastAPI" && "⚡"}
                                                {tech.name === "TensorFlow" && "🧠"}
                                                {tech.name === "PyTorch" && "🔥"}
                                                {tech.name === "Scikit-learn" && "📊"}
                                                {tech.name === "OpenAI" && "🤖"}
                                                {tech.name === "MongoDB" && "🍃"}
                                                {tech.name === "PostgreSQL" && "🐘"}
                                                {tech.name === "MySQL" && "🐬"}
                                                {tech.name === "Redis" && "📮"}
                                                {tech.name === "Git" && "📦"}
                                                {tech.name === "Docker" && "🐳"}
                                                {tech.name === "VS Code" && "💻"}
                                                {tech.name === "Figma" && "🎨"}
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium text-center">{tech.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
