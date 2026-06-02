import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { OffersGrid } from "@/components/offers-grid";
import { FaqSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/cta";
import { Reveal } from "@/components/reveal";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Les formules d'Académie IA : essai gratuit, échantillon découverte, contrats avec ou sans engagement et offre d'exclusivité pour les premiers clients.",
};

export default function TarifsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tarifs"
        title="Un parcours clair, sans surprise"
        subtitle="De l'essai sans engagement à la relation durable : trouvez la formule qui vous correspond."
      />

      <Section>
        <OffersGrid />

        <Reveal className="mx-auto mt-16 max-w-3xl">
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/60">
            <Info size={18} className="mt-0.5 shrink-0 text-brand-400" />
            <p>
              Les formations en entreprise sont potentiellement finançables via
              votre OPCO, selon éligibilité. Aucun paiement en ligne : après
              votre demande, nous vous envoyons un devis clair et convenons
              ensemble des modalités de règlement.
            </p>
          </div>
        </Reveal>
      </Section>

      <FaqSection />

      <FinalCta />
    </>
  );
}
