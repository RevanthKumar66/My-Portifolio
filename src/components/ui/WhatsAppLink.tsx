import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { TechIcon } from "@/components/ui/TechIcon";

export const whatsappLabel = "Message me on WhatsApp (opens WhatsApp in a new tab)";

export function WhatsAppButton({ className }: { className?: string }) {
  return (
    <Button href={profile.whatsapp} external variant="secondary" aria-label={whatsappLabel} className={className}>
      <TechIcon name="WhatsApp" className="size-4" />
      WhatsApp
    </Button>
  );
}
