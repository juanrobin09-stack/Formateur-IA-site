import Link from "next/link";
import { ArrowRight, Video, Clock, Heart } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { OffersGrid } from "@/components/offers-grid";
import { ButtonLink } from "@/components/ui/button";
import { FinalCta } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { JsonLd } from "@/components/seo/json-ld";
import { individualProfiles } from "@/lib/content";
import { offersByAudience } from "@/lib/offers";
import { pageMetadata, coursesJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Formation IA pour particuliers : apprendre l'intelligence artificielle",
  description:
    "Apprenez à utiliser l'IA et ChatGPT sans connaissances techniques : séance découverte gratuite, ateliers collectifs, cours particuliers en visio ou à domicile. Pour indépendants, salariés et demandeurs d'emploi.",
  path: "/particuliers",
});

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
  const offers = offersByAudience("particuliers");

  return (
    <>
      <JsonLd data={coursesJsonLd(offers)} />
      <PageHeader
        eyebrow="Particuliers"
        title="Apprenez l'IA, dès demain"
        subtitle="Que vous soyez indépendant, salarié, en recherche d'emploi ou simplement curieux : devenez autonome avec l'IA, en toute simplicité."
        breadcrumb={[{ name: "Particuliers", path: "/particuliers" }]}
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
        <Reveal className="mt-10 text-center">
          <p className="text-sm text-white/50">
            Vous voulez commencer précisément par{" "}
            <Link href="/formations/chatgpt" className="text-brand-400 underline-offset-4 hover:underline">
              apprendre ChatGPT
            </Link>{" "}
            ? C&apos;est justement le cœur de nos formations.
          </p>
        </Reveal>
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
