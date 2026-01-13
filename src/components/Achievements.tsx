"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FiAward, FiCheckCircle, FiExternalLink } from "react-icons/fi";
import { SectionHeader } from "@/components/ui/SectionHeader";

const certifications = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        color: "bg-orange-500"
    },
    {
        title: "IBM Data Science Professional",
        issuer: "IBM",
        date: "2023",
        color: "bg-blue-600"
    },
    {
        title: "Palo Alto Networks Cybersecurity",
        issuer: "Palo Alto Networks",
        date: "2023",
        color: "bg-red-500"
    },
    {
        title: "Full Stack Web Development",
        issuer: "Udemy",
        date: "2022",
        color: "bg-purple-500"
    }
];

export default function Achievements() {
    return (
        <section className="py-12 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
            <div className="container px-6 md:px-12 max-w-7xl mx-auto">
                <SectionHeader
                    title="Certifications"
                    subtitle="Continuous learning and professional validation."
                />

                <Swiper
                    spaceBetween={24}
                    slidesPerView={1}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Autoplay]}
                    className="w-full py-4"
                >
                    {certifications.map((cert, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            <div className="h-full flex flex-col rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                                {/* Image Placeholder */}
                                <div className={`h-32 w-full ${cert.color} relative flex items-center justify-center`}>
                                    <FiAward className="text-white w-12 h-12 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-black/10" />
                                </div>

                                <div className="p-5 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-semibold text-muted-foreground bg-white dark:bg-slate-800 px-2 py-1 rounded-md border border-slate-100 dark:border-slate-700">
                                            {cert.date}
                                        </span>
                                        <FiCheckCircle className="text-green-500" />
                                    </div>

                                    <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>

                                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-medium text-primary cursor-pointer hover:underline">
                                        View Credential <FiExternalLink className="ml-1" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
