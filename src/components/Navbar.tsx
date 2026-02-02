"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import RollingText from "@/components/RollingText";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-2 md:top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-0 pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-5xl rounded-full border border-white/20 bg-white/60 backdrop-blur-md shadow-lg dark:bg-black/60 dark:border-white/10 pointer-events-auto"
            >
                <div className="flex h-[56px] md:h-14 items-center justify-between px-4 md:px-6">
                    <Link href="/" className="flex items-center">
                        <RollingText text="REVANTH KUMAR" className="text-[16px] md:text-lg font-bold tracking-wider" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                                        isActive ? "text-primary" : "text-muted-foreground"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 rounded-full bg-primary/10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                </Link>
                            );
                        })}
                        <div className="pl-2 ml-2 border-l border-slate-200 dark:border-slate-800">
                            <ModeToggle />
                        </div>
                    </nav>

                    {/* Mobile Menu Button & Theme Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <ModeToggle />
                        <button
                            className="p-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[70px] left-4 right-4 rounded-xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-xl p-3 md:hidden dark:bg-black/90 dark:border-white/10 pointer-events-auto"
                    >
                        <div className="flex flex-col space-y-[6px]">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center h-[40px] px-4 rounded-xl text-[14px] font-medium transition-colors active:scale-95",
                                        pathname === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-slate-100 dark:hover:bg-slate-800"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
