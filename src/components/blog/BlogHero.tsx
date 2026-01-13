"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogHero() {
    return (
        <section className="hero-section relative min-h-[50vh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
            {/* Optimized Dotted Background Pattern */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#8080802e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#00000000_70%,transparent_100%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#ffffff05_70%,transparent_100%)]"></div>

            {/* 3D Animated Blobs */}
            <motion.div
                animate={{
                    x: [0, 80, 0],
                    y: [0, 40, 0],
                    rotate: [0, 360, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-primary/30 to-indigo-500/20 rounded-full blur-[80px] z-0"
            />
            <motion.div
                animate={{
                    x: [0, -60, 0],
                    y: [0, 80, 0],
                    rotate: [360, 0, 360],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/30 to-purple-500/20 rounded-full blur-[100px] z-0"
            />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4 text-left"
                    >
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary uppercase tracking-widest mb-2">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-primary mr-2 animate-pulse"></span>
                            Insights & Articles
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                            My <span className="text-primary">Blogs</span>
                        </h1>

                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                            Thoughts on <span className="text-foreground font-semibold">AI, Full-Stack Development</span>, and building real-world software systems.
                        </p>
                    </motion.div>

                    {/* Right - Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative w-full aspect-square max-w-[350px]">
                            <Image
                                src="/blog-illustration.svg"
                                alt="Blog Illustration"
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
