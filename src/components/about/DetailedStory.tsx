"use client";

import { motion } from "framer-motion";
import { FiTarget, FiTrendingUp, FiHeart } from "react-icons/fi";

export default function DetailedStory() {
    return (
        <section className="relative py-12 md:py-16 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Decorative Gradients */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-indigo-500/5 to-transparent rounded-full blur-3xl" />

            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        My <span className="text-primary">Journey</span>
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                        From curious learner to professional developer
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Left - Story Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 text-justify"
                    >
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            My journey into technology began with a simple curiosity about how things work.
                            What started as tinkering with code has evolved into a passion for creating
                            innovative solutions that solve real-world problems.
                        </p>

                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            During my academic years, I discovered the power of combining <span className="text-primary font-semibold">full-stack development</span> with{" "}
                            <span className="text-primary font-semibold">artificial intelligence</span>. This unique blend allows me to build
                            intelligent, scalable applications that not only function flawlessly but also learn and adapt.
                        </p>

                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Through internships at <span className="font-semibold">Deepvibe IT Solutions</span>, <span className="font-semibold">42Learn</span>,
                            and <span className="font-semibold">CodeTantra</span>, I've had the privilege of working on diverse projects—from
                            building responsive web applications to developing AI-powered systems for healthcare and education.
                        </p>

                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            Today, I'm driven by the challenge of transforming complex problems into elegant,
                            user-friendly solutions. Whether it's optimizing performance, implementing cutting-edge
                            AI models, or crafting intuitive interfaces, I approach each project with dedication
                            and a commitment to excellence.
                        </p>
                    </motion.div>

                    {/* Right - Highlights Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4 flex flex-col justify-between"
                    >
                        {/* Mission */}
                        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                                    <FiTarget className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold mb-1">Mission</h3>
                                    <p className="text-sm text-muted-foreground">
                                        To leverage technology in creating solutions that improve lives,
                                        enhance user experiences, and drive innovation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-green-500/10 text-green-500 flex-shrink-0">
                                    <FiTrendingUp className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold mb-1">Vision</h3>
                                    <p className="text-sm text-muted-foreground">
                                        To become a leading force in AI-driven development, building scalable
                                        systems that seamlessly integrate intelligence with exceptional UX.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Passion */}
                        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-red-500/10 text-red-500 flex-shrink-0">
                                    <FiHeart className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold mb-1">Passion</h3>
                                    <p className="text-sm text-muted-foreground">
                                        I'm passionate about continuous learning, open-source contribution,
                                        and mentoring aspiring developers to achieve their goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
