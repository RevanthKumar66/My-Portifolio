"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiFilter } from "react-icons/fi";
import { blogs, categories } from "@/data/blogs";
import BlogCard from "./BlogCard";

export default function BlogList() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredBlogs = blogs.filter((blog) => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                    {/* Categories */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 max-w-2xl">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${selectedCategory === cat
                                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                                        : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-primary/50 text-muted-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-80 group">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm shadow-sm"
                        />
                    </div>
                </div>

                {/* Blog Grid */}
                {filteredBlogs.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredBlogs.map((blog, index) => (
                                <BlogCard key={blog.id} post={blog} index={index} />
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
                            <FiFilter className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">No articles found</h3>
                        <p className="text-muted-foreground">Try adjusting your search or category filter.</p>
                        <button
                            onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
                            className="mt-6 text-primary font-bold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
