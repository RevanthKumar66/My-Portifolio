"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FiArrowRight, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

const blogs = [
    {
        title: "Optimizing Next.js Performance",
        excerpt: "Learn how to improve your Next.js application speed using server components and image optimization.",
        date: "Dec 20, 2024",
        slug: "optimizing-nextjs-performance"
    },
    {
        title: "Integrating AI with MERN Stack",
        excerpt: "A guide to building intelligent web applications by connecting OpenAI API with Node.js backend.",
        date: "Nov 15, 2024",
        slug: "integrating-ai-mern-stack"
    },
    {
        title: "Understanding React Server Components",
        excerpt: "Deep dive into the architecture of RSC and how it changes the way we build React apps.",
        date: "Oct 05, 2024",
        slug: "understanding-react-server-components"
    }
];

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
                            Thoughts on technology, coding, and AI.
                        </p>
                    </div>
                    <Link href="/blogs" className="hidden md:block">
                        <Button variant="ghost" className="group hover:bg-primary/10 hover:text-primary transition-all duration-300 text-xs md:text-base">
                            Read All Articles <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            <Link href={`/blogs/${blog.slug}`} className="group block h-full">
                                <article className="h-full flex flex-col p-4 md:p-6 rounded-lg md:rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all duration-500">
                                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                                        <FiClock className="text-primary w-3.5 md:w-4 h-3.5 md:h-4" />
                                        <span className="text-[10px] md:text-xs font-semibold text-primary">{blog.date}</span>
                                    </div>
                                    <h3 className="text-sm md:text-lg lg:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 md:line-clamp-3 mb-3 md:mb-4 flex-1">
                                        {blog.excerpt}
                                    </p>
                                    <div className="flex items-center text-xs md:text-sm font-medium text-primary mt-auto group-hover:gap-3 transition-all duration-300">
                                        Read Article <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300 w-3.5 md:w-4 h-3.5 md:h-4" />
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Link href="/blogs">
                        <Button variant="outline" className="w-full rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                            Read All Articles
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
