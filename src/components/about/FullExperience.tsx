"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiBriefcase } from "react-icons/fi";
import { FaCode, FaBrain, FaDatabase } from "react-icons/fa";
import Image from "next/image";

const experiences = [
    {
        company: "Deepvibe IT Solutions Pvt. Ltd.",
        role: "Full Stack Developer Intern",
        type: "Internship",
        duration: "Jun 2024 - Present",
        location: "Remote",
        logo: "/Deepvibe logo.png",
        techIcon: FaCode,
        techColor: "text-blue-500",
        blobColor: "bg-blue-500/10",
        borderColor: "rgba(59, 130, 246, 0.5)",
        description: "Leading full-stack development projects and implementing AI-powered solutions for enterprise clients.",
        responsibilities: [
            "Developed and maintained scalable web applications using MERN stack",
            "Implemented RESTful APIs and integrated third-party services",
            "Collaborated with cross-functional teams to deliver high-quality products",
            "Optimized application performance and implemented best practices"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "AWS"]
    },
    {
        company: "42Learn",
        role: "Data Science Intern (Academic Internship)",
        type: "Academic Internship",
        duration: "May 2024 – Jul 2024",
        location: "Remote",
        logo: "/42Learn logo.png",
        techIcon: FaDatabase,
        techColor: "text-emerald-500",
        blobColor: "bg-emerald-500/10",
        borderColor: "rgba(16, 185, 129, 0.5)",
        description: "Focused on data analysis, machine learning models, and data visualization.",
        responsibilities: [
            "Analyzed large datasets to extract meaningful insights and patterns",
            "Developed and trained machine learning models for predictive analysis",
            "Created data visualizations and dashboards using Python and tools",
            "Collaborated on data-driven decision-making processes"
        ],
        technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "SQL"]
    },
    {
        company: "CodeTantra",
        role: "Machine Learning Intern (Academic Internship)",
        type: "Academic Internship",
        duration: "Jun 2023 - Jul 2023",
        location: "Remote",
        logo: "/Codetantra logo.png",
        techIcon: FaBrain,
        techColor: "text-purple-500",
        blobColor: "bg-purple-500/10",
        borderColor: "rgba(168, 85, 247, 0.5)",
        description: "Explored machine learning algorithms and implemented AI solutions.",
        responsibilities: [
            "Researched and implemented various ML algorithms for specific use cases",
            "Preprocessed and cleaned data for model training and evaluation",
            "Built and fine-tuned deep learning models using modern frameworks",
            "Documented technical processes and model performance metrics"
        ],
        technologies: ["Python", "TensorFlow", "Keras", "NumPy", "OpenCV"]
    }
];

export default function FullExperience() {
    return (
        <section className="relative py-12 md:py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Decorative Gradients */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-green-500/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Professional <span className="text-primary">Experience</span>
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                        My journey through various roles and responsibilities
                    </p>
                </motion.div>

                <div className="space-y-6 max-w-5xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative p-[1.5px] rounded-xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl"
                        >
                            {/* Animated Border Gradient */}
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                style={{
                                    background: `conic-gradient(from 0deg, transparent 0deg, transparent 300deg, ${exp.borderColor} 360deg)`,
                                }}
                                className="absolute inset-[-200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />

                            <div className="relative z-10 bg-white dark:bg-slate-800 p-5 md:p-6 rounded-[10.5px] h-full overflow-hidden">
                                {/* Decorative Tech Blob - Top Right */}
                                <div className="absolute -top-6 -right-6 w-32 h-32 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                    <motion.div
                                        animate={{
                                            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
                                            rotate: [0, 90, 0]
                                        }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className={`w-full h-full ${exp.blobColor}`}
                                    />
                                </div>

                                {/* Tech Icon Overlay */}
                                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                                    <exp.techIcon className={`w-8 h-8 ${exp.techColor} opacity-20 group-hover:opacity-80 transition-opacity duration-300`} />
                                </div>

                                {/* Header Row */}
                                <div className="relative z-10 flex items-start gap-4 mb-3">
                                    <div className="relative w-12 h-12 rounded-lg bg-white dark:bg-white p-1.5 border border-slate-200 dark:border-slate-300 flex items-center justify-center flex-shrink-0">
                                        <Image
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg md:text-xl font-bold mb-0.5 truncate">{exp.company}</h3>
                                        <p className="text-primary font-semibold text-sm mb-2">{exp.role}</p>
                                        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <FiCalendar className="w-3 h-3" />
                                                {exp.duration}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FiMapPin className="w-3 h-3" />
                                                {exp.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FiBriefcase className="w-3 h-3" />
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="relative z-10">
                                    <p className="text-sm text-muted-foreground mb-3">
                                        {exp.description}
                                    </p>

                                    {/* Responsibilities */}
                                    <div className="mb-3">
                                        <h4 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Key Responsibilities:</h4>
                                        <ul className="grid md:grid-cols-2 gap-1.5">
                                            {exp.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                                                    <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-0.5 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
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
