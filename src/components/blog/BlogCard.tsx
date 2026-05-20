"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiClock, FiTag } from "react-icons/fi";
import { BlogPost } from "@/data/blogs";

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

const categoryColors: Record<string, string> = {
    "AI & Machine Learning": "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-800",
    "Full-Stack Development": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    "Computer Vision": "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    "Data Science": "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
    "System Design": "bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800",
    "Career / Learning Journey": "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800",
    "DevOps & Cloud": "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800",
};

export default function BlogCard({ post, index }: BlogCardProps) {
    const colorClass = categoryColors[post.category] || "bg-primary/5 text-primary border-primary/20";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="h-full"
        >
            <Link href={`/blogs/${post.slug}`} className="group block h-full">
                <article className="flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-400">

                    {/* Category Badge */}
                    <div className="mb-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full border ${colorClass}`}>
                            <FiTag className="w-3 h-3" />
                            {post.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base md:text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-snug">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-5 flex-1 leading-relaxed">
                        {post.excerpt}
                    </p>

                    {/* Footer row */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <FiClock className="w-3 h-3" />
                                {post.readTime}
                            </span>
                            <span className="text-slate-300 dark:text-slate-700">•</span>
                            <span>{post.date}</span>
                        </div>
                        <span className="flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all duration-300">
                            Read <FiArrowRight className="w-3.5 h-3.5" />
                        </span>
                    </div>
                </article>
            </Link>
        </motion.div>
    );
}
