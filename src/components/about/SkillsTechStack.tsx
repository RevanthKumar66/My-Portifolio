"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPostgresql, SiRedux, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiOpenai, SiHuggingface, SiTailwindcss, SiFigma, SiVercel, SiExpress } from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend Development",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        skills: [
            { name: "React", icon: FaReact, level: 90 },
            { name: "TypeScript", icon: SiTypescript, level: 85 },
            { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
            { name: "Redux", icon: SiRedux, level: 80 },
        ]
    },
    {
        title: "Backend Development",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        skills: [
            { name: "Node.js", icon: FaNodeJs, level: 88 },
            { name: "Express", icon: SiExpress, level: 85 },
            { name: "MongoDB", icon: SiMongodb, level: 82 },
            { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
        ]
    },
    {
        title: "AI & Machine Learning",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        skills: [
            { name: "Python", icon: FaPython, level: 85 },
            { name: "TensorFlow", icon: SiTensorflow, level: 80 },
            { name: "PyTorch", icon: SiPytorch, level: 78 },
            { name: "Scikit-learn", icon: SiScikitlearn, level: 82 },
        ]
    },
    {
        title: "Tools & DevOps",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        skills: [
            { name: "Git", icon: FaGitAlt, level: 90 },
            { name: "Docker", icon: FaDocker, level: 75 },
            { name: "AWS", icon: FaAws, level: 70 },
            { name: "Linux", icon: FaLinux, level: 80 },
        ]
    }
];

export default function SkillsTechStack() {
    return (
        <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Skills & <span className="text-primary">Tech Stack</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Technologies and tools I work with to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                            className="bg-slate-50 dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700"
                        >
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${category.bgColor} ${category.color} mb-6`}>
                                <span className="font-semibold">{category.title}</span>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="group">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <skill.icon className={`w-6 h-6 ${category.color}`} aria-hidden="true" />
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                        </div>
                                        <div
                                            className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
                                            role="progressbar"
                                            aria-valuenow={skill.level}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            aria-label={`${skill.name} proficiency`}
                                        >
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: catIndex * 0.1 + skillIndex * 0.1, duration: 1, ease: "easeOut" }}
                                                className={`h-full ${category.bgColor} ${category.color} bg-opacity-100 rounded-full`}
                                                style={{ backgroundColor: `currentColor`, opacity: 0.8 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
