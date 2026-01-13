"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";

const certificates = [
    {
        title: "AWS Cloud Foundations",
        images: [
            "/My-Certificates/aws-academy-graduate-cloud-foundations-training-bad.png",
            "/My-Certificates/AWS-Cloud-Foundations-certificate.png"
        ],
        issuer: "AWS Academy",
        link: "#",
        hasCarousel: true
    },
    {
        title: "AWS Data Engineering",
        images: [
            "/My-Certificates/aws-academy-graduate-data-engineering-training-badg.png",
            "/My-Certificates/AWS=Data-Engineering-Certificate.png"
        ],
        issuer: "AWS Academy",
        link: "#",
        hasCarousel: true
    },
    {
        title: "Machine Learning with Python",
        images: ["/My-Certificates/Codetantra-ML-Certificate.jpeg"],
        issuer: "CodeTantra",
        link: "#",
        hasCarousel: false
    },
    {
        title: "CyberSecurity Fundamentals",
        images: ["/My-Certificates/CyberSecurity-Fundamentals.png"],
        issuer: "Industry Certification",
        link: "#",
        hasCarousel: false
    },
    {
        title: "Generative AI For Everyone",
        images: ["/My-Certificates/Generative-AI-For-Everyone.png"],
        issuer: "DeepLearning.AI",
        link: "#",
        hasCarousel: false
    },
    {
        title: "Python Basic Certificate",
        images: ["/My-Certificates/Hackerrank-PythonBasic-Certificate.jpeg"],
        issuer: "HackerRank",
        link: "#",
        hasCarousel: false
    },
    {
        title: "Infosys AI Certificate",
        images: ["/My-Certificates/Infosys-AI-Certificate.jpeg"],
        issuer: "Infosys Springboard",
        link: "#",
        hasCarousel: false
    },
    {
        title: "NPTEL IoT Certificate",
        images: ["/My-Certificates/NPTEL-IOT-Certificate.jpeg"],
        issuer: "NPTEL",
        link: "#",
        hasCarousel: false
    },
    {
        title: "Joy of Computing with Python",
        images: ["/My-Certificates/NPTEL-JoyOFComputingWithPython=Certificate.png"],
        issuer: "NPTEL",
        link: "#",
        hasCarousel: false
    },
    {
        title: "Build AI Apps with Gemini",
        images: ["/My-Certificates/build-real-world-ai-applications-with-gemini-and-im.png"],
        issuer: "Google Cloud",
        link: "#",
        hasCarousel: false
    },
    {
        title: "GenAI with Gemini & Streamlit",
        images: ["/My-Certificates/develop-genai-apps-with-gemini-and-streamlit-skill-.png"],
        issuer: "Google Cloud",
        link: "#",
        hasCarousel: false
    },
    {
        title: "Prompt Design in Vertex AI",
        images: ["/My-Certificates/prompt-design-in-vertex-ai-skill-badge.png"],
        issuer: "Google Cloud",
        link: "#",
        hasCarousel: false
    }
];

function CertificateCard({ cert, index }: { cert: typeof certificates[0], index: number }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (cert.hasCarousel) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % cert.images.length);
            }, 8000); // 8 seconds

            return () => clearInterval(interval);
        }
    }, [cert.hasCarousel, cert.images.length]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex-shrink-0 w-80 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
        >
            {/* Certificate Image with Carousel */}
            <div className="relative h-48 bg-white dark:bg-slate-900 overflow-hidden">
                {cert.images.map((image, imgIdx) => (
                    <motion.div
                        key={imgIdx}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: cert.hasCarousel ? (currentImageIndex === imgIdx ? 1 : 0) : 1,
                            scale: cert.hasCarousel ? (currentImageIndex === imgIdx ? 1 : 1.1) : 1
                        }}
                        transition={{ duration: 1 }}
                        className={cert.hasCarousel ? "absolute inset-0" : ""}
                    >
                        <Image
                            src={image}
                            alt={`${cert.title} ${imgIdx + 1}`}
                            fill
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                            sizes="320px"
                        />
                    </motion.div>
                ))}

                {/* Carousel Indicators for AWS certs */}
                {cert.hasCarousel && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {cert.images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'bg-primary w-4' : 'bg-slate-400'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Certificate Info */}
            <div className="p-4">
                <h3 className="text-base font-bold mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                    {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{cert.issuer}</p>

                <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                    View Certificate <FiExternalLink className="w-3 h-3" />
                </a>
            </div>
        </motion.div>
    );
}

export default function CertificationsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-12 md:py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        <span className="text-primary">Certifications</span>
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                        Professional certifications and skill achievements
                    </p>
                </motion.div>

                {/* Scrollable Container with Navigation */}
                <div className="relative">
                    {/* Left Navigation Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                        aria-label="Scroll left"
                    >
                        <FiChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Right Navigation Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                        aria-label="Scroll right"
                    >
                        <FiChevronRight className="w-5 h-5" />
                    </button>

                    {/* Certificates Scroll Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {certificates.map((cert, index) => (
                            <CertificateCard key={index} cert={cert} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
}
