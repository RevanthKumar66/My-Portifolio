"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiMail, FiFileText } from "react-icons/fi";

export default function CTASection() {
    return (
        <section className="py-16 md:py-20 relative overflow-hidden bg-white dark:bg-slate-950">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Corner Blobs */}
            <motion.div
                animate={{
                    x: [0, 40, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] z-0"
            />
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-[90px] z-0"
            />

            <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 text-center bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 shadow-2xl"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Have a Project in <span className="text-primary">Mind?</span>
                    </h2>

                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's discuss how I can help bring your ideas to life with modern technology and expert development.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl font-medium"
                        >
                            <FiMail className="w-4 h-4" />
                            Contact Me
                        </Link>

                        <Link
                            href="/contact#quote"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-slate-800 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-xl font-medium"
                        >
                            <FiFileText className="w-4 h-4" />
                            Get a Quote
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
