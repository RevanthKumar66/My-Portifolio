import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactSocials from "@/components/contact/ContactSocials";
import ContactAvailability from "@/components/contact/ContactAvailability";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata = {
    title: "Contact | Revanth Kumar",
    description: "Get in touch for internships, full-time roles, freelance projects, and collaborations. Let's build something extraordinary together.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <ContactHero />
            <ContactInfo />
            <ContactFormSection />
            <ContactSocials />
            <ContactAvailability />
            <ContactFAQ />
        </main>
    );
}
