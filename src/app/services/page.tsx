import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import CoreServicesGrid from "@/components/services/CoreServicesGrid";
import WhoThisIsFor from "@/components/services/WhoThisIsFor";
import HowIWork from "@/components/services/HowIWork";
import WhyWorkWithMe from "@/components/services/WhyWorkWithMe";
import FAQ from "@/components/services/FAQ";

export const metadata = {
    title: "Services",
    description: "Professional web, AI, and data-driven solutions. Full-stack development, AI chatbots, data science, and more.",
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ServicesHero />
            <ServicesOverview />
            <CoreServicesGrid />
            <WhoThisIsFor />
            <HowIWork />
            <WhyWorkWithMe />
            <FAQ />
        </div>
    );
}
