"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import AnimatedLogo from "@/components/AnimatedLogo";
import ContactFormModal from "@/components/ContactFormModal";
import { useState } from "react";

export default function Hero() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <section className="hero-section relative min-h-[auto] md:min-h-[50vh] flex items-center pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-0 overflow-hidden bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-200/50 dark:border-slate-800/50 text-center md:text-left">
            <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
            {/* Optimized Dotted Background Pattern */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#8080802e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#00000000_70%,transparent_100%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#ffffff05_70%,transparent_100%)]"></div>

            {/* 3D Animated Blobs for Home Hero - Hidden on mobile, scaled for tablet+ */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    rotate: [0, 360, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="hidden md:block absolute -top-12 -left-12 md:-top-24 md:-left-24 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-primary/25 to-indigo-500/20 rounded-full blur-[60px] md:blur-[80px] z-0 opacity-60 md:opacity-100"
            />
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 60, 0],
                    rotate: [360, 0, 360],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="hidden md:block absolute -bottom-24 -right-12 md:-bottom-40 md:-right-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-indigo-500/25 to-purple-500/20 rounded-full blur-[80px] md:blur-[100px] z-0 opacity-60 md:opacity-100"
            />

            <div className="container mx-auto relative z-10 max-w-7xl">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col items-center md:items-start space-y-4 md:space-y-3 w-full"
                    >
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-[8px] md:text-xs font-medium text-primary mb-4 md:mb-1 whitespace-nowrap">
                            <span className="flex h-1 w-1 rounded-full bg-primary mr-1 md:mr-1.5"></span>
                            <span className="hidden sm:inline">Available for Freelance & Full-time</span>
                            <span className="sm:hidden">Open to Work</span>
                        </div>

                        <h1 className="text-[22px] md:text-3xl text-foreground font-bold leading-tight">
                            <AnimatedLogo />
                        </h1>

                        <div className="space-y-2 min-h-[50px] md:min-h-[70px] flex flex-col items-center md:items-start">
                            <h2 className="text-[18px] sm:text-[20px] md:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
                                <TypeAnimation
                                    sequence={[
                                        'Software Developer',
                                        2000,
                                        'AI Engineer',
                                        2000,
                                        'Full Stack Dev',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    cursor={true}
                                />
                            </h2>
                            <p className="text-[13px] md:text-base text-muted-foreground max-w-sm md:max-w-md leading-relaxed">
                                Building scalable web apps & AI solutions.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2.5 pt-3 md:pt-4 w-full sm:w-auto">
                            <Link href="/projects" className="w-full sm:w-auto">
                                <Button size="lg" className="h-[40px] md:h-[44px] w-full sm:w-auto rounded-lg md:rounded-xl px-5 md:px-6 text-[13px] md:text-[14px] shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
                                    View Projects
                                </Button>
                            </Link>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => setIsContactModalOpen(true)}
                                className="h-[40px] md:h-[44px] w-full sm:w-auto rounded-lg md:rounded-xl px-5 md:px-6 text-[13px] md:text-[14px] border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Contact Me
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column - Visual - Concentric Circles Profile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative h-[240px] md:h-[400px] w-full flex items-center justify-center -mt-2 md:mt-0"
                    >
                        <div className="relative flex items-center justify-center">
                            {/* Ring 2 */}
                            <motion.div
                                animate={{ scale: [1, 1.03, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute w-[168px] h-[168px] md:w-[360px] md:h-[360px] rounded-full bg-primary/10 dark:bg-primary/10 border border-primary/10"
                            />
                            {/* Ring 1 (Innermost Background) */}
                            <div className="absolute w-[136px] h-[136px] md:w-[300px] md:h-[300px] rounded-full bg-primary/15 dark:bg-primary/20 border border-primary/10" />

                            {/* Profile Image Container */}
                            <div className="relative w-[120px] h-[120px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-[4px] md:border-[6px] border-white dark:border-slate-950 shadow-2xl z-10">
                                <div className="relative w-full h-full bg-slate-100 dark:bg-slate-800">
                                    <img
                                        src="/profile-pic1.jpg"
                                        alt="Revanth Kumar - Full Stack Developer & AI Engineer Portfolio Profile"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-2 right-4 md:right-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 flex items-center gap-2"
                            >
                                <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
                                </span>
                                <span className="text-[10px] md:text-xs font-semibold text-slate-700 dark:text-slate-200">Open to Work</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
