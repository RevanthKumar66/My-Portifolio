"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FiArrowRight, FiClock, FiTag } from "react-icons/fi";
import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";

// Show the 3 most recent blogs (already sorted by newest first in data)
const latestBlogs = blogs.slice(0, 3);

const categoryColors: Record<string, string> = {
    "AI & Machine Learning": "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400",
    "Full-Stack Development": "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    "Computer Vision": "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    "Data Science": "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
    "System Design": "bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400",
    "Career / Learning Journey": "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400",
    "DevOps & Cloud": "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
};

export default function BlogsPreview() {
    return (
        <section className="relative py-12 md:py-16 lg:py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden">
            {/* Decorative Background Gradients */}
            <div className="hidden md:block absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl" />
            <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/5 to-transparent rounded-full blur-3xl" />

            <div className="container px-4 md:px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 sm:gap-0 mb-6 md:mb-8 lg:mb-10"
                >
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-2">Latest Insights</h2>
                        <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
                            Thoughts on AI, full-stack development, and modern engineering.
                        </p>
                    </div>
                    <Link href="/blogs" className="hidden md:block">
                        <Button variant="ghost" className="group hover:bg-primary/10 hover:text-primary transition-all duration-300 text-xs md:text-base">
                            Read All Articles <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {latestBlogs.map((blog, index) => {
                        const colorClass = categoryColors[blog.category] || "bg-primary/5 text-primary";
                        return (
                            <motion.div
                                key={blog.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                            >
                                <Link href={`/blogs/${blog.slug}`} className="group block h-full">
                                    <article className="h-full flex flex-col p-5 md:p-6 rounded-xl md:rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-500">

                                        {/* Category badge */}
                                        <div className="mb-3">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${colorClass}`}>
                                                <FiTag className="w-2.5 h-2.5" />
                                                {blog.category}
                                            </span>
                                        </div>

                                        <h3 className="text-sm md:text-base lg:text-lg font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                            {blog.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 md:line-clamp-3 mb-4 flex-1 leading-relaxed">
                                            {blog.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 mt-auto">
                                            <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-muted-foreground">
                                                <FiClock className="w-3 h-3" />
                                                <span>{blog.readTime}</span>
                                                <span className="text-slate-300 dark:text-slate-700 mx-0.5">•</span>
                                                <span>{blog.date}</span>
                                            </div>
                                            <span className="flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all duration-300">
                                                Read <FiArrowRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-6 md:hidden text-center">
                    <Link href="/blogs">
                        <Button variant="outline" className="w-full rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-sm">
                            Read All Articles
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
