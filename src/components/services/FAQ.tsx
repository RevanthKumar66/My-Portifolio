"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
    {
        question: "What tech stack do you use?",
        answer: "I primarily work with the MERN stack (MongoDB, Express, React, Node.js) for web development, Python for AI/ML and data science, and modern tools like Next.js, TypeScript, and Tailwind CSS. I choose technologies based on project requirements to ensure the best results."
    },
    {
        question: "Do you provide post-deployment support?",
        answer: "Yes! I offer ongoing maintenance, bug fixes, updates, and technical support after deployment. We can discuss a support plan that fits your needs, whether it's a one-time handoff with documentation or long-term partnership."
    },
    {
        question: "Can you work remotely?",
        answer: "Absolutely! I work remotely with clients worldwide. I use modern collaboration tools like Slack, Zoom, and project management platforms to ensure smooth communication and project tracking throughout the development process."
    },
    {
        question: "How do we get started?",
        answer: "Simply reach out through the contact form or email. We'll schedule a discovery call to discuss your project requirements, timeline, and budget. After that, I'll provide a detailed proposal and we can begin the development process."
    },
    {
        question: "What is your typical project timeline?",
        answer: "Timelines vary based on project complexity. A simple website might take 2-3 weeks, while a full-stack application could take 2-3 months. I provide detailed timelines during the planning phase and keep you updated throughout development."
    },
    {
        question: "Do you work on existing projects?",
        answer: "Yes! I can help with bug fixes, feature additions, performance optimization, or complete redesigns of existing applications. I'll review your codebase and provide recommendations for improvements."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Quick answers to common questions
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                            >
                                <h3 className="text-base font-bold pr-4">{faq.question}</h3>
                                <FiChevronDown
                                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
