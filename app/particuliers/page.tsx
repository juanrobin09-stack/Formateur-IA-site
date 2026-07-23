import type { Metadata } from "next";
import { ArrowRight, Video, Clock, Heart } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { OffersGrid } from "@/components/offers-grid";
import { ButtonLink } from "@/components/ui/button";
import { FinalCta } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { individualProfiles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Formations IA pour particuliers",
  description:
    "Apprenez à utiliser l'IA, sans connaissances techniques. Commencez par une séance découverte gratuite, puis choisissez la formule qui vous convient. Pour indépendants, salariés, demandeurs d'emploi et curieux.",
};

const formats = [
  {
    icon: Video,
    title: "Visio ou à domicile",
    description:
      "Toutes les formules en visio depuis chez vous ; le cours particulier est aussi disponible à domicile en Gironde et dans le Libournais.",
  },
  {
    icon: Clock,
    title: "À votre rythme",
    description: "Des formats courts (1 à 2 h) ou un parcours complet de 5 h.",
  },
  {
    icon: Heart,
    title: "Bienveillant",
    description: "Aucune question bête : on part de votre niveau, sans jargon.",
  },
];

export default function ParticuliersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Particuliers"
        title="Apprenez l'IA, dès demain"
        subtitle="Que vous soyez indépendant, salarié, en recherche d'emploi ou simplement curieux : devenez autonome avec l'IA, en toute simplicité."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="#offres" size="lg">
            Voir les offres
            <ArrowRight size={18} />
          </ButtonLink>
          <ButtonLink href="/reservation" variant="secondary" size="lg">
            Réserver un créneau
          </ButtonLink>
        </div>
      </PageHeader>

      {/* À qui ça s'adresse */}
      <Section>
        <SectionHeading
          eyebrow="Pour qui"
          title="Une formation pensée pour vous"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {individualProfiles.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Formats */}
      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Les formats" title="Simple, souple, en ligne" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {formats.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-6 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Offres */}
      <Section id="offres">
        <SectionHeading
          eyebrow="Nos formules"
          title="Commencez sans risque, à votre rythme"
          subtitle="Une séance découverte gratuite pour démarrer, puis la formule qui vous convient."
        />
        <div className="mt-16">
          <OffersGrid audience="particuliers" />
        </div>
      </Section>

      <TestimonialsSection />

      <FaqSection />

      <FinalCta
        title="Envie de vous lancer ?"
        subtitle="Réservez votre atelier ou votre cours en visio en quelques clics."
        primaryLabel="Réserver un créneau"
        primaryHref="/reservation"
        secondaryLabel="Nous contacter"
        secondaryHref="/contact"
      />
    </>
  );
}
