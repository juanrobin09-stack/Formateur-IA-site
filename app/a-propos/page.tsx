import type { Metadata } from "next";
import { Target, Compass, Sparkles, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { FinalCta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Formator AI : notre mission, nos valeurs et le formateur derrière les formations IA pour entreprises et particuliers.",
};

const values = [
  {
    icon: Target,
    title: "Concret avant tout",
    description:
      "Chaque formation doit produire un résultat utilisable immédiatement. Pas de théorie pour la théorie.",
  },
  {
    icon: Compass,
    title: "Pédagogie accessible",
    description:
      "On vulgarise sans infantiliser. Tout le monde peut comprendre et utiliser l'IA.",
  },
  {
    icon: Sparkles,
    title: "Exigence & honnêteté",
    description:
      "On recommande les bons outils, on dit ce que l'IA sait faire… et ce qu'elle ne sait pas (encore) faire.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="L'IA utile, accessible à tous"
        subtitle="Formator AI démocratise l'intelligence artificielle auprès des entreprises et des particuliers, avec une approche concrète et sans jargon."
      />

      {/* Le formateur */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/20 to-white/[0.02]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-600/20 font-display text-4xl font-bold text-brand-300">
                    F
                  </div>
                  <p className="mt-4 text-sm text-white/40">
                    [À REMPLACER : photo du formateur]
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm font-medium uppercase tracking-widest text-brand-400">
              Le formateur
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              [À REMPLACER : Prénom Nom]
            </h2>
            <div className="mt-5 space-y-4 text-white/65">
              <p>
                [À REMPLACER : présentation du formateur. Parcours, expériences
                clés, ce qui vous a amené à former à l'IA, votre approche
                pédagogique, vos certifications éventuelles…]
              </p>
              <p>
                [À REMPLACER : une phrase plus personnelle sur votre mission et
                ce qui vous motive à rendre l'IA accessible à tous.]
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/contact" size="lg">
                Discutons de votre projet
                <ArrowRight size={18} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-white/[0.02]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-400">
            Notre mission
          </p>
          <p className="mt-5 font-display text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
            « Faire passer chaque professionnel et chaque curieux de
            <span className="text-brand-400"> « l'IA c'est flou » </span>
            à
            <span className="text-brand-400"> « je l'utilise dès demain » </span>
            — concrètement, sans jargon, à son rythme. »
          </p>
        </Reveal>
      </Section>

      {/* Valeurs */}
      <Section>
        <SectionHeading eyebrow="Nos valeurs" title="Ce qui nous guide" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl glass p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
