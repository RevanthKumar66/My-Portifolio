"use client";

import { motion } from "framer-motion";
import { FiCode, FiZap, FiLayers, FiMessageCircle, FiLifeBuoy } from "react-icons/fi";

const differentiators = [
    {
        icon: FiCode,
        title: "Clean & Maintainable Code",
        description: "Well-structured, documented code following industry best practices"
    },
    {
        icon: FiZap,
        title: "Performance-Focused Builds",
        description: "Optimized for speed, efficiency, and exceptional user experience"
    },
    {
        icon: FiLayers,
        title: "Scalable Architecture",
        description: "Future-proof solutions that grow with your business needs"
    },
    {
        icon: FiMessageCircle,
        title: "Clear Communication",
        description: "Regular updates, transparent process, and collaborative approach"
    },
    {
        icon: FiLifeBuoy,
        title: "Long-Term Support",
        description: "Ongoing maintenance, updates, and technical assistance"
    }
];

export default function WhyWorkWithMe() {
    return (
        <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Why Work <span className="text-primary">With Me</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        What sets my services apart
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 group hover:shadow-lg transition-all duration-300"
                        >
                            <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-base font-bold mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
