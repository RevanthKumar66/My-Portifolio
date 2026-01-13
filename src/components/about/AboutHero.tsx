"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiMapPin, FiMail, FiLinkedin, FiGithub, FiMessageSquare } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import ContactFormModal from "@/components/ContactFormModal";
import { useState } from "react";

export default function AboutHero() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <section className="hero-section relative min-h-[50vh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
            <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

            {/* Optimized Dotted Background Pattern */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#8080802e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#00000000_70%,transparent_100%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#ffffff05_70%,transparent_100%)]"></div>

            {/* 3D Animated Blobs - Enhanced Visibility */}
            <motion.div
                animate={{
                    x: [0, 90, 0],
                    y: [0, -60, 0],
                    rotate: [0, 360, 0],
                    scale: [1, 1.25, 1]
                }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-primary/30 to-indigo-500/20 rounded-full blur-[90px] z-0"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 70, 0],
                    rotate: [360, 0, 360],
                    scale: [1, 1.35, 1]
                }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-500/30 to-purple-500/20 rounded-full blur-[120px] z-0"
            />
            <motion.div
                animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.3, 0.6, 0.3],
                    y: [0, 40, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-primary/20 rounded-full blur-[70px] z-0"
            />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-primary mr-2 animate-pulse"></span>
                            About Me
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Hi, I'm <span className="text-primary">Revanth Kumar</span>
                        </h1>

                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            A passionate <span className="text-primary font-semibold">Full Stack Developer</span> and{" "}
                            <span className="text-primary font-semibold">AI Engineer</span> dedicated to building innovative solutions
                            that make a difference.
                        </p>

                        {/* Quick Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex items-center gap-3"
                            >
                                <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                                    <FiMapPin className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground">Location</p>
                                    <p className="text-xs font-semibold">Andhra Pradesh, India</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                                    <FiMail className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground">Email</p>
                                    <a href="mailto:revanth.kumar4466@gmail.com" className="text-xs font-semibold hover:text-primary transition-colors">
                                        revanth.kumar4466@gmail.com
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links & CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-wrap items-center gap-4 pt-2"
                        >
                            <div className="flex gap-2.5">
                                <a
                                    href="https://www.linkedin.com/in/revanthkumar66/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    <FiLinkedin className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://github.com/RevanthKumar66"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    <FiGithub className="w-4 h-4" />
                                </a>
                            </div>

                            <Button
                                onClick={() => setIsContactModalOpen(true)}
                                size="sm"
                                className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1"
                            >
                                <FiMessageSquare className="mr-2 w-4 h-4" /> Hire Me
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative w-56 h-56 md:w-64 md:h-64">
                            {/* Decorative Background Rings */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-indigo-500/10 rounded-2xl rotate-6 animate-pulse"></div>
                            <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-purple-500/10 rounded-2xl -rotate-6 animate-pulse" style={{ animationDelay: '1s' }}></div>

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white dark:border-slate-800 shadow-2xl">
                                <Image
                                    src="/My-Gallery/about-hero-my-pic.png"
                                    alt="Revanth Kumar"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 224px, 256px"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
