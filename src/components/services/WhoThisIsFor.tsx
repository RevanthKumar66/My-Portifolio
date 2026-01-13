"use client";

import { motion } from "framer-motion";
import { FiUsers, FiBriefcase, FiTrendingUp, FiBook } from "react-icons/fi";

const audiences = [
    {
        icon: FiTrendingUp,
        title: "Startups & Founders",
        description: "MVP development, product scaling, and technical consulting"
    },
    {
        icon: FiBriefcase,
        title: "Small & Medium Businesses",
        description: "Digital transformation, automation, and custom solutions"
    },
    {
        icon: FiUsers,
        title: "Personal Brands",
        description: "Portfolio websites, blogs, and online presence"
    },
    {
        icon: FiBook,
        title: "Students & Educators",
        description: "Learning platforms, academic projects, and research tools"
    }
];

export default function WhoThisIsFor() {
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
                        Who This Is <span className="text-primary">For</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Tailored solutions for diverse needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 text-center group hover:shadow-lg transition-all duration-300"
                        >
                            <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                                <audience.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-base font-bold mb-2">
                                {audience.title}
                            </h3>

                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {audience.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
