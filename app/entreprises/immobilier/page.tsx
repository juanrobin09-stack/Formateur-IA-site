import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  FileText,
  Home,
  PenLine,
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
  title: "Formation IA immobilier : annonces, visites et diagnostics",
  description:
    "Formation IA pour les agences immobilières : rédiger des annonces, préparer les visites, relancer les clients et synthétiser les diagnostics. Programme sur-mesure, devis sous 24 h.",
  path: "/entreprises/immobilier",
});

const challenges = [
  {
    icon: PenLine,
    title: "Rédiger une annonce qui donne envie de visiter",
    description:
      "Décrire un bien ne se résume pas à lister une surface et un nombre de pièces. Il faut trouver le bon angle selon le type de bien et l'acheteur visé, varier le ton d'un mandat à l'autre pour ne pas donner l'impression de copier-coller, puis décliner le même texte sur plusieurs supports : portails d'annonces, réseaux sociaux, vitrine d'agence. Fait à la main, cet exercice se répète pour chaque nouveau bien et prend du temps qui pourrait être consacré aux clients.",
  },
  {
    icon: CalendarClock,
    title: "Préparer une visite et relancer sans lourdeur",
    description:
      "Avant un rendez-vous, il faut rassembler les informations utiles sur le bien et anticiper les questions probables de l'acheteur ou du locataire. Après la visite, la relance doit arriver au bon moment, avec un message qui tient compte de ce qui a été échangé sur place, sans donner l'impression d'un mail automatique envoyé à tout le monde de la même façon.",
  },
  {
    icon: FileText,
    title: "Rendre un diagnostic technique compréhensible",
    description:
      "Un rapport de diagnostic (DPE, amiante, électricité, gaz…) est dense et rédigé dans un vocabulaire technique. Le client, lui, veut surtout savoir ce que cela change concrètement pour son achat ou sa location. Reformuler ces documents à la main, dossier après dossier, prend du temps et demande de la rigueur pour ne rien déformer.",
  },
];

const learnings = [
  {
    title: "Générer des annonces variées en quelques minutes",
    description:
      "Vous apprenez à formuler une demande précise pour obtenir une description adaptée au bien, au profil recherché et au support de diffusion, puis à ajuster le résultat plutôt qu'à repartir de zéro à chaque fois.",
  },
  {
    title: "Préparer chaque visite sans y passer la soirée",
    description:
      "À partir des informations dont vous disposez déjà (fiche du bien, historique du mandat), vous construisez rapidement un support de visite clair et une liste des points à aborder avec le client.",
  },
  {
    title: "Écrire des relances qui donnent envie de répondre",
    description:
      "Vous travaillez sur des messages de suivi personnalisés selon le profil du client et les retours de la visite, dans le ton de votre agence, plutôt qu'à partir de modèles figés envoyés à l'identique.",
  },
  {
    title: "Synthétiser diagnostics et comptes-rendus",
    description:
      "Vous apprenez à extraire l'essentiel d'un rapport technique ou d'un compte-rendu de négociation pour le rendre lisible par vos clients, sans jamais laisser l'IA remplacer votre propre vérification.",
  },
];

const faqItems = [
  {
    question:
      "Nos annonces doivent comporter des mentions obligatoires (DPE, surface Carrez…). L'IA peut-elle s'en charger seule ?",
    answer:
      "Non, et ce n'est pas l'objectif. L'IA vous aide à rédiger la partie descriptive et argumentée de l'annonce. Les mentions légales obligatoires restent de votre responsabilité et doivent toujours être vérifiées avant publication. Pendant la formation, on voit justement comment structurer vos annonces pour ne jamais les oublier.",
  },
  {
    question:
      "Cela s'applique-t-il aussi à la gestion locative, ou seulement à la transaction ?",
    answer:
      "Les deux. Les mêmes méthodes servent pour la relation avec les propriétaires bailleurs, les comptes-rendus de gestion ou les réponses aux locataires. Le programme est construit autour de votre activité réelle, qu'elle soit centrée sur la transaction, la location ou la gestion.",
  },
  {
    question:
      "Nos agents ont chacun leur façon de rédiger. La formation va-t-elle uniformiser leur style ?",
    answer:
      "Non. L'objectif est de donner à chacun des repères communs, comme les mentions à ne jamais oublier ou la structure d'une bonne annonce, que chaque agent adapte ensuite à sa propre manière d'écrire. Vous gardez des styles différents, mais une cohérence de fond dans ce que vous publiez.",
  },
];

export default function EntreprisesImmobilierPage() {
  const formationEquipe = getOffer("formation-equipe");
  const relatedOffers = formationEquipe ? [formationEquipe] : [];

  return (
    <>
      {relatedOffers.length > 0 && <JsonLd data={coursesJsonLd(relatedOffers)} />}

      <PageHeader
        eyebrow="Immobilier"
        title="La formation IA pensée pour les professionnels de l'immobilier"
        subtitle="Rédaction d'annonces, préparation des visites, relances et synthèse des diagnostics : une formation construite autour des tâches que votre agence traite chaque semaine."
        breadcrumb={[
          { name: "Entreprises", path: "/entreprises" },
          { name: "Immobilier", path: "/entreprises/immobilier" },
        ]}
      >
        <div className="mb-6 flex justify-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/15 text-brand-400">
            <Home size={26} />
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

      {/* Les défis du secteur */}
      <Section>
        <SectionHeading
          eyebrow="Le quotidien de l'agence"
          title="Les défis du secteur immobilier"
          subtitle="Trois tâches qui reviennent chaque semaine, et qui prennent du temps sans forcément faire avancer une vente ou une location."
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
          subtitle="Une formation construite sur vos propres biens, vos propres mandats et vos outils habituels."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {learnings.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl glass p-6">
                <h3 className="font-display text-lg font-semibold">
                  {l.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {l.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-sm text-white/50">
            La plupart de ces exercices s&apos;appuient sur{" "}
            <Link href="/formations/chatgpt" className="text-brand-400 underline-offset-4 hover:underline">
              ChatGPT
            </Link>
            , l&apos;outil que nous détaillons dans notre formation dédiée.
          </p>
        </Reveal>
      </Section>

      {/* Offre */}
      <Section id="offres">
        <SectionHeading
          eyebrow="Notre formule"
          title="Une formation construite autour de vos dossiers"
          subtitle="Un seul format, pensé pour s'adapter à votre activité plutôt que l'inverse."
        />
        {formationEquipe && (
          <div className="mx-auto mt-12 max-w-md">
            <Reveal>
              <OfferCard offer={formationEquipe} />
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
            Vous gérez une équipe dans un autre domaine ? Retrouvez tous nos{" "}
            <Link href="/entreprises" className="text-brand-400 underline-offset-4 hover:underline">
              secteurs d&apos;intervention pour les entreprises
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <FinalCta title="Prêt à faire gagner du temps à votre agence ?" />
    </>
  );
}
