"use client";

import { motion } from "framer-motion";
import { FiMessageCircle, FiFileText, FiCode, FiCheckCircle, FiSend } from "react-icons/fi";

const steps = [
    {
        icon: FiMessageCircle,
        title: "Requirement Discussion",
        description: "Understanding your goals, challenges, and project scope",
        color: "from-blue-500 to-cyan-400"
    },
    {
        icon: FiFileText,
        title: "Planning & Design",
        description: "Creating wireframes, architecture, and technical specifications",
        color: "from-indigo-500 to-purple-400"
    },
    {
        icon: FiCode,
        title: "Development",
        description: "Building your solution with clean, maintainable code",
        color: "from-primary to-indigo-400"
    },
    {
        icon: FiCheckCircle,
        title: "Testing & Optimization",
        description: "Rigorous testing, performance tuning, and quality assurance",
        color: "from-emerald-500 to-teal-400"
    },
    {
        icon: FiSend,
        title: "Deployment & Support",
        description: "Launch, monitoring, and ongoing maintenance",
        color: "from-orange-500 to-yellow-400"
    }
];

export default function HowIWork() {
    return (
        <section className="relative py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/2 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/2 rounded-full blur-[120px] -ml-64 -mb-64" />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold text-primary mb-4 uppercase tracking-widest">
                        Process
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-950 dark:text-white">
                        My <span className="text-primary italic">Workflow</span>
                    </h2>
                    <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
                        A structured approach designed to provide clarity and deliver excellence at every stage.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Main Timeline Line */}
                    <div className="absolute top-[50%] left-0 right-0 h-[3px] bg-slate-100 dark:bg-slate-800 hidden lg:block transform -translate-y-1/2" />

                    {/* Animated Progress Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="absolute top-[50%] left-0 right-0 h-[3px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 hidden lg:block origin-left transform -translate-y-1/2"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className={`flex flex-col items-center ${index % 2 === 0 ? 'lg:flex-col' : 'lg:flex-col-reverse'
                                    }`}>

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: index % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.5 }}
                                        className={`w-full max-w-[280px] p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none hover:shadow-2xl transition-all duration-500 relative z-20 ${index % 2 === 0 ? 'lg:mb-12' : 'lg:mt-12'
                                            }`}
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} p-3 text-white mb-4 shadow-lg flex items-center justify-center`}>
                                            <step.icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-primary font-black text-lg opacity-20">0{index + 1}</span>
                                            <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-tight">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </motion.div>

                                    {/* Timeline Node */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.4 }}
                                        className="hidden lg:flex relative items-center justify-center z-30"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-100 dark:border-slate-800 shadow-xl flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                                            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                        </div>

                                        {/* Connector Arrow for mobile-like flow between cards in non-lg */}
                                        <div className={`absolute h-10 w-px bg-primary/20 left-1/2 -translate-x-1/2 ${index % 2 === 0 ? '-top-10' : '-bottom-10'
                                            }`} />
                                    </motion.div>

                                    {/* Mobile Connection Line */}
                                    <div className="lg:hidden absolute left-1/2 top-full h-8 w-px bg-primary/20 -translate-x-1/2 z-0" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
