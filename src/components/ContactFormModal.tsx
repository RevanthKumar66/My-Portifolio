"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiPhone, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const services = [
    "Web Development",
    "AI Solutions",
    "Data Science",
    "MERN Stack",
    "API Development",
    "Other"
];

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        service: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log("Form submitted:", formData);

        // Reset form
        setFormData({
            fullName: "",
            email: "",
            mobile: "",
            service: "",
            message: ""
        });

        setIsSubmitting(false);
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                        >
                            {/* Header */}
                            <div className="relative bg-gradient-to-r from-primary/10 to-indigo-500/10 px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                                <button
                                    onClick={onClose}
                                    className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
                                >
                                    <FiX className="w-4 h-4" />
                                </button>
                                <h2 className="text-xl font-bold text-foreground">Start a Project</h2>
                                <p className="text-xs text-muted-foreground mt-0.5">Let's build something amazing together</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6">
                                {/* Two Column Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullName" className="block text-xs font-medium text-foreground mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    {/* Mobile */}
                                    <div>
                                        <label htmlFor="mobile" className="block text-xs font-medium text-foreground mb-1">
                                            Mobile <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="mobile"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    {/* Service Type */}
                                    <div>
                                        <label htmlFor="service" className="block text-xs font-medium text-foreground mb-1">
                                            Service <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                        >
                                            <option value="">Select service</option>
                                            {services.map((service) => (
                                                <option key={service} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Message - Full Width */}
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={2}
                                        className="w-full px-3 py-2 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                {/* Buttons Row */}
                                <div className="flex items-center gap-3">
                                    {/* Send Button */}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 rounded-lg h-9 text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="animate-spin mr-1.5">⏳</span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <FiSend className="mr-1.5 w-3.5 h-3.5" />
                                                Send
                                            </>
                                        )}
                                    </Button>

                                    {/* Direct Contact */}
                                    <a
                                        href="tel:+918978391962"
                                        className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300"
                                    >
                                        <FiPhone className="w-3.5 h-3.5" />
                                        <span className="text-xs font-medium">Call</span>
                                    </a>
                                    <a
                                        href="https://wa.me/918978391962"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-300"
                                    >
                                        <FaWhatsapp className="w-3.5 h-3.5" />
                                        <span className="text-xs font-medium">WhatsApp</span>
                                    </a>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
