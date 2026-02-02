"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsHero() {
    return (
        <section className="hero-section relative min-h-[auto] md:min-h-[50vh] flex items-center pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-0 overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
            {/* Optimized Dotted Background Pattern */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#8080802e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#00000000_70%,transparent_100%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#ffffff05_70%,transparent_100%)]"></div>
            {/* 3D Animated Blobs - Hidden on mobile */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -80, 0],
                    rotate: [0, 360, 0],
                    scale: [1, 1.4, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="hidden md:block absolute -top-32 -right-32 w-[550px] h-[550px] bg-gradient-to-bl from-primary/30 to-indigo-500/25 rounded-full blur-[110px] z-0"
            />
            <motion.div
                animate={{
                    x: [0, -70, 0],
                    y: [0, 50, 0],
                    rotate: [360, 0, 360],
                    scale: [1, 1.25, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="hidden md:block absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-indigo-500/30 to-purple-500/20 rounded-full blur-[80px] z-0"
            />
            <motion.div
                animate={{
                    scale: [1, 1.7, 1],
                    opacity: [0.4, 0.8, 0.4],
                    x: [0, 60, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:block absolute top-1/2 right-1/2 w-64 h-64 bg-gradient-to-tl from-purple-500/25 to-primary/25 rounded-full blur-[100px] z-0"
            />

            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-3 md:space-y-4"
                    >
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] md:text-xs font-medium text-primary">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-primary mr-1.5 animate-pulse"></span>
                            Portfolio
                        </div>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
                            My <span className="text-primary">Projects</span>
                        </h1>

                        <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                            A curated showcase of my engineering journey—from full-stack platforms to intelligent AI systems.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-2.5 md:gap-4 pt-2 md:pt-3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-center"
                            >
                                <p className="text-lg md:text-2xl font-bold text-primary">8+</p>
                                <p className="text-[10px] md:text-xs text-muted-foreground">Projects</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-center"
                            >
                                <p className="text-lg md:text-2xl font-bold text-primary">4</p>
                                <p className="text-[10px] md:text-xs text-muted-foreground">Domains</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="text-center"
                            >
                                <p className="text-lg md:text-2xl font-bold text-primary">100%</p>
                                <p className="text-[10px] md:text-xs text-muted-foreground">Open Source</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Abstract Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative w-full aspect-square max-w-[350px]">
                            <Image
                                src="/projects-illustration.svg"
                                alt="Projects Illustration"
                                fill
                                className="object-contain"
                                priority
                            />
                            {/* Central Glow */}
                            <div className="absolute inset-0 flex items-center justify-center -z-10">
                                <div className="w-64 h-64 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-full blur-[100px] animate-pulse"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
