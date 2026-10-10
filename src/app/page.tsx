import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { SkillsOverview } from "@/components/sections/SkillsOverview";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Revanth Kumar | Software Engineer",
  description:
    "Software Engineer in Hyderabad, India, focused on full-stack development, backend engineering, enterprise applications, and scalable web experiences.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ExperienceTimeline />
      <SkillsOverview />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
