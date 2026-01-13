"use client";

import { motion } from "framer-motion";

export default function ProjectsOverview() {
    return (
        <section className="py-12 md:py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card p-8 md:p-10 text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Technical <span className="text-primary">Ecosystem</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        Explore a diverse range of projects spanning <span className="font-semibold text-foreground">Next.js applications, AI agents, medical computer vision, and data intelligence</span>. Each project reflects a commitment to clean code, performance, and user-centric design.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
