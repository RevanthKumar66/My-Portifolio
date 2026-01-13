"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FiExternalLink, FiDownload } from "react-icons/fi";

const opportunities = [
    "Full-time Software Engineering roles",
    "Summer/Winter Internships",
    "Freelance / Contract projects",
    "Open Source Collaborations"
];

export default function ContactAvailability() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 md:p-12 border-l-4 border-l-primary"
                    >
                        <h2 className="text-2xl font-bold mb-6">Currently open to:</h2>
                        <ul className="space-y-4">
                            {opportunities.map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-lg text-muted-foreground group">
                                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 text-center lg:text-left"
                    >
                        <h3 className="text-3xl font-bold tracking-tight">Need my <span className="text-primary">Credentials?</span></h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Looking to verify my technical background or view my project history in detail? You can download my latest resume or browse my professional timeline.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link href="/projects" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto rounded-full px-8 py-7 flex items-center gap-2 shadow-lg shadow-primary/20">
                                    <FiExternalLink /> View My Projects
                                </Button>
                            </Link>
                            <a href="/RevanthSDE.pdf" download className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full sm:w-auto rounded-full px-8 py-7 flex items-center gap-2">
                                    <FiDownload /> Download Resume
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
