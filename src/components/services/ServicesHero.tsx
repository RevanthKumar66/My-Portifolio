"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FiMessageSquare } from "react-icons/fi";
import ContactFormModal from "@/components/ContactFormModal";
import { useState } from "react";

export default function ServicesHero() {
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
                    x: [0, 60, 0],
                    y: [0, 100, 0],
                    rotate: [0, 360, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-indigo-500/25 rounded-full blur-[110px] z-0"
            />
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, -50, 0],
                    rotate: [360, 0, 360],
                    scale: [1, 1.15, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 -right-20 w-96 h-96 bg-gradient-to-tl from-indigo-500/30 to-purple-500/20 rounded-full blur-[80px] z-0"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-500/25 to-primary/20 rounded-full blur-[90px] z-0"
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
                            Services
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                            My <span className="text-primary">Services</span>
                        </h1>

                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Transform your ideas into powerful digital products with cutting-edge technology and expert development.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-3 mb-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-center"
                            >
                                <p className="text-2xl font-bold text-primary">7+</p>
                                <p className="text-xs text-muted-foreground">Services</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-center"
                            >
                                <p className="text-2xl font-bold text-primary">10+</p>
                                <p className="text-xs text-muted-foreground">Technologies</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="text-center"
                            >
                                <p className="text-2xl font-bold text-primary">100%</p>
                                <p className="text-xs text-muted-foreground">Dedicated</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="pt-3"
                        >
                            <Button
                                size="md"
                                onClick={() => setIsContactModalOpen(true)}
                                className="rounded-full px-8 py-6 text-base shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1"
                            >
                                <FiMessageSquare className="mr-3 w-4 h-4" /> Initiate Project
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right - Abstract Tech Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative w-full aspect-square max-w-[350px]">
                            <Image
                                src="/Services-illustrations.svg"
                                alt="Services Illustration"
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
