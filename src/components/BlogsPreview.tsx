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
        <section className="relative py-16 md:py-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 overflow-hidden">
            {/* Decorative Background Gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/5 to-transparent rounded-full blur-3xl" />

            <div className="container px-6 md:px-12 max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-between items-end mb-10"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-2">Latest Insights</h2>
                        <p className="text-base text-muted-foreground">
                            Thoughts on technology, coding, and AI.
                        </p>
                    </div>
                    <Link href="/blogs" className="hidden md:block">
                        <Button variant="ghost" className="group hover:bg-primary/10 hover:text-primary transition-all duration-300">
                            Read All Articles <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            <Link href={`/blogs/${blog.slug}`} className="group block h-full">
                                <article className="h-full flex flex-col p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all duration-500">
                                    <div className="flex items-center gap-2 mb-3">
                                        <FiClock className="text-primary w-4 h-4" />
                                        <span className="text-xs font-semibold text-primary">{blog.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                                        {blog.excerpt}
                                    </p>
                                    <div className="flex items-center text-sm font-medium text-primary mt-auto group-hover:gap-3 transition-all duration-300">
                                        Read Article <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
