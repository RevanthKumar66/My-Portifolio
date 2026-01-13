"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const services = [
    {
        title: "Full-Stack Web Development",
        description: "End-to-end web applications using MERN stack with scalable architecture and modern best practices.",
        image: "/Service-page-images/FullstackDevelopment.png"
    },
    {
        title: "Frontend Development",
        description: "Responsive, performant user interfaces with React, Next.js, and modern CSS frameworks.",
        image: "/Service-page-images/FrontendDevelopment.png"
    },
    {
        title: "Backend & API Development",
        description: "Robust REST APIs and server-side logic with Node.js, Express, and database integration.",
        image: "/Service-page-images/BackendDevelopment.png"
    },
    {
        title: "AI Chatbot Development",
        description: "Intelligent conversational AI powered by NLP and machine learning for customer engagement.",
        image: "/Service-page-images/AIChatbotDevelopment.png"
    },
    {
        title: "Data Science & ML",
        description: "Predictive models, data analysis, and machine learning solutions for business insights.",
        image: "/Service-page-images/DataScience.png"
    },
    {
        title: "Data Analysis & Visualization",
        description: "Transform raw data into actionable insights with interactive dashboards and reports.",
        image: "/Service-page-images/DataAnalysis.png"
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
                            className="glass-card overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 bg-gradient-to-br from-primary/5 to-indigo-500/5 p-6 flex items-center justify-center overflow-hidden">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                    {service.description}
                                </p>

                                <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                                    Learn More
                                    <FiArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
