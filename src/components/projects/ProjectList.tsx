"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

interface Project {
    title: string;
    description: string;
    highlights: string[];
    tech: string[];
    image: string;
    github: string;
    link?: string;
    isLive: boolean;
}

interface Category {
    domain: string;
    projects: Project[];
}

const projectData: Category[] = [
    {
        domain: "Full-Stack Web Development",
        projects: [
            {
                title: "Deepvibe IT Solutions Pvt. Ltd.",
                description: "Official corporate website designed for premium brand positioning. Implements a high-performance MERN stack architecture.",
                highlights: ["Full-Stack MERN Architecture", "Enterprise SEO Strategy", "Optimized Core Web Vitals"],
                tech: ["React.js", "Node.js", "Express", "MongoDB"],
                image: "/WebDevelopment.jpg",
                github: "https://github.com/RevanthKumar66/deepvibe-corporate",
                link: "https://deepvibe.co.in/",
                isLive: true
            },
            {
                title: "Techworth IT Solutions Pvt. Ltd.",
                description: "A modern business platform emphasizing scalable design and professional aesthetics. Features automated inquiry modules.",
                highlights: ["Business Process Automation", "Responsive UI/UX Design", "Custom CMS Integration"],
                tech: ["React.js", "Tailwind CSS", "Node.js"],
                image: "/Service-page-images/FullstackDevelopment.png",
                github: "https://github.com/RevanthKumar66/techworth",
                link: "https://techworth.org.in/",
                isLive: true
            }
        ]
    },
    {
        domain: "AI & Intelligent Systems",
        projects: [
            {
                title: "AI-Assistant",
                description: "A sophisticated generative AI platform built with Gemini API. Capable of complex reasoning and code synthesis.",
                highlights: ["Large Language Model Integration", "Context-Aware Coding Helper", "Automated Content Generator"],
                tech: ["Python", "Flask", "Gemini API"],
                image: "/AI-Solutions1.jpg",
                github: "https://github.com/RevanthKumar66/AI-Assistant",
                isLive: false
            },
            {
                title: "AI Chatbot (Hugging Face Interface)",
                description: "Technical implementation of a transformer-based conversational agent. Simplifies interaction with complex NLP models.",
                highlights: ["Transformer Architecture", "Real-time Inference", "High-Fidelity NLP"],
                tech: ["Python", "Streamlit", "Transformers"],
                image: "/Service-page-images/AIChatbotDevelopment.png",
                github: "https://github.com/RevanthKumar66/AI-Chatbot-Using-Hugging-face-Model",
                isLive: false
            }
        ]
    },
    {
        domain: "Machine Learning & Healthcare",
        projects: [
            {
                title: "Pneumonia Detection",
                description: "Medical imaging system leveraging Convolutional Neural Networks to identify pneumonia patterns in chest X-rays.",
                highlights: ["CNN Architecture", "Automated Image Diagnostics", "Medical Preprocessing"],
                tech: ["Python", "TensorFlow", "OpenCV"],
                image: "/DataScience.jpg",
                github: "https://github.com/RevanthKumar66/Pneumonia-Detection",
                isLive: false
            },
            {
                title: "Respiratory Status Monitor (ICU)",
                description: "Vision-based intelligence designed for critical care environments. Automates the detection of respiratory devices.",
                highlights: ["Object Detection Models", "Real-time Video Analytics", "Patient Safety Protocols"],
                tech: ["Python", "TensorFlow", "OpenCV"],
                image: "/Service-page-images/DataScience.png",
                github: "https://github.com/RevanthKumar66/Respiratory-Monitor-ICU",
                isLive: false
            }
        ]
    },
    {
        domain: "Creative & Data Analytics",
        projects: [
            {
                title: "Amazon Market Trend Analysis",
                description: "Macro-level analysis of e-commerce data focusing on best-seller patterns and genre shifts.",
                highlights: ["BI Dashboard Engineering", "Big Data Mining", "Trend Forecasting"],
                tech: ["Power BI", "Data Visualization", "DAX"],
                image: "/APIDevelopment.jpg",
                github: "https://github.com/RevanthKumar66/Amazon-Best-Book-Seller-Analysis",
                isLive: false
            },
            {
                title: "Image To Sketch Conversion",
                description: "Algorithmic transformation of standard imagery into artistic line-work.",
                highlights: ["Image Processing Algorithms", "Edge Detection", "Streamlit Integration"],
                tech: ["Python", "Streamlit", "OpenCV"],
                image: "/Service-page-images/FrontendDevelopment.png",
                github: "https://github.com/RevanthKumar66/Image-to-Sketch-Conversion-app-using-Streamlit",
                isLive: false
            }
        ]
    }
];

export default function ProjectList() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                {projectData.map((category, catIndex) => (
                    <div key={catIndex} className="mb-24 last:mb-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
                                {category.domain.split(' ').map((word, i) => (
                                    <span key={i} className={i === 0 ? "text-primary" : ""}>
                                        {word}{" "}
                                    </span>
                                ))}
                            </h2>
                            <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {category.projects.map((project, pIndex) => (
                                <motion.div
                                    key={pIndex}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: pIndex * 0.1 }}
                                    className="glass-card overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800"
                                >
                                    <div className="grid md:grid-cols-2 h-full">
                                        {/* Image Section */}
                                        <div className="relative h-64 md:h-full overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-6 flex flex-col justify-between bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                                            <div>
                                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.tech.map((t, i) => (
                                                        <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                                <ul className="space-y-1.5 mb-6">
                                                    {project.highlights.map((h, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                                                            <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                                            <span>{h}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                                                >
                                                    <FiGithub className="w-4 h-4" /> Code
                                                </a>
                                                {project.link && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                                                    >
                                                        <FiExternalLink className="w-4 h-4" /> Live
                                                    </a>
                                                )}
                                                <button className="ml-auto text-primary hover:translate-x-1 transition-transform">
                                                    <FiArrowRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
