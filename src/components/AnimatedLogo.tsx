"use client";

import { motion } from "framer-motion";

interface AnimatedLogoProps {
    className?: string;
    fullName?: boolean; // If true, shows "REVANTH KUMAR", if false shows "REVANTH"
}

export default function AnimatedLogo({ className = "", fullName = true }: AnimatedLogoProps) {
    const name = fullName ? "REVANTH KUMAR" : "REVANTH";

    // Split into individual letters while preserving the space
    const letters = name.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 10,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.span
            className={`font-logo font-extrabold inline-flex items-center gap-[0.05em] ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="inline-block hover:text-primary/80 transition-colors duration-200 hover:scale-110"
                    style={{ display: letter === " " ? "inline" : "inline-block" }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
}
