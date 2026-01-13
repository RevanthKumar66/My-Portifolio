"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
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
        <section className="relative py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/2 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-4 md:px-12 max-w-7xl mx-auto relative z-10">
                <SectionHeader
                    title="Featured Projects"
                    subtitle="A showcase of technical innovation and design excellence."
                    align="center"
                    className="mb-12"
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

                    <div className="overflow-hidden px-4 md:px-4 -mx-4 md:mx-0">
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={16}
                            slidesPerView={'auto'}
                            centeredSlides={true}
                            centeredSlidesBounds={true}
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
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                    centeredSlides: false
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 24,
                                    centeredSlides: false
                                }
                            }}
                            className="w-full pb-12"
                        >
                            {featuredProjects.map((project, index) => (
                                <SwiperSlide key={index} className="!w-[280px] md:!w-full h-full">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="h-[380px] md:h-[400px] w-full relative rounded-2xl md:rounded-3xl overflow-hidden group shadow-lg border border-slate-100 dark:border-slate-900"
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5 md:p-6">
                                            <div className="space-y-2 mb-6">
                                                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                                                    {project.title}
                                                </h3>
                                                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                <Link href={project.isLive ? project.link : "/projects"} target={project.isLive ? "_blank" : "_self"}>
                                                    <Button
                                                        size="sm"
                                                        className="w-full rounded-xl bg-white text-slate-900 hover:bg-primary hover:text-white font-bold py-2 text-xs transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-black/20"
                                                    >
                                                        {project.isLive ? "Live Demo" : "Details"} <FiExternalLink size={12} />
                                                    </Button>
                                                </Link>
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="w-full rounded-xl bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-primary hover:border-primary font-bold py-2 text-xs transition-all flex items-center justify-center gap-1.5"
                                                    >
                                                        GitHub <FiGithub size={12} />
                                                    </Button>
                                                </a>
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

                <div className="mt-8 text-center">
                    <Link href="/projects">
                        <Button variant="link" className="text-primary font-bold text-sm group hover:gap-3 transition-all">
                            View More Projects <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
