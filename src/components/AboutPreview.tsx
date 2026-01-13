"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FiArrowRight, FiDownload, FiAward, FiBookOpen } from "react-icons/fi";
import { motion } from "framer-motion";

export default function AboutPreview() {
    return (
        <section className="relative py-16 md:py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden">
            {/* Decorative Background Gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />
            <div className="container px-6 md:px-12 max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
                    >
                        <div className="relative w-full max-w-sm aspect-[4/5]">
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />

                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105" />
                            <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
                                {/* Profile Image */}
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/My-Gallery/about-preview-my-pic.png"
                                        alt="Revanth Kumar"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-[200px]"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
                                        <FiAward size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Experience</p>
                                        <p className="font-bold text-sm">Full Stack Dev</p>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500">
                                    Building scalable solutions at Deepvibe IT Solutions.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8 order-1 lg:order-2"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">About Me</h2>
                            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                                Bridging the gap between <span className="text-primary">Complex Data</span> and <span className="text-primary">User Experience</span>.
                            </h3>
                            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                                <p>
                                    I'm a <strong>B.Tech graduate in AI & Data Science</strong>, currently working as a <strong>MERN Stack Developer</strong> at Deepvibe IT Solutions. I build scalable web applications that solve real-world problems.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-2 mb-2 text-primary">
                                    <FiBookOpen />
                                    <span className="font-bold">Education</span>
                                </div>
                                <p className="text-sm font-medium">B.Tech in AI & DS</p>
                                <p className="text-xs text-muted-foreground">CGPA: 8.15</p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-2 mb-2 text-primary">
                                    <FiAward />
                                    <span className="font-bold">Focus</span>
                                </div>
                                <p className="text-sm font-medium">Full Stack & AI</p>
                                <p className="text-xs text-muted-foreground">MERN + ML/DS</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link href="/about">
                                <Button className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30">
                                    Read Full Story <FiArrowRight className="ml-2" />
                                </Button>
                            </Link>
                            <a href="/RevanthSDE.pdf" download>
                                <Button variant="outline" className="rounded-full px-8">
                                    Download Resume <FiDownload className="ml-2" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}