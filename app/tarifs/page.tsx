import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { AudienceOffers } from "@/components/audience-offers";
import { FaqSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/cta";
import { Reveal } from "@/components/reveal";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tous les tarifs des formations Académie IA : audit gratuit, ateliers, formation IA métier, programme transformation et offres particuliers.",
};

export default function TarifsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tarifs"
        title="Des tarifs clairs, sans surprise"
        subtitle="Choisissez votre profil pour afficher les formules correspondantes. Tous nos parcours démarrent par un audit gratuit."
      />

      <Section>
        <AudienceOffers />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/60">
            <Info size={18} className="mt-0.5 shrink-0 text-brand-400" />
            <p>
              Les tarifs entreprises sont indiqués hors taxes (HT). Les
              formations en entreprise sont potentiellement finançables via votre
              OPCO, selon éligibilité. Aucun paiement en ligne : après votre
              demande, nous vous envoyons un devis clair et convenons ensemble
              des modalités de règlement.
            </p>
          </div>
        </Reveal>
      </Section>

      <FaqSection />

      <FinalCta />
    </>
  );
}
