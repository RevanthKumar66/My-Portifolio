import BlogHero from "@/components/blog/BlogHero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogList from "@/components/blog/BlogList";
import Newsletter from "@/components/blog/Newsletter";
import { blogs } from "@/data/blogs";

export const metadata = {
    title: "Blog | Revanth Kumar",
    description: "Insights on AI, Full-Stack Development, Computer Vision, and Software Engineering journey.",
};

export default function BlogsPage() {
    // We'll use the first blog as the featured one
    const featuredPost = blogs[0];

    return (
        <div className="flex flex-col min-h-screen">
            <BlogHero />
            <FeaturedPost post={featuredPost} />
            <BlogList />
        </div>
    );
}
