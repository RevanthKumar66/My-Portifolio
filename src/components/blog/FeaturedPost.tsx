"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiClock, FiTag, FiUser } from "react-icons/fi";
import { BlogPost } from "@/data/blogs";

interface FeaturedPostProps {
    post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
    return (
        <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Label */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                        <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                            Featured Article
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    </div>

                    <Link href={`/blogs/${post.slug}`} className="group block">
                        <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/80 border border-slate-200 dark:border-slate-800 p-8 md:p-12 hover:shadow-2xl hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-500">

                            {/* Decorative gradient blob */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

                            <div className="relative z-10 max-w-3xl">
                                {/* Badges */}
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-full border border-primary/20">
                                        <FiTag className="w-3 h-3" />
                                        {post.category}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                                        <FiClock className="w-3.5 h-3.5" />
                                        {post.readTime}
                                    </span>
                                    <span className="text-xs text-muted-foreground">{post.date}</span>
                                </div>

                                {/* Title */}
                                <h2 className="text-2xl md:text-4xl font-bold mb-5 group-hover:text-primary transition-colors duration-300 leading-tight">
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                                            {post.author.initials}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">{post.author.name}</p>
                                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                                <FiUser className="w-3 h-3" />
                                                {post.author.role}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all duration-300">
                                        Read Full Article <FiArrowRight />
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
