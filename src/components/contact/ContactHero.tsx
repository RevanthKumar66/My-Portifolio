"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactHero() {
    return (
        <section className="hero-section relative min-h-[auto] md:min-h-[50vh] flex items-center pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-0 overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
            {/* Optimized Dotted Background Pattern */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#8080802e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#00000000_70%,transparent_100%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#ffffff05_70%,transparent_100%)]"></div>

            {/* 3D Animated Blobs - Hidden on mobile */}
            <motion.div
                animate={{
                    x: [0, 80, 0],
                    y: [0, 40, 0],
                    rotate: [0, 360, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="hidden md:block absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-primary/30 to-indigo-500/20 rounded-full blur-[80px] z-0"
            />
            <motion.div
                animate={{
                    x: [0, -60, 0],
                    y: [0, 80, 0],
                    rotate: [360, 0, 360],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="hidden md:block absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/30 to-purple-500/20 rounded-full blur-[100px] z-0"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.7, 0.4],
                    x: [0, 30, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:block absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-primary/20 rounded-full blur-[70px] z-0"
            />

            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-3 md:space-y-4 text-left"
                    >
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] md:text-xs font-medium text-primary uppercase tracking-widest mb-1.5 md:mb-2">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-primary mr-1.5 animate-pulse"></span>
                            Let's Connect
                        </div>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-1.5 md:mb-2">
                            Get in <span className="text-primary">Touch</span>
                        </h1>

                        <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed max-w-xl">
                            I’m open to <span className="text-foreground font-semibold">internships, full-time roles, freelance projects</span>, and collaborations. Let's start a conversation.
                        </p>
                    </motion.div>

                    {/* Right - Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative flex items-center justify-center lg:justify-end hidden md:flex"
                    >
                        <div className="relative w-full aspect-square max-w-[350px]">
                            <Image
                                src="/contact-illustration.svg"
                                alt="Contact Illustration"
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
