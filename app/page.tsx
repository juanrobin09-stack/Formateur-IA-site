import { Hero } from "@/components/hero";
import { HeroShowcase } from "@/components/sections/showcase";
import { ReasonsSection } from "@/components/sections/reasons";
import { StepsSection } from "@/components/sections/steps";
import { FaqSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/cta";
import { HomeOffers } from "@/components/home/home-offers";
import { AudienceProvider } from "@/components/home/audience-context";
import { Section, SectionHeading } from "@/components/ui/section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Académie IA — Formation intelligence artificielle pour entreprises et particuliers",
  description:
    "Formez-vous ou formez vos équipes à l'IA générative et à ChatGPT : audit, programmes sur-mesure pour les entreprises, cours et ateliers accessibles pour les particuliers.",
  path: "",
});

export default function HomePage() {
  return (
    <AudienceProvider>
      <Hero />
      <HeroShowcase />
      <ReasonsSection />
      <StepsSection />

      {/* Offres filtrées selon le public choisi dans le hero */}
      <Section id="offres">
        <SectionHeading
          eyebrow="Nos formules"
          title="Une offre pour chaque profil"
          subtitle="Entreprises ou particuliers : choisissez la formule qui vous correspond."
        />
        <HomeOffers />
      </Section>

      <FaqSection />
      <FinalCta />
    </AudienceProvider>
  );
}
