"use client";

import { motion } from "framer-motion";
import { FiMail, FiSend } from "react-icons/fi";
import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                >
                    {/* Background Decorative Element */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />

                    <div className="relative z-10 text-center max-w-2xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                            <FiMail className="w-8 h-8" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                            Fresh insights, delivered.
                        </h2>

                        <p className="text-lg text-muted-foreground mb-10">
                            Join my newsletter to get the latest articles on <span className="text-primary font-semibold">AI, System Design, and Developer Growth</span> directly in your inbox.
                        </p>

                        <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 font-medium"
                                >
                                    Thanks for subscribing! Check your inbox soon.
                                </motion.div>
                            ) : (
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 px-6 py-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 transition-all disabled:opacity-50"
                                    >
                                        {status === "loading" ? "Subscribing..." : (
                                            <>Subscribe <FiSend className="w-4 h-4" /></>
                                        )}
                                    </button>
                                </div>
                            )}
                        </form>

                        <p className="mt-6 text-xs text-muted-foreground">
                            No spam. Unsubscribe at any time.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
