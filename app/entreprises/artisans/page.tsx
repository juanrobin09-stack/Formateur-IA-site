import Link from "next/link";
import {
  ArrowRight,
  Camera,
  FileText,
  Hammer,
  MessageSquare,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { OfferCard } from "@/components/offer-card";
import { FinalCta } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";
import { getOffer } from "@/lib/offers";
import { pageMetadata, coursesJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Formation IA artisans : devis, factures et relation client",
  description:
    "Formation IA pour artisans (plombiers, électriciens, menuisiers, maçons...) : automatiser devis et factures, valoriser vos réalisations, répondre aux clients sans y passer la soirée. Devis clair sous 24 h.",
  path: "/entreprises/artisans",
});

const challenges = [
  {
    icon: FileText,
    title: "Un devis à refaire de zéro à chaque chantier",
    description:
      "Aucun chantier ne ressemble vraiment au précédent : les matériaux changent, les quantités changent, les contraintes d'accès ou de délai aussi. Rédiger un devis clair et chiffré juste après une visite, souvent en fin de journée, demande de reprendre chaque poste en détail. Un oubli ou une approximation se paie ensuite sur le chantier, en temps perdu à réexpliquer ou en frais non prévus qui restent à votre charge.",
  },
  {
    icon: Camera,
    title: "Un travail bien fait qui ne se voit pas assez",
    description:
      "Votre réputation se construit sur ce que vous livrez, mais encore faut-il que ça se voie. Prendre une photo au bon moment, écrire une légende qui explique le chantier, mettre à jour un site ou répondre à un avis client : ce sont des réflexes de communication qui ne viennent pas naturellement quand le métier, c'est avant tout du travail manuel et technique. Résultat, de très bons artisans restent invisibles pendant qu'un concurrent moins qualifié capte l'attention simplement parce qu'il en parle davantage.",
  },
  {
    icon: MessageSquare,
    title: "Des demandes clients qui arrivent à toute heure",
    description:
      "Un appel manqué pendant un chantier, un SMS envoyé le soir, un message sur les réseaux sociaux ou via le site : les demandes de devis et les questions de disponibilité arrivent en continu et rarement au bon moment. Ne pas répondre assez vite fait souvent perdre le client au profit d'un artisan plus réactif, mais tout traiter correctement une fois rentré chez soi grignote le temps qui devrait être celui du repos.",
  },
];

const learnings = [
  {
    icon: FileText,
    title: "Rédiger un devis complet en quelques minutes",
    description:
      "À partir d'une description du chantier (matériaux, tâches, contraintes constatées sur place), vous obtenez une trame de devis claire et détaillée à vérifier et ajuster, plutôt qu'à composer entièrement à la main.",
  },
  {
    icon: FileText,
    title: "Relancer une facture impayée sans y penser à chaque fois",
    description:
      "Vous préparez des messages de relance adaptés au ton que vous voulez garder avec vos clients, fermes sans être désagréables, à réutiliser dès qu'une échéance de paiement est dépassée.",
  },
  {
    icon: Camera,
    title: "Présenter vos réalisations pour qu'elles vous rapportent des clients",
    description:
      "Vous apprenez à transformer une photo de chantier terminé en une publication ou un texte de site qui donne envie de vous contacter, dans votre style, sans y passer votre soirée.",
  },
  {
    icon: MessageSquare,
    title: "Répondre à une demande client en quelques secondes",
    description:
      "Vous construisez des réponses types pour les situations qui reviennent (disponibilité, premier tarif indicatif, demande de photos avant devis), que vous personnalisez ensuite avant l'envoi.",
  },
];

const faqItems = [
  {
    question:
      "Je travaille seul, sans secrétaire ni service commercial. La formation est-elle adaptée ?",
    answer:
      "Oui, c'est même le cas le plus courant chez les artisans. Le programme est construit autour de vos tâches administratives réelles, celles que vous faites vous-même en plus du travail sur chantier, qu'elles concernent un jour un devis, un autre une relance ou une réponse client.",
  },
  {
    question:
      "L'IA peut-elle rédiger un devis à ma place, avec la valeur qu'il doit avoir ?",
    answer:
      "Non, et ce n'est pas l'objectif. L'IA vous aide à structurer et à rédiger le contenu d'un devis, mais le chiffrage, les mentions obligatoires et l'engagement pris auprès du client restent entièrement de votre responsabilité. La formation montre justement comment vérifier ce que produit l'IA avant de l'envoyer.",
  },
  {
    question: "Je ne suis pas à l'aise avec les outils numériques, est-ce un problème ?",
    answer:
      "Non. On part de votre niveau réel, sans jargon technique, et on avance pas à pas sur votre téléphone ou votre ordinateur habituel. L'objectif est que vous repartiez avec des réflexes simples que vous saurez réutiliser seul dès le lendemain.",
  },
];

