import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  ShoppingCart,
  Star,
  UtensilsCrossed,
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
  title: "Formation IA pour la restauration : cartes, avis clients, achats",
  description:
    "Formez votre équipe en restauration à l'IA générative : rédaction de cartes et fiches plats, réponses aux avis clients, planification des achats. Devis clair sous 24 h.",
  path: "/entreprises/restauration",
});

const challenges = [
  {
    icon: ClipboardList,
    title: "Des cartes et fiches plats à tenir à jour en permanence",
    description:
      "Un plat qui change au gré des arrivages, une carte de saison à réécrire, des descriptions à décliner pour la salle, le site et les plateformes de livraison : rédiger et actualiser ces contenus prend du temps, souvent en fin de service, au moment où la précision, notamment sur les allergènes, doit pourtant rester irréprochable.",
  },
  {
    icon: Star,
    title: "Des avis et réseaux sociaux à suivre entre deux services",
    description:
      "Un avis élogieux ou une critique se joue en quelques lignes publiées à tout moment de la journée. Y répondre vite, avec le bon ton et sans se répéter, demande du recul que le rythme du service laisse rarement. Côté réseaux sociaux, publier régulièrement pour remplir la salle en semaine passe souvent après tout le reste.",
  },
  {
    icon: ShoppingCart,
    title: "Des commandes à ajuster sans filet",
    description:
      "Combien de couverts prévoir, quelles quantités commander selon la saison, la météo ou le jour de la semaine : ces arbitrages reposent souvent sur l'expérience et quelques notes éparses. Une commande trop large finit en pertes, une commande trop juste et un plat disparaît de la carte en plein service.",
  },
];

const learnings = [
  {
    icon: ClipboardList,
    title: "Rédiger cartes, menus et fiches plats plus vite",
    description:
      "Générer une première version de description, l'adapter à chaque support (carte, site, applications de livraison) et la corriger en quelques minutes plutôt qu'en une soirée entière.",
  },
  {
    icon: Star,
    title: "Répondre aux avis avec le bon ton, en quelques minutes",
    description:
      "Construire des réponses adaptées à chaque avis, positif ou négatif, qui respectent le ton de votre établissement, sans y consacrer votre temps de pause.",
  },
  {
    icon: ShoppingCart,
    title: "Structurer vos commandes et le suivi des stocks",
    description:
      "Mettre en place des routines simples avec l'IA pour organiser vos commandes fournisseurs, croiser votre carte avec vos stocks et repérer plus tôt ce qui doit être ajusté.",
  },
  {
    icon: UtensilsCrossed,
    title: "Gagner du temps sur l'administratif du quotidien",
    description:
      "Plannings d'équipe, messages aux fournisseurs, comptes-rendus de service : les mêmes réflexes d'écriture assistée par l'IA s'appliquent à toutes vos tâches répétitives.",
  },
];

const faqItems = [
  {
    question: "Mon équipe en cuisine et en salle n'a jamais utilisé l'IA, est-ce gênant ?",
    answer:
      "Non. La formation part du niveau réel de chaque personne, sans jargon technique. L'objectif est que chacun reparte avec des réflexes simples, utilisables dès le service suivant.",
  },
  {
    question: "Peut-on organiser la formation en dehors des heures de service ?",
    answer:
      "Oui. On cale ensemble un créneau qui perturbe le moins possible votre activité : en coupure, avant l'ouverture ou un jour de fermeture, en présentiel ou en visio.",
  },
  {
    question: "Nos recettes et nos contrats fournisseurs sont sensibles : est-ce pris en compte ?",
    answer:
      "C'est justement l'un des sujets abordés en formation : quelles informations éviter de transmettre à un outil d'IA, et comment en tirer profit sans exposer vos données sensibles.",
  },
];

export default function EntreprisesRestaurationPage() {
  const formationEquipe = getOffer("formation-equipe");
  const relatedOffers = [formationEquipe].filter(
    (o): o is NonNullable<typeof o> => Boolean(o)
  );

  return (
    <>
      {relatedOffers.length > 0 && <JsonLd data={coursesJsonLd(relatedOffers)} />}

      <PageHeader
        eyebrow="Entreprises · Restauration"
        title="Former votre équipe de restauration à l'IA générative"
        subtitle="Cartes et fiches plats, avis clients, gestion des achats : une formation construite sur vos vraies tâches, pas sur des exemples génériques."
        breadcrumb={[
          { name: "Entreprises", path: "/entreprises" },
          { name: "Restauration", path: "/entreprises/restauration" },
        ]}
      >
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

      {/* Défis du secteur */}
      <Section>
        <SectionHeading
          eyebrow="Votre métier"
          title="Les défis du secteur Restauration"
          subtitle="Trois tâches qui reviennent chaque semaine, et qui prennent plus de temps qu'elles ne devraient."
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
          title="Ce que votre équipe apprendra"
          subtitle="Une formation pratique, construite sur vos cartes, vos avis et vos commandes réelles."
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
            Votre équipe sera notamment formée à{" "}
            <Link href="/formations/chatgpt" className="text-brand-400 underline-offset-4 hover:underline">
              ChatGPT
            </Link>
            , un outil particulièrement adapté à la rédaction rapide de contenus pour la salle,
            la carte et les réseaux sociaux.
          </p>
        </Reveal>
      </Section>

      {/* Offre */}
      <Section id="offres">
        <SectionHeading
          eyebrow="Notre formule"
          title="Une formation pensée pour votre établissement"
          subtitle="Programme construit autour de vos cartes, vos avis et vos habitudes d'achat. Devis clair sous 24 h."
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
            Vous gérez un autre type d&apos;établissement ?{" "}
            <Link href="/entreprises" className="text-brand-400 underline-offset-4 hover:underline">
              Découvrez nos formations par secteur d&apos;activité
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <FinalCta title="Prêt à faire gagner du temps à votre équipe ?" />
    </>
  );
}
