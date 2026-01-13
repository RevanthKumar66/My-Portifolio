"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiClock, FiTag } from "react-icons/fi";
import { BlogPost } from "@/data/blogs";

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/blogs/${post.slug}`} className="group block h-full">
                <article className="flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        {post.image && !post.image.startsWith('/blog') ? (
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        ) : (
                            <div className="text-primary/20 flex flex-col items-center">
                                <FiTag className="w-12 h-12" />
                            </div>
                        )}
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full border border-slate-200 dark:border-slate-800 text-primary">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                            <span className="flex items-center gap-1.5">
                                <FiClock className="w-3.5 h-3.5" />
                                {post.readTime}
                            </span>
                            <span>{post.date}</span>
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-6 line-clamp-2 flex-1">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center text-sm font-bold text-primary group-hover:gap-3 transition-all">
                            Read Article <FiArrowRight className="ml-2" />
                        </div>
                    </div>
                </article>
            </Link>
        </motion.div>
    );
}
