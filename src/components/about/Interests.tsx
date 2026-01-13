"use client";

import { motion } from "framer-motion";
import { FiBook, FiCode, FiCoffee, FiMusic, FiCamera, FiGlobe } from "react-icons/fi";

const interests = [
    {
        icon: FiCode,
        title: "Open Source",
        description: "Contributing to open-source projects and building tools for the developer community."
    },
    {
        icon: FiBook,
        title: "Tech Blogs",
        description: "Reading and writing about latest tech trends, best practices, and innovations."
    },
    {
        icon: FiGlobe,
        title: "Web3 & Blockchain",
        description: "Exploring decentralized technologies and their potential applications."
    },
    {
        icon: FiCoffee,
        title: "Problem Solving",
        description: "Tackling algorithmic challenges and participating in coding competitions."
    },
    {
        icon: FiMusic,
        title: "Music",
        description: "Listening to music while coding and exploring different genres."
    },
    {
        icon: FiCamera,
        title: "Photography",
        description: "Capturing moments and exploring creative perspectives through the lens."
    }
];

export default function Interests() {
    return (
        <section className="py-16 md:py-20 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Interests & <span className="text-primary">Hobbies</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        What I enjoy beyond coding and technology
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {interests.map((interest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                    <interest.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">{interest.title}</h3>
                                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
