"use client";

import { motion } from "framer-motion";
import React from "react";

interface RollingTextProps {
    text: string;
    className?: string;
}

export default function RollingText({ text, className = "" }: RollingTextProps) {
    const letters = text.toUpperCase().split("");

    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className={`relative overflow-hidden cursor-pointer flex whitespace-pre gap-[0.05em] ${className}`}
        >
            {letters.map((letter, index) => (
                <div
                    key={index}
                    className="relative flex flex-col overflow-hidden"
                    style={{ height: "1.2em" }}
                >
                    {/* First Layer */}
                    <motion.span
                        className="inline-block"
                        transition={{
                            duration: 0.5,
                            ease: [0.76, 0, 0.24, 1],
                            delay: index * 0.02,
                        }}
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>

                    {/* Second Layer */}
                    <motion.span
                        className="absolute top-full left-0 inline-block text-primary"
                        transition={{
                            duration: 0.5,
                            ease: [0.76, 0, 0.24, 1],
                            delay: index * 0.02,
                        }}
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                </div>
            ))}
        </motion.div>
    );
}
