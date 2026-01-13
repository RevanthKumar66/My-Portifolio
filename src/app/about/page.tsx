import AboutHero from "@/components/about/AboutHero";
import DetailedStory from "@/components/about/DetailedStory";
import Education from "@/components/about/Education";
import FullExperience from "@/components/about/FullExperience";
import SkillsTechStack from "@/components/about/SkillsTechStack";
import CertificationsSection from "@/components/about/CertificationsSection";
import AchievementsSection from "@/components/about/AchievementsSection";
import GallerySection from "@/components/about/GallerySection";
import PersonalValues from "@/components/about/PersonalValues";
import Interests from "@/components/about/Interests";

export const metadata = {
    title: "About Me",
    description: "Learn more about Revanth Kumar - Full Stack Developer & AI Engineer. My journey, skills, experience, and passion for technology.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <AboutHero />
            <DetailedStory />
            <Education />
            <FullExperience />
            <SkillsTechStack />
            <CertificationsSection />
            <AchievementsSection />
            <GallerySection />
            <PersonalValues />
            <Interests />
        </div>
    );
}
