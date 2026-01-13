"use client";

import { motion } from "framer-motion";
import { FiAward, FiStar, FiTarget } from "react-icons/fi";

const achievements = [
    {
        title: "AI/ML Certification",
        issuer: "Coursera - Stanford University",
        date: "2024",
        icon: FiAward,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10"
    },
    {
        title: "Full Stack Development",
        issuer: "Udemy - Complete Bootcamp",
        date: "2023",
        icon: FiStar,
        color: "text-green-500",
        bgColor: "bg-green-500/10"
    },
    {
        title: "Hackathon Winner",
        issuer: "College Tech Fest 2023",
        date: "2023",
        icon: FiTarget,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10"
    },
    {
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        icon: FiAward,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10"
    },
    {
        title: "React Advanced Patterns",
        issuer: "Frontend Masters",
        date: "2024",
        icon: FiStar,
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10"
    },
    {
        title: "Best Project Award",
        issuer: "University Final Year",
        date: "2024",
        icon: FiTarget,
        color: "text-red-500",
        bgColor: "bg-red-500/10"
    }
];

export default function AchievementsCertifications() {
    return (
        <section className="py-16 md:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Achievements & <span className="text-primary">Certifications</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Recognition and continuous learning milestones
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className={`inline-flex p-3 rounded-lg ${achievement.bgColor} ${achievement.color} mb-4 group-hover:scale-110 transition-transform`}>
                                <achievement.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{achievement.issuer}</p>
                            <p className="text-xs text-primary font-semibold">{achievement.date}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
