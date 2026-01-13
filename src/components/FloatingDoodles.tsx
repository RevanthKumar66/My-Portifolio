"use client";

import { motion } from "framer-motion";

export default function FloatingDoodles() {
    // Tech stack sketch-style doodles - simple outlined, black/white based on theme
    const doodles = [
        // Frontend
        { icon: "⚛", x: -200, y: -120, delay: 0, duration: 5, rotate: -10 }, // React symbol
        { icon: "{ }", x: 180, y: -140, delay: 0.5, duration: 5.5, rotate: 10 }, // Code brackets

        // Backend & Database
        { icon: "⟨/⟩", x: -220, y: -20, delay: 0.3, duration: 6, rotate: 15 }, // HTML/Code tag
        { icon: "▭", x: 210, y: -40, delay: 0.8, duration: 5, rotate: -15 }, // Database/Server

        // Tools & API
        { icon: "⚙", x: -180, y: 100, delay: 1, duration: 6.5, rotate: 0 }, // Settings/Tools
        { icon: "⟲", x: 200, y: 120, delay: 1.5, duration: 5, rotate: 20 }, // Refresh/API

        // Cloud & DevOps
        { icon: "☁", x: -190, y: -160, delay: 1.2, duration: 7, rotate: 5 }, // Cloud
        { icon: "⊞", x: 170, y: 140, delay: 0.6, duration: 6, rotate: -10 }, // Container/Docker

        // Code & Terminal
        { icon: "⌘", x: -150, y: -100, delay: 0.9, duration: 5.5, rotate: -5 }, // Command
        { icon: "⌥", x: 150, y: 80, delay: 1.3, duration: 6.5, rotate: 12 }, // Terminal/Alt
    ];

    return (
        <>
            {doodles.map((doodle, index) => (
                <motion.div
                    key={index}
                    className="absolute text-slate-800/20 dark:text-slate-200/15 text-3xl md:text-4xl pointer-events-none select-none font-light"
                    style={{
                        left: `calc(50% + ${doodle.x}px)`,
                        top: `calc(50% + ${doodle.y}px)`,
                        rotate: `${doodle.rotate}deg`,
                        fontWeight: 200,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        scale: [0.5, 1, 1, 0.5],
                        y: [0, -20, -20, 0],
                        rotate: [doodle.rotate, doodle.rotate + 10, doodle.rotate - 10, doodle.rotate],
                    }}
                    transition={{
                        duration: doodle.duration,
                        delay: doodle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {doodle.icon}
                </motion.div>
            ))}
        </>
    );
}
