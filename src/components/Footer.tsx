"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiMail, FiMapPin, FiMessageSquare, FiDownload } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import RollingText from "@/components/RollingText";
import ContactFormModal from "@/components/ContactFormModal";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log("Subscribing:", email);
        setEmail("");
    };

    return (
        <>
            <ContactFormModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
            <footer className="relative bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 transition-colors duration-300 overflow-hidden">
                {/* Grid Background Pattern */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Corner Blobs */}
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        rotate: [0, 360, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px] z-0"
                />
                <motion.div
                    animate={{
                        x: [0, -60, 0],
                        y: [0, -40, 0],
                        rotate: [360, 0, 360],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] z-0"
                />

                {/* Curved Background Gradient */}
                <div className="absolute inset-0 z-0">
                    <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
                        <path
                            d="M0,200 Q360,100 720,200 T1440,200 L1440,800 L0,800 Z"
                            fill="currentColor"
                            className="text-primary/5 dark:text-primary/5"
                        />
                        <path
                            d="M0,350 Q360,250 720,350 T1440,350 L1440,800 L0,800 Z"
                            fill="currentColor"
                            className="text-primary/3 dark:text-primary/3"
                        />
                    </svg>
                </div>

                {/* Integrated CTA Section */}
                <div className="relative z-10 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-12 border-b border-slate-200/50 dark:border-slate-800/50">
                    <div className="container mx-auto max-w-4xl text-center space-y-4 md:space-y-6">
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Ready to build something <span className="text-primary">extraordinary?</span>
                        </h2>
                        <p className="text-muted-foreground text-xs md:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
                            Let's collaborate and bring your ideas to life with cutting-edge technology.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 md:gap-4">
                            <Button
                                size="lg"
                                onClick={() => setIsContactModalOpen(true)}
                                className="w-full sm:w-auto rounded-lg md:rounded-full px-5 md:px-8 h-10 md:h-12 text-xs md:text-sm lg:text-base shadow-lg shadow-primary/20 hover:shadow-primary/30"
                            >
                                <FiMessageSquare className="mr-2" size={16} /> Start a Project
                            </Button>
                            <a href="/RevanthSDE.pdf" download className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="w-full rounded-lg md:rounded-full px-5 md:px-8 h-10 md:h-12 text-xs md:text-sm lg:text-base border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-white">
                                    <FiDownload className="mr-2" size={16} /> Download Resume
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 py-6 md:py-8 lg:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-12">

                        {/* Brand Column */}
                        <div className="md:col-span-5 space-y-3 md:space-y-4 text-center md:text-left">
                            <Link href="/" className="inline-block group">
                                <RollingText text="REVANTH KUMAR" className="text-lg md:text-xl lg:text-2xl font-bold tracking-wider" />
                            </Link>
                            <p className="text-slate-600 dark:text-slate-400 text-[11px] md:text-[13px] lg:text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                                Full Stack MERN Developer & AI Engineer building scalable web applications and intelligent systems.
                            </p>
                            <div className="flex flex-col space-y-2 md:space-y-3 text-[11px] md:text-[13px] lg:text-sm text-slate-600 dark:text-slate-400 items-center md:items-start">
                                <div className="flex items-center gap-2">
                                    <FiMapPin className="text-primary flex-shrink-0" size={16} />
                                    <span>Andhra Pradesh, India</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FiMail className="text-primary flex-shrink-0" size={16} />
                                    <a href="mailto:revanth.kumar4466@gmail.com" className="hover:text-primary dark:hover:text-white transition-colors break-all">revanth.kumar4466@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="md:col-span-3 text-center md:text-left">
                            <h3 className="font-bold text-slate-900 dark:text-white text-xs md:text-sm mb-3 md:mb-4">Quick Links</h3>
                            <ul className="space-y-2 md:space-y-2 text-[11px] md:text-xs lg:text-sm text-slate-600 dark:text-slate-400 flex flex-col items-center md:items-start">
                                <li><Link href="/" className="hover:text-primary transition-colors py-1 block">Home</Link></li>
                                <li><Link href="/about" className="hover:text-primary transition-colors py-1 block">About</Link></li>
                                <li><Link href="/projects" className="hover:text-primary transition-colors py-1 block">Projects</Link></li>
                                <li><Link href="/services" className="hover:text-primary transition-colors py-1 block">Services</Link></li>
                                <li><Link href="/blogs" className="hover:text-primary transition-colors py-1 block">Blogs</Link></li>
                                <li><Link href="/contact" className="hover:text-primary transition-colors py-1 block">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Social Connect & Subscribe */}
                        <div className="md:col-span-4 text-center md:text-left">
                            <h3 className="font-bold text-slate-900 dark:text-white text-xs md:text-sm mb-3 md:mb-4">Let's Connect</h3>

                            {/* Social Icons */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mb-5 md:mb-6">
                                <a href="https://www.linkedin.com/in/revanthkumar66/" target="_blank" rel="noopener noreferrer" className="p-2 md:p-2.5 rounded-lg bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm">
                                    <FiLinkedin size={18} className="md:w-[18px] md:h-[18px]" />
                                </a>
                                <a href="https://github.com/RevanthKumar66" target="_blank" rel="noopener noreferrer" className="p-2 md:p-2.5 rounded-lg bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm">
                                    <FiGithub size={18} className="md:w-[18px] md:h-[18px]" />
                                </a>
                                <a href="https://www.instagram.com/revanth.kumar_?igsh=MWJxeDdlZDN5bXBrMA==" target="_blank" rel="noopener noreferrer" className="p-2 md:p-2.5 rounded-lg bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm">
                                    <FiInstagram size={18} className="md:w-[18px] md:h-[18px]" />
                                </a>
                                <a href="https://x.com/Revanth_Kumar46/" target="_blank" rel="noopener noreferrer" className="p-2 md:p-2.5 rounded-lg bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm">
                                    <FiTwitter size={18} className="md:w-[18px] md:h-[18px]" />
                                </a>
                                <a href="https://wa.me/918978391962" target="_blank" rel="noopener noreferrer" className="p-2 md:p-2.5 rounded-lg bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 shadow-sm">
                                    <FaWhatsapp size={18} className="md:w-[18px] md:h-[18px]" />
                                </a>
                            </div>

                            {/* Subscribe Form */}
                            <div className="max-w-xs mx-auto md:max-w-none">
                                <h4 className="text-xs md:text-sm font-semibold text-slate-900 dark:text-white mb-2 md:mb-3">Subscribe to Newsletter</h4>
                                <form onSubmit={handleSubscribe} className="flex gap-1.5 md:gap-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        className="flex-1 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-[13px] lg:text-sm rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 h-9 md:h-[40px]"
                                    />
                                    <Button type="submit" size="sm" className="rounded-lg px-3 md:px-4 h-9 md:h-[40px] text-xs md:text-[13px] lg:text-sm">
                                        Subscribe
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="pt-6 md:pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center text-[10px] md:text-xs text-slate-500 dark:text-slate-500 gap-3 md:gap-0">
                        <p>&copy; {new Date().getFullYear()} Revanth Kumar. All rights reserved.</p>
                        <div className="flex gap-4 md:gap-6">
                            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
