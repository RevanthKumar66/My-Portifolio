"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
    {
        question: "Are you open to relocation?",
        answer: "Yes, I am open to relocating for full-time software engineering roles. I am also comfortable with remote or hybrid work arrangements."
    },
    {
        question: "What is your preferred tech stack?",
        answer: "I specialize in the MERN stack (MongoDB, Express, React, Node.js) and Next.js for web development. For AI/ML, I primarily use Python, TensorFlow, and various LLM APIs."
    },
    {
        question: "What is your typical response time?",
        answer: "I usually respond to emails and form inquiries within 12-24 hours. For urgent matters, feel free to reach out via LinkedIn."
    },
    {
        question: "Do you take on freelance projects?",
        answer: "Yes, I periodically take on freelance projects that align with my technical interests in building scalable web apps or intelligent AI agents."
    }
];

export default function ContactFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Quick <span className="text-primary">Info</span></h2>
                    <p className="text-muted-foreground">Common questions about my work and availability.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden group transition-all duration-300 hover:border-primary/50"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-slate-50/50 dark:bg-slate-900/10 hover:bg-white dark:hover:bg-slate-900/30 transition-colors"
                            >
                                <span className="font-bold text-lg md:text-xl pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <FiMinus className="text-primary w-6 h-6 flex-shrink-0" />
                                ) : (
                                    <FiPlus className="text-slate-400 group-hover:text-primary w-6 h-6 flex-shrink-0 transition-colors" />
                                )}
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-muted-foreground leading-relaxed text-lg">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
