import { Button } from "@/components/ui/Button";
import { FiArrowLeft, FiClock, FiCalendar, FiTag, FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import BlogCard from "@/components/blog/BlogCard";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogs.find(b => b.slug === slug);

    if (!post) return { title: "Post Not Found" };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            url: `https://revanthkumar.dev/blogs/${post.slug}`,
            images: [{ url: post.image || "/profile pic.jpeg" }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image || "/profile pic.jpeg"],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogs.find(b => b.slug === slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image || "https://revanthkumar.dev/profile pic.jpeg",
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author.name,
        },
        "description": post.excerpt,
    };

    // Get related posts (exclude current)
    const relatedPosts = blogs
        .filter(b => b.category === post.category && b.id !== post.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Back Link */}
                <Link href="/blogs" className="group inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary mb-12 transition-colors">
                    <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Articles
                </Link>

                {/* Article Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-primary font-bold mb-6">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                            <FiTag className="w-3.5 h-3.5" />
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-muted-foreground font-normal">
                            <FiCalendar className="w-3.5 h-3.5" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-muted-foreground font-normal border-l border-slate-200 dark:border-slate-800 pl-4">
                            <FiClock className="w-3.5 h-3.5" />
                            {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                        {post.title}
                    </h1>

                    <div className="relative aspect-[21/9] w-full h-[400px] overflow-hidden rounded-[2.5rem] shadow-2xl">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </header>

                {/* Article Content */}
                <article className="prose prose-slate dark:prose-invert lg:prose-xl mx-auto mb-20 max-w-none">
                    <div className="lead text-2xl font-medium text-muted-foreground/80 leading-relaxed mb-12">
                        {post.excerpt}
                    </div>

                    <p>
                        The development of complex systems requires more than just code; it requires a deep understanding of the architecture, the user needs, and the technical constraints. In this article, we explore the intricate details behind {post.title.toLowerCase()} and how we navigated the challenges involved.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The Challenge</h2>
                    <p>
                        Every innovative project begins with a specific problem. For {post.title}, the initial hurdle was defining the scope while maintaining high performance. We often find that in technical projects, the most difficult part isn't finding a solution, but finding the *right* solution that scales.
                    </p>

                    <div className="bg-slate-50 dark:bg-slate-900 p-8 my-10 rounded-3xl border border-slate-200 dark:border-slate-800 italic text-xl">
                        "In modern software engineering, complexity is the enemy. Simplicity is the ultimate sophistication."
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Technical Implementation</h2>
                    <p>
                        Using modern frameworks and libraries, we were able to implement a robust architecture. The key was to maintain a clear separation of concerns while ensuring that the data flow remained efficient and observable.
                    </p>

                    <pre className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl my-10 overflow-x-auto">
                        <code className="text-blue-400">
                            {`const initializeSystem = async (config) => {
  try {
    const system = await Core.bootstrap(config);
    await system.connect();
    console.log("System optimized and ready.");
    return system;
  } catch (error) {
    Metrics.logError("Bootstrap failed", error);
    throw error;
  }
};`}
                        </code>
                    </pre>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Future Directions</h2>
                    <p>
                        Looking ahead, the potential for expansion is vast. We are currently exploring ways to further optimize the processing speeds and integrate more intelligent alerting mechanisms that leverage the latest in {post.category} research.
                    </p>
                </article>

                {/* Author Section */}
                <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-20">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-3xl font-bold text-primary flex-shrink-0">
                            {post.author.initials}
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-2">About {post.author.name}</h3>
                            <p className="text-base text-muted-foreground mb-4">
                                {post.author.role} focused on building intelligent systems and high-performance applications. Passionate about AI ethics, system design, and the intersection of hardware and software.
                            </p>
                            <div className="flex justify-center md:justify-start gap-4">
                                <Link href="https://www.linkedin.com/in/revanthkumar66/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    <FiLinkedin className="w-5 h-5" />
                                </Link>
                                <Link href="https://github.com/RevanthKumar66" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                    <FiGithub className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Articles */}
                {relatedPosts.length > 0 && (
                    <div>
                        <h3 className="text-3xl font-bold mb-10 text-center md:text-left">Related Articles</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {relatedPosts.map((rPost, idx) => (
                                <BlogCard key={rPost.id} post={rPost} index={idx} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
