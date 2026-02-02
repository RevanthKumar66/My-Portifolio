"use client";

import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt, FaLinux } from "react-icons/fa";
import {
    SiNextdotjs, SiMongodb, SiTensorflow, SiTailwindcss, SiTypescript,
    SiPostgresql, SiFirebase, SiGraphql, SiExpress, SiPytorch,
    SiScikitlearn, SiPandas, SiNumpy, SiOpenai, SiHuggingface,
    SiVercel, SiFigma, SiRedux
} from "react-icons/si";

const techStack = [
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-500 dark:text-gray-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "Redux", icon: SiRedux, color: "text-purple-600" },
    { name: "Python", icon: FaPython, color: "text-blue-500" },
    { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
    { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-400" },
    { name: "Pandas", icon: SiPandas, color: "text-purple-500" },
    { name: "NumPy", icon: SiNumpy, color: "text-blue-400" },
    { name: "OpenAI", icon: SiOpenai, color: "text-green-600" },
    { name: "Hugging Face", icon: SiHuggingface, color: "text-yellow-500" },
    { name: "AWS", icon: FaAws, color: "text-orange-500" },
    { name: "Docker", icon: FaDocker, color: "text-blue-500" },
    { name: "Linux", icon: FaLinux, color: "text-yellow-600" },
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Figma", icon: SiFigma, color: "text-pink-500" },
    { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
];

export default function TechStackSnapshot() {
    return (
        <section className="hidden md:block relative py-10 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Decorative Background Gradients */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />

            <div className="container px-6 md:px-12 max-w-7xl mx-auto relative z-10">
                <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
                    Technologies I Work With
                </p>

                <div className="relative w-full overflow-hidden mask-gradient">
                    <div className="flex w-max animate-marquee items-center gap-16">
                        {/* First Set */}
                        {techStack.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 group/icon min-w-[80px]">
                                <tech.icon className={`text-5xl md:text-6xl ${tech.color} opacity-80 group-hover/icon:opacity-100 transition-all duration-300 transform group-hover/icon:scale-110`} />
                                <span className="text-xs font-medium text-muted-foreground opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 translate-y-2 group-hover/icon:translate-y-0">{tech.name}</span>
                            </div>
                        ))}
                        {/* Duplicate Set for Seamless Loop */}
                        {techStack.map((tech, index) => (
                            <div key={`dup-${index}`} className="flex flex-col items-center gap-3 group/icon min-w-[80px]">
                                <tech.icon className={`text-5xl md:text-6xl ${tech.color} opacity-80 group-hover/icon:opacity-100 transition-all duration-300 transform group-hover/icon:scale-110`} />
                                <span className="text-xs font-medium text-muted-foreground opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 translate-y-2 group-hover/icon:translate-y-0">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
