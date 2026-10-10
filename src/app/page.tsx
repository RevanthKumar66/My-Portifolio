import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { SkillsOverview } from "@/components/sections/SkillsOverview";
import { pageMetadata, siteDescription, siteTitle } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: siteTitle,
  description: siteDescription,
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
