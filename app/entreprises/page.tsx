import type { Metadata } from "next";
import {
  ArrowRight,
  Clock,
  TrendingUp,
  ShieldCheck,
  Banknote,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { OfferCard } from "@/components/offer-card";
import { ButtonLink } from "@/components/ui/button";
import { FinalCta } from "@/components/sections/cta";
import { StepsSection } from "@/components/sections/steps";
import { offersByAudience } from "@/lib/offers";
import { sectorUseCases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Formations IA pour entreprises",
  description:
    "Formez vos équipes à l'IA générative. Programmes sur-mesure par métier, finançables OPCO. Immobilier, restauration, BTP, artisans, commerce, professions libérales.",
};

const benefits = [
  {
    icon: Clock,
    title: "Gagnez du temps",
    description:
      "5 à 10 heures économisées chaque semaine sur les tâches répétitives.",
  },
  {
    icon: TrendingUp,
    title: "Boostez la productivité",
    description:
      "Des équipes plus autonomes et plus efficaces sur leurs vrais dossiers.",
  },
  {
    icon: ShieldCheck,
    title: "Sans risque",
    description:
      "On commence par un audit gratuit pour valider le retour sur investissement.",
  },
  {
    icon: Banknote,
    title: "Finançable OPCO",
    description:
      "Vos formations sont potentiellement prises en charge, selon éligibilité.",
  },
];

export default function EntreprisesPage() {
  const offers = offersByAudience("entreprises");

  return (
    <>
      <PageHeader
        eyebrow="Entreprises & PME"
        title="L'IA au service de votre entreprise"
        subtitle="Des formations concrètes et personnalisées pour rendre vos équipes autonomes sur l'IA générative — et gagner un temps précieux."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg">
            Réserver un audit gratuit
            <ArrowRight size={18} />
          </ButtonLink>
          <ButtonLink href="#offres" variant="secondary" size="lg">
            Voir les offres
          </ButtonLink>
        </div>
      </PageHeader>

      {/* Bénéfices */}
      <Section>
        <SectionHeading
          eyebrow="Bénéfices"
          title="Pourquoi former vos équipes à l'IA"
          subtitle="Un investissement rentable, mesurable et rassurant."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {b.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Cas d'usage par secteur */}
      <Section className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="Cas d'usage"
          title="Des exemples concrets, secteur par secteur"
          subtitle="Quel que soit votre métier, l'IA peut vous faire gagner du temps dès aujourd'hui."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectorUseCases.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <Reveal key={sector.sector} delay={i * 0.05}>
                <div className="h-full rounded-2xl glass p-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      {sector.sector}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {sector.useCases.map((uc) => (
                      <li
                        key={uc}
                        className="flex items-start gap-2 text-sm text-white/65"
                      >
                        <ArrowRight
                          size={15}
                          className="mt-0.5 shrink-0 text-brand-400"
                        />
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <StepsSection />

      {/* Financement OPCO */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/10 to-transparent p-8 sm:p-12">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  Vos formations finançables par votre OPCO
                </h2>
                <p className="mt-3 text-white/60">
                  Selon votre éligibilité, tout ou partie de la formation peut
                  être prise en charge. Nous vous fournissons le devis et les
                  documents nécessaires à votre demande de financement.
                </p>
              </div>
              <ButtonLink href="/contact" size="lg" className="shrink-0">
                Demander un devis
                <ArrowRight size={18} />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Offres */}
      <Section id="offres" className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="Nos offres entreprises"
          title="Choisissez le format adapté à vos équipes"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </Section>

      <FinalCta
        title="Parlons de votre projet"
        subtitle="Un audit gratuit de 30 minutes pour identifier vos cas d'usage prioritaires et estimer votre retour sur investissement."
        primaryLabel="Réserver un audit gratuit"
        secondaryLabel="Demander un devis"
        secondaryHref="/contact"
      />
    </>
  );
}
