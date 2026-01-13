"use client";

import { motion } from "framer-motion";

export default function ServicesOverview() {
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
                        What <span className="text-primary">I Do</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        I help <span className="font-semibold text-foreground">startups, businesses, and individuals</span> build modern, scalable, and intelligent digital products that drive results and create lasting impact.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
