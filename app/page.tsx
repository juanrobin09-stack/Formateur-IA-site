import { Hero } from "@/components/hero";
import { HeroShowcase } from "@/components/sections/showcase";
import { ReasonsSection } from "@/components/sections/reasons";
import { StepsSection } from "@/components/sections/steps";
import { FaqSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/cta";
import { AudienceOffers } from "@/components/audience-offers";
import { Section, SectionHeading } from "@/components/ui/section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroShowcase />
      <ReasonsSection />
      <StepsSection />

      {/* Offres pilotées par le sélecteur de public */}
      <Section id="offres">
        <SectionHeading
          eyebrow="Nos formations"
          title="Des offres claires, pour chaque besoin"
          subtitle="Choisissez votre profil pour découvrir les formules adaptées."
        />
        <div className="mt-12">
          <AudienceOffers />
        </div>
      </Section>

      <FaqSection />
      <FinalCta />
    </>
  );
}
