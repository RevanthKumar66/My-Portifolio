"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight, FiArrowRight, FiCode } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";

const featuredProjects = [
    {
        title: "Deepvibe IT Solutions",
        description: "Professional full-stack company website showcasing services, portfolio, and contact capabilities.",
        image: "/WebDevelopment.jpg",
        link: "https://deepvibe.co.in/",
        github: "https://github.com/RevanthKumar66/deepvibe-corporate",
        isLive: true
    },
    {
        title: "AI-Assistant",
        description: "Multi-functional chatbot with conversational responses, code generation, and MCQ generator.",
        image: "/AI-Solutions1.jpg",
        link: "/projects", // Navigate to projects page as it's not a live web app
        github: "https://github.com/RevanthKumar66/AI-Assistant",
        isLive: false
    },
    {
        title: "Pneumonia Detection",
        description: "Deep learning model to classify pneumonia from chest X-ray images with preprocessing & explainability.",
        image: "/DataScience.jpg",
        link: "/projects",
        github: "https://github.com/RevanthKumar66/Pneumonia-Detection",
        isLive: false
    },
    {
        title: "Techworth IT Solutions",
        description: "Modern full-stack business website with service pages, contact forms, and responsive design.",
        image: "/Service-page-images/FullstackDevelopment.png",
        link: "https://techworth.org.in/",
        github: "https://github.com/RevanthKumar66/techworth",
        isLive: true
    }
];

export default function FeaturedProjects() {
    const swiperRef = useRef<any>(null);

    return (
        <section className="relative py-12 md:py-16 lg:py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/2 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-4 md:px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title="Featured Projects"
                    subtitle="A showcase of technical innovation and design excellence."
                    align="center"
                    className="mb-8 md:mb-12"
                />

                <div className="relative group/nav">
                    {/* Navigation Buttons - Hidden on Mobile */}
                    <div className="hidden md:block absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-30 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-md transform hover:scale-110 active:scale-90"
                            aria-label="Previous project"
                        >
                            <FiChevronLeft className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="hidden md:block absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-30 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-md transform hover:scale-110 active:scale-90"
                            aria-label="Next project"
                        >
                            <FiChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="overflow-hidden px-4 md:px-12 -mx-4 md:mx-0">
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={'auto'}
                            centeredSlides={false}
                            loop={false}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                                el: '.swiper-custom-pagination'
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 16
                                },
                                640: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 16
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 24
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 24
                                }
                            }}
                            className="w-full pb-12"
                        >
                            {featuredProjects.map((project, index) => (
                                <SwiperSlide key={index} className="h-full">
                                    <motion.div
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        className="h-[320px] md:h-[380px] w-full relative p-[1.5px] rounded-lg overflow-hidden group"
                                    >
                                        {/* Animated Border Gradient */}
                                        <motion.div
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                            style={{
                                                background: `conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(var(--primary-rgb, 59, 130, 246), 0.6) 360deg)`,
                                            }}
                                            className="absolute inset-[-200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        />

                                        {/* Card Background with subtle border */}
                                        <div className="relative h-full w-full rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-3 shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 z-10">
                                            {/* Hover Gradient Overlay */}
                                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                            {/* Card Structure matching the reference: Padded inner frame */}
                                            <div className="flex flex-col h-full relative z-10">
                                                {/* Image Container - Inner rounded box with 1:2 ratio (4px) */}
                                                <div className="relative h-[160px] md:h-[200px] w-full rounded overflow-hidden bg-slate-100 dark:bg-slate-800 group-hover:ring-2 group-hover:ring-primary/20 transition-all duration-500">
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-105"
                                                    />
                                                    {/* Image Overlay on Hover */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                </div>

                                                {/* Content */}
                                                <div className="flex flex-col flex-1 pt-3 md:pt-4 px-2">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <h3 className="text-sm md:text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300 line-clamp-1">
                                                            {project.title}
                                                        </h3>
                                                        {project.isLive && (
                                                            <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] group-hover:shadow-[0_0_12px_rgba(34,197,94,0.8)] transition-shadow" title="Live Project" />
                                                        )}
                                                    </div>

                                                    <p className="text-slate-500 dark:text-slate-400 text-[11px] md:text-xs leading-relaxed line-clamp-2 mb-auto group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                                                        {project.description}
                                                    </p>

                                                    {/* Bottom Actions - Pill shaped like "Follow +" */}
                                                    <div className="mt-2 md:mt-4 flex items-center justify-between gap-2 md:gap-3">
                                                        <div className="hidden sm:flex -space-x-2 opacity-70 group-hover:opacity-100 transition-opacity">
                                                            <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-slate-50 dark:bg-slate-800 border-2 border-white dark:border-slate-900 flex items-center justify-center text-slate-400 z-10 group-hover:scale-110 transition-transform">
                                                                <FiCode size={10} className="md:w-3 md:h-3" />
                                                            </div>
                                                            <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-slate-100 dark:bg-slate-700 border-2 border-white dark:border-slate-900 flex items-center justify-center text-slate-500 group-hover:scale-110 transition-transform">
                                                                <FiExternalLink size={10} className="md:w-3 md:h-3" />
                                                            </div>
                                                        </div>

                                                        <div className="flex gap-1.5 md:gap-2">
                                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                                <button className="h-7 md:h-9 w-7 md:w-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-110 transition-all">
                                                                    <FiGithub className="w-3 md:w-4 h-3 md:h-4" />
                                                                </button>
                                                            </a>
                                                            <Link href={project.isLive ? project.link : "/projects"} target={project.isLive ? "_blank" : "_self"}>
                                                                <button className="h-7 md:h-9 px-3 md:px-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] md:text-xs font-bold hover:opacity-90 hover:scale-105 transition-all shadow-md flex items-center gap-1 group-hover:shadow-lg">
                                                                    Visit <FiArrowRight className="w-2.5 md:w-3 h-2.5 md:h-3 group-hover:translate-x-0.5 transition-transform" />
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Pagination */}
                        <div className="swiper-custom-pagination flex justify-center gap-2 mt-4 md:hidden" />
                    </div>
                </div>

                <div className="mt-6 md:mt-8 text-center">
                    <Link href="/projects">
                        <Button variant="link" className="text-primary font-bold text-xs md:text-sm group hover:gap-3 transition-all">
                            View More Projects <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
