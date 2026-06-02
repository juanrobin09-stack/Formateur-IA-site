import { Hero } from "@/components/hero";
import { HeroShowcase } from "@/components/sections/showcase";
import { ReasonsSection } from "@/components/sections/reasons";
import { StepsSection } from "@/components/sections/steps";
import { FaqSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/cta";
import { OffersGrid } from "@/components/offers-grid";
import { Section, SectionHeading } from "@/components/ui/section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroShowcase />
      <ReasonsSection />
      <StepsSection />

      {/* Offres structurées selon le parcours commercial */}
      <Section id="offres">
        <SectionHeading
          eyebrow="Nos formules"
          title="Un parcours pensé pour vous, étape par étape"
          subtitle="De la découverte sans risque à la relation durable : choisissez la formule qui vous correspond."
        />
        <div className="mt-16">
          <OffersGrid />
        </div>
      </Section>

      <FaqSection />
      <FinalCta />
    </>
  );
}
