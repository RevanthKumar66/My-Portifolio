"use client";

import { motion } from "framer-motion";
import { FiBook, FiAward, FiCalendar } from "react-icons/fi";
import Image from "next/image";
import { useState, useEffect } from "react";

const education = {
    degree: "B.Tech – Artificial Intelligence & Data Science",
    institution: "PACE Institute of Technology and Sciences",
    location: "Ongole, Andhra Pradesh",
    duration: "2021 - 2025",
    grade: "8.15 / 10",
    achievements: [
        "Specialized in AI/ML and Full Stack Development",
        "Led technical team in college tech fest",
        "Published research paper on pneumonia detection",
        "Active member of coding club and hackathons"
    ],
    images: [
        "/My-Gallery/graduation1.jpeg",
        "/My-Gallery/Graduation2.jpeg",
        "/My-Gallery/Graduation3.jpeg"
    ],
    idCards: [
        "/My-Gallery/college-ID-front.jpeg",
        "/My-Gallery/College-ID-back.jpeg"
    ]
};

export default function Education() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % education.images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 md:py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        <span className="text-primary">Education</span>
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                        Academic foundation that shaped my technical expertise
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg">
                        {/* Two Column Grid: 65% / 35% with Equal Heights */}
                        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6">
                            {/* Left Column - 65% */}
                            <div className="flex flex-col justify-between space-y-4">
                                {/* Header with Icon */}
                                <div className="flex items-start gap-2">
                                    <div className="p-1.5 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                                        <FiBook className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg md:text-xl font-bold">{education.degree}</h3>
                                    </div>
                                </div>

                                {/* Institution with ID Badges on Same Line */}
                                <div className="flex items-center gap-3">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <p className="text-base text-primary font-semibold">{education.institution}</p>

                                            {/* ID Card Badges - Inline with College Name */}
                                            <div className="flex gap-1.5">
                                                {education.idCards.map((card, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="relative w-8 h-11 overflow-hidden border-2 border-primary/20 shadow-sm hover:scale-110 transition-transform duration-300"
                                                    >
                                                        <Image
                                                            src={card}
                                                            alt={`ID Card ${idx + 1}`}
                                                            fill
                                                            className="object-cover"
                                                            sizes="32px"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-1">{education.location}</p>
                                    </div>
                                </div>

                                {/* Duration and CGPA Badges */}
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                        <FiCalendar className="w-3.5 h-3.5 text-primary" />
                                        <span className="text-xs font-medium">{education.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                                        <FiAward className="w-3.5 h-3.5 text-primary" />
                                        <span className="text-xs font-semibold text-primary">CGPA: {education.grade}</span>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="border-t border-slate-200 dark:border-slate-700 pt-4 flex-1">
                                    <h4 className="text-sm font-semibold mb-3">Key Achievements</h4>
                                    <ul className="space-y-2">
                                        {education.achievements.map((achievement, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                                                <span className="text-sm text-muted-foreground">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right Column - 35% - Photo Frame Styled Image */}
                            <div className="flex flex-col justify-center items-center">
                                <div className="photo-frame-container">
                                    <div className="relative w-56 aspect-[3/4] overflow-hidden">
                                        {education.images.map((image, index) => (
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
                                                    alt={`Graduation ${index + 1}`}
                                                    fill
                                                    className="object-cover photo-frame-image"
                                                    sizes="224px"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Carousel Indicators */}
                                <div className="flex justify-center gap-2 mt-4">
                                    {education.images.map((_, index) => (
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

            {/* Photo Frame Styling */}
            <style jsx>{`
        .photo-frame-container {
          display: inline-block;
          padding: 40px;
          border-width: 20px;
          border-style: solid;
          border-color: #2F2D2D #434040 #4F4C4C #434040;
          background: #f5f5f5;
          background-image: linear-gradient(#E5E4DF, #CDCDC6);
          box-shadow: inset 0 2px 5px rgba(0,0,0,.6), 0 5px 2px rgba(0,0,0,.1), 0 10px 20px rgba(0,0,0,.8);
          position: relative;
          overflow: hidden;
        }

        .photo-frame-container::before {
          content: "";
          position: absolute;
          top: -175px;
          right: -20%;
          width: 400px;
          height: 400px;
          transform: rotateZ(-40deg);
          background-image: linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,0));
        }

        .photo-frame-image {
          border-width: 2px;
          border-style: solid;
          border-color: #BBBAB4 #C7C7BF #E5E4DF #C7C7BF;
          box-shadow: 0 -1px 1px rgba(0,0,0,.1), 0 1px 1px 1px rgba(255,255,255,.7);
        }
      `}</style>
        </section>
    );
}
