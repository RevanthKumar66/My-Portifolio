"use client";

import { motion } from "framer-motion";
import { FiCode, FiTrendingUp, FiUsers, FiAward } from "react-icons/fi";

const stats = [
    { icon: FiCode, label: "Projects Completed", value: "15+", color: "text-blue-500" },
    { icon: FiTrendingUp, label: "Years Experience", value: "2+", color: "text-green-500" },
    { icon: FiUsers, label: "Happy Clients", value: "10+", color: "text-purple-500" },
    { icon: FiAward, label: "Certifications", value: "5+", color: "text-orange-500" },
];

export default function ProfileOverview() {
    return (
        <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Profile <span className="text-primary">Overview</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A snapshot of my professional journey and achievements
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 text-center group"
                        >
                            <div className={`inline-flex p-4 rounded-full bg-white dark:bg-slate-900 ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
