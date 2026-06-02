import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { FinalCta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Le manifeste d'Académie IA : nos convictions sur une intelligence artificielle utile, honnête et accessible à tous.",
};

/** Les convictions qui composent le manifeste. */
const manifesto = [
  {
    title: "L'IA doit servir, pas impressionner",
    text: "Une technologie n'a de valeur que si elle vous fait gagner du temps sur de vraies tâches. Tout le reste n'est que démonstration. Nous mesurons le succès en heures économisées, pas en effet « waouh ».",
  },
  {
    title: "Personne ne devrait se sentir dépassé",
    text: "Nous partons toujours de votre niveau et de votre métier. Aucune question n'est bête, et vous n'avez besoin d'aucune compétence technique pour commencer. La simplicité est notre exigence.",
  },
  {
    title: "On apprend en faisant",
    text: "Vous repartez de chaque séance avec des outils prêts à l'emploi et des réflexes que vous utiliserez dès le lendemain, sur vos propres dossiers.",
  },
  {
    title: "La confiance se mérite avant de se vendre",
    text: "C'est pourquoi nous proposons toujours une première étape sans risque. Vous jugez la qualité par vous-même, puis vous décidez. Jamais l'inverse.",
  },
  {
    title: "L'honnêteté avant la mode",
    text: "Nous vous disons ce que l'IA sait faire aujourd'hui et ce qu'elle ne sait pas encore. Pas de promesses magiques, juste des résultats que vous pouvez vérifier.",
  },
  {
    title: "Votre autonomie est notre réussite",
    text: "Notre but n'est pas de vous rendre dépendant d'un prestataire, mais de vous rendre capable. Le jour où vous n'avez plus besoin de nous, nous avons gagné.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="Manifeste"
        title="Ce en quoi nous croyons"
        subtitle="Académie IA est née d'un constat. La plupart des professionnels entendent parler d'intelligence artificielle sans jamais voir comment l'appliquer à leur métier. Nous existons pour combler ce fossé."
      >
        <ButtonLink href="/contact" size="lg">
          Discutons de votre projet
          <ArrowRight size={18} />
        </ButtonLink>
      </PageHeader>

      {/* Le manifeste */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-pretty font-display text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
              Rendre l&apos;intelligence artificielle vraiment utile, pour les
              entreprises comme pour les particuliers. Concrètement, honnêtement,
              à votre rythme.
            </p>
          </Reveal>

          <div className="mt-14 space-y-px">
            {manifesto.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.05}>
                <div className="flex gap-5 border-t border-white/10 py-8 sm:gap-7">
                  <span className="shrink-0 font-display text-2xl font-bold text-brand-400/50 sm:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-balance font-display text-xl font-semibold sm:text-2xl">
                      {m.title}
                    </h2>
                    <p className="mt-2 text-pretty leading-relaxed text-white/65">
                      {m.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <FinalCta
        title="Envie d'en faire partie ?"
        subtitle="La première étape est gratuite et sans engagement. Le meilleur moyen de voir si on est faits pour travailler ensemble."
      />
    </>
  );
}
