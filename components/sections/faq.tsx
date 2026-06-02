import { Section, SectionHeading } from "@/components/ui/section";
import { FaqAccordion } from "@/components/faq-accordion";
import { faq } from "@/lib/content";

/** Section FAQ. */
export function FaqSection() {
  return (
    <Section id="faq" className="bg-white/[0.02]">
      <SectionHeading
        eyebrow="FAQ"
        title="Vos questions, nos réponses"
        subtitle="Tout ce qu'il faut savoir avant de vous lancer. Une autre question ? Écrivez-nous."
      />
      <div className="mt-12">
        <FaqAccordion items={faq} />
      </div>
    </Section>
  );
}
