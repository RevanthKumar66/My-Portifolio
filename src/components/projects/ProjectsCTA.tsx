"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FiMessageSquare, FiArrowRight } from "react-icons/fi";
import ContactFormModal from "@/components/ContactFormModal";
import { useState } from "react";

export default function ProjectsCTA() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <section className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 md:p-20 text-center max-w-5xl mx-auto border-2 border-primary/10 shadow-2xl"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Have a project in <span className="text-primary">mind?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                        I'm always looking for high-impact technical collaborations and innovative engineering roles. Let's build something extraordinary together.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            size="lg"
                            onClick={() => setIsContactModalOpen(true)}
                            className="rounded-full px-10 py-7 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1"
                        >
                            <FiMessageSquare className="mr-3 w-5 h-5" /> Initiate Connection
                        </Button>
                        <Link href="/about">
                            <Button variant="outline" size="lg" className="rounded-full px-10 py-7 text-lg transition-all hover:bg-white/50 dark:hover:bg-slate-900/50">
                                View My Journey <FiArrowRight className="ml-3 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
