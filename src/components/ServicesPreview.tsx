"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiCpu, FiBarChart2, FiLayers, FiGlobe, FiCloud } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
    {
        title: "Web Development",
        description: "Responsive, high-performance web applications using modern technologies.",
        icon: <FiCode className="w-6 h-6" />,
    },
    {
        title: "AI Solutions",
        description: "Intelligent chatbots and AI-driven systems to automate processes.",
        icon: <FiCpu className="w-6 h-6" />,
    },
    {
        title: "Data Science",
        description: "Actionable insights from complex datasets using advanced analytics.",
        icon: <FiBarChart2 className="w-6 h-6" />,
    },
    {
        title: "MERN Stack",
        description: "Robust full-stack web applications with the modern MERN stack.",
        icon: <FiLayers className="w-6 h-6" />,
    },
    {
        title: "API Development",
        description: "Secure, high-performance RESTful APIs for seamless integrations.",
        icon: <FiGlobe className="w-6 h-6" />,
    },
    {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and modern deployment pipelines.",
        icon: <FiCloud className="w-6 h-6" />,
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
                            className="group"
                        >
                            <div className="h-full p-8 rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/40 dark:border-white/5 transition-all duration-500 hover:bg-white/80 dark:hover:bg-slate-800/60 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 flex flex-col items-center text-center">
                                {/* Icon */}
                                <div className="mb-6 p-4 rounded-2xl bg-primary/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="mt-8 w-full border-t border-slate-100 dark:border-white/5 pt-6">
                                    <Link href="/services" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all">
                                        Learn More <FiArrowRight className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
