"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiClock, FiTag } from "react-icons/fi";
import { BlogPost } from "@/data/blogs";

interface FeaturedPostProps {
    post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
    return (
        <section className="py-20 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group relative overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
                >
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Image side */}
                        <div className="relative h-64 lg:h-auto overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                            {post.image && !post.image.startsWith('/blog') ? (
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center text-primary/20">
                                    <FiTag className="w-20 h-20 mb-4" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Article Insight</span>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent pointer-events-none" />
                        </div>

                        {/* Content side */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-primary font-semibold mb-6">
                                <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                                    <FiTag className="w-3.5 h-3.5" />
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-1.5 text-muted-foreground font-normal">
                                    <FiClock className="w-3.5 h-3.5" />
                                    {post.readTime}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary transition-colors">
                                {post.title}
                            </h2>

                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed line-clamp-3">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                                        {post.author.initials}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">{post.author.name}</p>
                                        <p className="text-xs text-muted-foreground">{post.date}</p>
                                    </div>
                                </div>

                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                                >
                                    Read Article <FiArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