export default function EntreprisesArtisansPage() {
  const formationEquipe = getOffer("formation-equipe");
  const relatedOffers = [formationEquipe].filter(
    (o): o is NonNullable<typeof o> => Boolean(o)
  );

  return (
    <>
      {relatedOffers.length > 0 && <JsonLd data={coursesJsonLd(relatedOffers)} />}

      <PageHeader
        eyebrow="Entreprises · Artisans"
        title="L'IA au service des artisans, pas l'inverse"
        subtitle="Devis, factures, réalisations à mettre en avant, demandes clients à traiter : une formation construite autour de ce que vous faites vraiment entre deux chantiers."
        breadcrumb={[
          { name: "Entreprises", path: "/entreprises" },
          { name: "Artisans", path: "/entreprises/artisans" },
        ]}
      >
        <div className="mb-6 flex justify-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/15 text-brand-400">
            <Hammer size={26} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg">
            Demander un devis
            <ArrowRight size={18} />
          </ButtonLink>
          <ButtonLink href="#offres" variant="secondary" size="lg">
            Voir la formule
          </ButtonLink>
        </div>
      </PageHeader>

      {/* Les défis du secteur Artisans */}
      <Section>
        <SectionHeading
          eyebrow="Le quotidien de l'artisan"
          title="Les défis du secteur Artisans"
          subtitle="Trois tâches qui reviennent chaque semaine, en plus du travail sur chantier, et qui grignotent le temps qui devrait être le vôtre."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {challenges.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Ce que vous apprendrez */}
      <Section className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="Au programme"
          title="Ce que vous apprendrez"
          subtitle="Une formation construite sur vos propres devis, vos propres chantiers et vos échanges clients réels."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {learnings.map((l, i) => {
            const Icon = l.icon;
            return (
              <Reveal key={l.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {l.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {l.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-sm text-white/50">
            Une bonne partie de ces réflexes s&apos;appuient sur{" "}
            <Link href="/formations/chatgpt" className="text-brand-400 underline-offset-4 hover:underline">
              ChatGPT
            </Link>
            , un outil bien adapté à la rédaction rapide de devis, de messages clients et de
            textes pour présenter vos réalisations.
          </p>
        </Reveal>
      </Section>

      {/* Offre */}
      <Section id="offres">
        <SectionHeading
          eyebrow="Notre formule"
          title="Une formation construite autour de votre activité"
          subtitle="Un seul format, adapté que vous travailliez seul ou avec quelques compagnons. Devis clair sous 24 h."
        />
        {relatedOffers.length > 0 && (
          <div className="mx-auto mt-12 max-w-md">
            <Reveal>
              <OfferCard offer={relatedOffers[0]} />
            </Reveal>
          </div>
        )}
      </Section>

      {/* FAQ */}
      <Section className="bg-white/[0.02]">
        <SectionHeading eyebrow="Questions fréquentes" title="Avant de vous lancer" />
        <div className="mx-auto mt-12 max-w-2xl space-y-6">
          {faqItems.map((f) => (
            <Reveal key={f.question}>
              <div className="border-t border-white/10 pt-6">
                <h3 className="font-display text-base font-semibold">
                  {f.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {f.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-sm text-white/50">
            Vous exercez un autre métier manuel ou technique ?{" "}
            <Link href="/entreprises" className="text-brand-400 underline-offset-4 hover:underline">
              Découvrez nos formations par secteur d&apos;activité
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <FinalCta
        title="Prêt à passer moins de soirées sur l'administratif ?"
        subtitle="Décrivez-nous votre besoin, nous vous envoyons une proposition claire sous 24 h."
      />
    </>
  );
}
