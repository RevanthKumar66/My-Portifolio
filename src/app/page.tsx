import Hero from "@/components/Hero";
import TechStackSnapshot from "@/components/TechStackSnapshot";
import AboutPreview from "@/components/AboutPreview";
import ExperienceSnapshot from "@/components/ExperienceSnapshot";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesPreview from "@/components/ServicesPreview";
import BlogsPreview from "@/components/BlogsPreview";
import Values from "@/components/Values";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Revanth Kumar | Full Stack Developer & AI Engineer",
    description: "Welcome to the portfolio of Revanth Kumar. I am a Full Stack MERN Developer and AI Engineer specializing in React, Node.js, Python, and Machine Learning.",
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <TechStackSnapshot />
            <AboutPreview />
            <ExperienceSnapshot />
            <FeaturedProjects />
            <ServicesPreview />
            <BlogsPreview />
            <Values />
        </div>
    );
}
