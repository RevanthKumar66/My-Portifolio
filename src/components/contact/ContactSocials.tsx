"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const socials = [
    {
        icon: FiGithub,
        label: "GitHub",
        href: "https://github.com/RevanthKumar66",
        color: "hover:bg-[#333] hover:text-white"
    },
    {
        icon: FiLinkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/revanthkumar66/",
        color: "hover:bg-[#0077b5] hover:text-white"
    },
    {
        icon: FiTwitter,
        label: "Twitter / X",
        href: "https://twitter.com/revanth", // Placeholder
        color: "hover:bg-black hover:text-white"
    },
    {
        icon: FiMail,
        label: "Email Me",
        href: "mailto:revanth.kumar4466@gmail.com",
        color: "hover:bg-primary hover:text-white"
    }
];

export default function ContactSocials() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div>
                        <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 underline underline-offset-8 decoration-primary/30">
                            Find me elsewhere
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {socials.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={social.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5 }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 ${social.color} group relative overflow-hidden`}
                            >
                                <social.icon className="w-8 h-8 transition-transform group-hover:scale-110" />
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    {social.label.split(' ')[0]}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
