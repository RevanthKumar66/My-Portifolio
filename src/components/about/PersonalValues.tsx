"use client";

import { motion } from "framer-motion";
import { FiCode, FiUsers, FiTrendingUp, FiTarget } from "react-icons/fi";

const values = [
    {
        icon: FiCode,
        title: "Clean Code",
        description: "Writing maintainable, scalable, and well-documented code that stands the test of time.",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10"
    },
    {
        icon: FiUsers,
        title: "User-Centric",
        description: "Prioritizing user experience and accessibility in every design and development decision.",
        color: "text-green-500",
        bgColor: "bg-green-500/10"
    },
    {
        icon: FiTrendingUp,
        title: "Performance",
        description: "Optimizing for speed, efficiency, and SEO to deliver exceptional user experiences.",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10"
    },
    {
        icon: FiTarget,
        title: "Continuous Learning",
        description: "Staying updated with latest technologies and best practices in the ever-evolving tech landscape.",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10"
    }
];

export default function PersonalValues() {
    return (
        <section className="relative py-16 md:py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Personal <span className="text-primary">Values</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Principles that guide my work and professional growth
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 text-center group"
                        >
                            <div className={`inline-flex p-4 rounded-full ${value.bgColor} ${value.color} mb-4 group-hover:scale-110 transition-transform`}>
                                <value.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                            <p className="text-sm text-muted-foreground">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
