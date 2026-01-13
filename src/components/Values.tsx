"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

const values = [
    {
        title: "Clean Code",
        description: "Maintainable, scalable architecture.",
        illustration: "/CleanCode.svg"
    },
    {
        title: "User-Centric",
        description: "Accessibility & experience first.",
        illustration: "/UserCentic.svg"
    },
    {
        title: "Performance",
        description: "Optimized for speed & SEO.",
        illustration: "/Performance.svg"
    },
    {
        title: "Scalability",
        description: "Built to handle growth.",
        illustration: "/Scalability.svg"
    }
];

export default function Values() {
    return (
        <section className="relative py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Decorative Background Gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-500/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 to-transparent rounded-full blur-3xl" />

            <div className="container px-6 md:px-12 max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title="How I Work"
                    subtitle="My development philosophy centers on quality and efficiency."
                />

                {/* Horizontal Timeline */}
                <div className="relative mt-12">
                    {/* Horizontal Line */}
                    <div className="hidden md:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Step Number - Above Title */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + 0.1, type: "spring" }}
                                    className="mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
                                >
                                    <span className="text-sm font-bold text-primary">Step {index + 1}</span>
                                </motion.div>

                                {/* Timeline Dot */}
                                <div className="relative mb-6">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                                        className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border-4 border-primary/20 shadow-lg flex items-center justify-center relative z-10 group-hover:border-primary/50 transition-all duration-300"
                                    >
                                        <div className="w-4 h-4 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
                                    </motion.div>

                                    {/* Connecting Line (Mobile) */}
                                    {index < values.length - 1 && (
                                        <div className="md:hidden absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-primary/30 to-transparent" />
                                    )}
                                </div>

                                {/* Illustration - Larger Size */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="w-40 h-40 mb-6 flex items-center justify-center"
                                >
                                    <Image
                                        src={value.illustration}
                                        alt={value.title}
                                        width={160}
                                        height={160}
                                        className="object-contain drop-shadow-lg"
                                    />
                                </motion.div>

                                {/* Content - No Card Styling */}
                                <div className="w-full">
                                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
