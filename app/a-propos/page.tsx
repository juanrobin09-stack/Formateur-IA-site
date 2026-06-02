import type { Metadata } from "next";
import { Target, Compass, Sparkles, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { FinalCta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Académie IA : notre mission, nos valeurs et le formateur derrière les formations IA pour entreprises et particuliers.",
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
        subtitle="Académie IA démocratise l'intelligence artificielle auprès des entreprises et des particuliers, avec une approche concrète et sans jargon."
      />

      {/* Notre approche */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/25 via-accent-600/10 to-white/[0.02]">
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent-500/30 blur-3xl"
                aria-hidden
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center">
                <Logo className="scale-150" />
                <p className="max-w-xs text-sm leading-relaxed text-white/60">
                  Un accompagnement humain, des résultats concrets. On forme,
                  on outille, on rend autonome.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {["Pédagogue", "Sur-mesure", "Sans jargon"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              Notre approche
            </span>
            <h2 className="mt-1 font-display text-3xl font-semibold sm:text-4xl">
              On part de votre réalité, pas de la théorie
            </h2>
            <div className="mt-5 space-y-4 text-white/65">
              <p>
                Académie IA est née d&apos;un constat simple : la plupart des
                professionnels entendent parler d&apos;intelligence artificielle
                sans jamais voir comment l&apos;appliquer à leur propre métier.
                Notre rôle, c&apos;est de combler ce fossé.
              </p>
              <p>
                Chaque formation démarre par vos vrais dossiers, vos tâches
                chronophages et vos objectifs. On vous montre, pas à pas, les
                bons outils et les bonnes méthodes — puis on s&apos;assure que
                vous repartez réellement autonome, prompts en main.
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
