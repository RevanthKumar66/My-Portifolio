"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const services = [
    {
        title: "Full-Stack Web Development",
        description: "End-to-end web applications using MERN stack.",
        image: "/WebDevelopment.jpg"
    },
    {
        title: "AI Chatbot Development",
        description: "Intelligent conversational AI powered by NLP.",
        image: "/AI-Solutions1.jpg"
    },
    {
        title: "Data Science & ML",
        description: "Predictive models and machine learning solutions.",
        image: "/DataScience.jpg"
    },
    {
        title: "MERN Stack Development",
        description: "Full-stack applications with MERN technologies.",
        image: "/MERN-Stack.jpg"
    },
    {
        title: "API Development",
        description: "Secure RESTful APIs for data exchange.",
        image: "/APIDevelopment.jpg"
    },
    {
        title: "Data Analysis & Visualization",
        description: "Transform data into actionable insights.",
        image: "/DataScience2.jpg"
    }
];

export default function CoreServicesGrid() {
    return (
        <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Core <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your needs
                    </p>
                </motion.div>

                {/* 2x3 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="relative p-[1.5px] rounded-lg overflow-hidden group"
                        >
                            {/* Animated Border Gradient */}
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                style={{
                                    background: `conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(var(--primary-rgb, 59, 130, 246), 0.6) 360deg)`,
                                }}
                                className="absolute inset-[-200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />

                            {/* Card Background */}
                            <div className="relative h-full w-full rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 z-10">
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Card Structure */}
                                <div className="flex flex-col h-full relative z-10">
                                    {/* Image Container - Full width, minimal side padding */}
                                    <div className="relative h-[220px] w-full rounded overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-6 group-hover:ring-2 group-hover:ring-primary/20 transition-all duration-500">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>
                                    </div>

                                    {/* Compact Content Section */}
                                    <div className="flex flex-col pt-3 px-2">
                                        <h3 className="text-sm font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="text-xs text-muted-foreground leading-snug mb-2 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                                            {service.description}
                                        </p>

                                        {/* Compact CTA - Always visible but highlighted on hover */}
                                        <button className="inline-flex items-center gap-2 text-xs font-semibold text-primary opacity-70 group-hover:opacity-100 hover:gap-3 transition-all">
                                            Learn More
                                            <FiArrowRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


