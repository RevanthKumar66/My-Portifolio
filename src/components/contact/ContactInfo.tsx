"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiDownload } from "react-icons/fi";

const contactDetails = [
    {
        icon: FiMail,
        label: "Email",
        value: "revanth.kumar4466@gmail.com",
        href: "mailto:revanth.kumar4466@gmail.com"
    },
    {
        icon: FiPhone,
        label: "Phone",
        value: "+91 8978391962",
        href: "tel:+918978391962"
    },
    {
        icon: FiMapPin,
        label: "Location",
        value: "Andhra Pradesh, India",
        href: "#"
    }
];

export default function ContactInfo() {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {contactDetails.map((detail, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 group"
                        >
                            <div className="p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <detail.icon className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{detail.label}</p>
                                <a
                                    href={detail.href}
                                    className="text-lg font-semibold hover:text-primary transition-colors block"
                                    target={detail.href.startsWith('http') ? "_blank" : undefined}
                                    rel={detail.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                >
                                    {detail.value}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
