"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward } from "react-icons/fi";
import { useState, useEffect } from "react";

const achievement = {
    title: "1st Prize - Hackathon Coding Exam",
    event: "42learn AI/ML & Data Science Internship",
    description: "Excited to announce that I've won the 1st prize in the Hackathon coding exam! This achievement marks the successful completion of a 3-week AI/ML and Data Science internship with 42learn, hosted at my college. The experience was a deep dive into the world of Innovation and Technology, pushing the boundaries of my Coding Skills. Grateful for this opportunity and looking forward to applying these learnings in my future endeavors! 🚀🏅",
    images: [
        "/My-Gallery/achievment1.jpeg",
        "/My-Gallery/achievment2.jpeg"
    ]
};

export default function AchievementsSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % achievement.images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        <span className="text-primary">Achievements</span>
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                        Recognition and milestones in my journey
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg">
                        {/* Two Column Grid: 65% / 35% with Equal Heights */}
                        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6">
                            {/* Left Column - 65% */}
                            <div className="flex flex-col justify-between space-y-4">
                                {/* Header */}
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                                        <FiAward className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                                        <p className="text-sm text-primary font-semibold">{achievement.event}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="flex-1">
                                    <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                                        {achievement.description}
                                    </p>
                                </div>

                                {/* Hashtags */}
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                                        #Innovation
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                                        #Technology
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                                        #CodingSkills
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                                        #AI/ML
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                                        #DataScience
                                    </span>
                                </div>
                            </div>

                            {/* Right Column - 35% - Vertical Portrait Image Carousel */}
                            <div className="flex flex-col justify-center items-center">
                                <div className="relative w-48 aspect-[3/4] overflow-hidden border-3 border-white dark:border-slate-700 shadow-lg rounded-lg">
                                    {achievement.images.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: currentImageIndex === index ? 1 : 0,
                                                scale: currentImageIndex === index ? 1 : 1.1
                                            }}
                                            transition={{ duration: 1 }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={image}
                                                alt={`Achievement ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes="192px"
                                            />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Carousel Indicators */}
                                <div className="flex justify-center gap-2 mt-3">
                                    {achievement.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentImageIndex === index
                                                    ? 'bg-primary w-4'
                                                    : 'bg-slate-300 dark:bg-slate-600'
                                                }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
