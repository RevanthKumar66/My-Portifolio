"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";

const services = [
    {
        title: "Web Development",
        description: "Responsive, high-performance web applications.",
        image: "/WebDevelopment.jpg",
    },
    {
        title: "AI Solutions",
        description: "Intelligent chatbots and AI-driven systems.",
        image: "/AI-Solutions1.jpg",
    },
    {
        title: "Data Science",
        description: "Actionable insights from complex datasets.",
        image: "/DataScience.jpg",
    },
    {
        title: "MERN Stack",
        description: "Full-stack web applications with MERN.",
        image: "/MERN-Stack.jpg",
    },
    {
        title: "API Development",
        description: "Secure RESTful APIs for integrations.",
        image: "/APIDevelopment.jpg",
    },
    {
        title: "Data Analysis",
        description: "Transform data into insights.",
        image: "/DataScience2.jpg",
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
};

export default function ServicesPreview() {
    return (
        <section className="relative py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-6 md:px-12 max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title="Expert Solutions"
                    subtitle="Technical services designed to help your business thrive."
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
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
                            <div className="relative h-full w-full rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-2 shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 z-10">
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
                                        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug mb-2 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                                            {service.description}
                                        </p>

                                        {/* Compact CTA - Always visible but highlighted on hover */}
                                        <Link href="/services" className="inline-flex items-center text-xs font-semibold text-primary opacity-70 group-hover:opacity-100 hover:gap-2 transition-all">
                                            Learn More <FiArrowRight className="ml-1 w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Services Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <Link href="/services">
                        <Button className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30">
                            View All Services <FiArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}


