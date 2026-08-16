import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { OffersByAudience } from "@/components/offers-grid";
import { FaqSection } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/cta";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { Info } from "lucide-react";
import { offers } from "@/lib/offers";
import { faq } from "@/lib/content";
import { pageMetadata, coursesJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tarifs des formations IA : entreprises et particuliers",
  description:
    "Découvrez les tarifs des formations Académie IA : formules entreprises sur devis et formules particuliers dès 49 €, du cours découverte gratuit au pack autonomie complet.",
  path: "/tarifs",
});

/**
 * Données structurées FAQPage : émises uniquement ici (et pas sur les autres
 * pages qui affichent aussi le composant FaqSection), pour éviter le contenu
 * structuré dupliqué sur plusieurs URLs.
 */
function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function TarifsPage() {
  return (
    <>
      <JsonLd data={coursesJsonLd(offers)} />
      <JsonLd data={faqPageJsonLd()} />
      <PageHeader
        eyebrow="Tarifs"
        title="Un parcours clair, sans surprise"
        subtitle="Formations entreprises sur devis, formules particuliers à prix fixe : trouvez celle qui vous correspond."
        breadcrumb={[{ name: "Tarifs", path: "/tarifs" }]}
      />

      <Section>
        <OffersByAudience />

        <Reveal className="mx-auto mt-16 max-w-3xl">
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/60">
            <Info size={18} className="mt-0.5 shrink-0 text-brand-400" />
            <p>
              Aucun paiement en ligne : après votre demande, nous vous envoyons
              un devis clair et convenons ensemble des modalités de règlement.
            </p>
          </div>
        </Reveal>
      </Section>

      <FaqSection />

      <FinalCta />
    </>
  );
}
