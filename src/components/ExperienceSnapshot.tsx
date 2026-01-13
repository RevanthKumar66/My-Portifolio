"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const experiences = [
    {
        role: "Software Developer / Cloud Support Trainee",
        company: "Deepvibe IT Solutions Pvt. Ltd.",
        logo: "/Deepvibe logo.png",
        period: "Aug 2025 – Present",
        type: "work",
        badge: "Currently Working"
    },
    {
        role: "Data Science Intern (Academic Internship)",
        company: "42Learn",
        logo: "/42Learn logo.png",
        period: "May 2024 – Jul 2024",
        type: "internship",
        badge: "Academic Internship"
    },
    {
        role: "Machine Learning Intern Academic Internship",
        company: "CodeTantra Tech",
        logo: "/Codetantra logo.png",
        period: "Jun 2023 – Jul 2023",
        type: "internship",
        badge: "Academic Internship"
    }
];

export default function ExperienceSnapshot() {
    return (
        <section className="relative py-12 bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
            {/* Decorative Background Gradients */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-green-500/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />
            <div className="container px-6 md:px-12 max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary mb-2">Experience</h2>
                    <p className="text-sm text-muted-foreground">
                        My professional journey in software engineering and data science.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line - Hidden on Mobile */}
                    <div className="hidden md:block absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

                    <div className="space-y-6 md:space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot - Hidden on Mobile */}
                                <div className="hidden md:block absolute left-8 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-slate-50 dark:border-slate-950 shadow-lg z-10">
                                    {exp.type === 'work' && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[calc(50%-2rem)] ml-0 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                                    }`}>
                                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm md:shadow-md hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-center gap-4">
                                            {/* Logo */}
                                            <div className="relative w-14 h-14 rounded-lg bg-slate-50 dark:bg-white p-2 border border-slate-100 dark:border-slate-300 flex items-center justify-center overflow-hidden shrink-0">
                                                <Image
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    width={56}
                                                    height={56}
                                                    className="object-contain"
                                                />
                                            </div>

                                            {/* Company & Role */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-base text-foreground truncate">{exp.company}</h3>
                                                <p className="text-sm font-medium text-primary truncate">{exp.role}</p>

                                                {/* Badge & Date */}
                                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium border ${exp.type === 'work'
                                                        ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30'
                                                        : 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30'
                                                        }`}>
                                                        {exp.badge}
                                                    </span>
                                                    <span className="text-[10px] md:text-xs text-muted-foreground flex items-center gap-1">
                                                        <FiCalendar className="w-3 h-3" /> {exp.period}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* See My Journey Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 text-center"
                >
                    <Link href="/about">
                        <Button className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30">
                            See My Journey <FiArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
