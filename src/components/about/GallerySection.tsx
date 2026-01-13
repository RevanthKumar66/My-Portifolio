"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Gallery images with their actual aspect ratios
const galleryImages = [
    { src: "/My-Gallery/pic1.jpeg", type: "landscape" }, // Landscape
    { src: "/My-Gallery/pic2.jpeg", type: "portrait" }, // Portrait
    { src: "/My-Gallery/pic3.jpeg", type: "landscape" }, // Landscape
    { src: "/My-Gallery/Graduation4.jpeg", type: "portrait" }, // Portrait
    { src: "/My-Gallery/Graduation5.jpeg", type: "portrait" }, // Portrait
    { src: "/My-Gallery/Graduation6.jpeg", type: "square" }, // Square
    { src: "/My-Gallery/Graduation7.jpeg", type: "portrait" }, // Portrait
    { src: "/My-Gallery/Graduation8.jpeg", type: "portrait" }, // Portrait
    { src: "/My-Gallery/pic4.jpeg", type: "landscape" }, // Landscape
    { src: "/My-Gallery/pic6.jpeg", type: "landscape" }, // Landscape
    { src: "/My-Gallery/pic7.jpeg", type: "portrait" }, // Portrait
];

// Split into 2 rows for better bento layout
const row1Images = [
    galleryImages[0], // landscape
    galleryImages[1], // portrait
    galleryImages[2], // landscape
    galleryImages[3], // portrait
    galleryImages[4], // portrait
    galleryImages[5], // square
];

const row2Images = [
    galleryImages[6], // portrait
    galleryImages[7], // portrait
    galleryImages[8], // landscape
    galleryImages[9], // landscape
    galleryImages[10], // portrait
];

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openModal = (index: number) => {
        setSelectedImage(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % galleryImages.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeModal();
    };

    // Get frame size based on image type
    const getFrameSize = () => {
        return "w-48 h-64"; // Unified portrait frame (3:4 ratio)
    };

    return (
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        <span className="text-primary">Gallery</span>
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                        Moments and memories from my journey
                    </p>
                </motion.div>

                {/* Two Rows of Bento Grid with Marquee */}
                <div className="space-y-6">
                    {/* Row 1 - Bento Grid Marquee (Left to Right) */}
                    <div className="relative overflow-hidden">
                        <motion.div
                            animate={{ x: [0, -2400] }}
                            transition={{
                                duration: 60,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="flex gap-4 items-end"
                        >
                            {[...row1Images, ...row1Images, ...row1Images].map((image, index) => {
                                const actualIndex = index % row1Images.length;
                                const globalIndex = actualIndex;

                                return (
                                    <div
                                        key={index}
                                        className={`photo-frame cursor-pointer group flex-shrink-0 ${getFrameSize()}`}
                                        onClick={() => openModal(globalIndex)}
                                    >
                                        <div className="relative w-full h-full overflow-hidden">
                                            <Image
                                                src={image.src}
                                                alt={`Gallery ${globalIndex + 1}`}
                                                fill
                                                className="object-cover photo-frame-image transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, 320px"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Row 2 - Bento Grid Marquee (Right to Left) */}
                    <div className="relative overflow-hidden">
                        <motion.div
                            animate={{ x: [-2400, 0] }}
                            transition={{
                                duration: 60,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="flex gap-4 items-end"
                        >
                            {[...row2Images, ...row2Images, ...row2Images, ...row2Images].map((image, index) => {
                                const actualIndex = index % row2Images.length;
                                const globalIndex = actualIndex + row1Images.length;

                                return (
                                    <div
                                        key={index}
                                        className={`photo-frame cursor-pointer group flex-shrink-0 ${getFrameSize()}`}
                                        onClick={() => openModal(globalIndex)}
                                    >
                                        <div className="relative w-full h-full overflow-hidden">
                                            <Image
                                                src={image.src}
                                                alt={`Gallery ${globalIndex + 1}`}
                                                fill
                                                className="object-cover photo-frame-image transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, 320px"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>

                {/* Full Screen Modal */}
                <AnimatePresence>
                    {selectedImage !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                            onClick={closeModal}
                            onKeyDown={handleKeyDown}
                            tabIndex={0}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                                aria-label="Close"
                            >
                                <FiX className="w-6 h-6" />
                            </button>

                            {/* Previous Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage();
                                }}
                                className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                                aria-label="Previous"
                            >
                                <FiChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage();
                                }}
                                className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                                aria-label="Next"
                            >
                                <FiChevronRight className="w-6 h-6" />
                            </button>

                            {/* Image */}
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                                className="relative max-w-6xl max-h-[90vh] w-full h-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={galleryImages[selectedImage].src}
                                    alt={`Gallery ${selectedImage + 1}`}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    priority
                                />
                            </motion.div>

                            {/* Image Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                                {selectedImage + 1} / {galleryImages.length}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Photo Frame Styling */}
            <style jsx>{`
        .photo-frame {
          padding: 15px;
          border-width: 12px;
          border-style: solid;
          border-color: #2F2D2D #434040 #4F4C4C #434040;
          background: linear-gradient(#E5E4DF, #CDCDC6);
          box-shadow: inset 0 2px 5px rgba(0,0,0,.6), 0 5px 2px rgba(0,0,0,.1), 0 10px 20px rgba(0,0,0,.8);
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }

        .photo-frame::before {
          content: "";
          position: absolute;
          top: -100px;
          right: -20%;
          width: 200px;
          height: 200px;
          transform: rotateZ(-40deg);
          background-image: linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,0));
          pointer-events: none;
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
