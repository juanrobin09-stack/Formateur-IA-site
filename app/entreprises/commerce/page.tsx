import Link from "next/link";
import {
  ArrowRight,
  Megaphone,
  MessageCircle,
  Share2,
  Store,
  Tags,
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
  title: "Formation IA commerce : fiches produits, campagnes et service client",
  description:
    "Formation IA pour les commerces et boutiques en ligne : rédiger des fiches produits, construire des campagnes marketing et e-mailing, gagner du temps sur le service client. Devis clair sous 24 h.",
  path: "/entreprises/commerce",
});

const challenges = [
  {
    icon: Tags,
    title: "Rédiger des fiches produits qui donnent envie d'acheter",
    description:
      "Un catalogue s'agrandit régulièrement, mais rédiger une fiche produit ne se limite pas à recopier des caractéristiques techniques. Il faut donner envie, éviter que deux descriptions se ressemblent trop d'un article à l'autre, et parfois adapter le texte selon le support de vente : site marchand, marketplace ou réseau social. Fait à la main, produit après produit, cet exercice ralentit vite la mise en ligne d'une nouvelle collection.",
  },
  {
    icon: Megaphone,
    title: "Multiplier les campagnes sans multiplier le temps passé",
    description:
      "Soldes, nouvelle collection, relance de panier abandonné, newsletter du mois : chaque opération commerciale suppose d'écrire plusieurs versions d'un même message, adaptées au segment de clientèle et au canal utilisé. Partir d'une page blanche à chaque campagne, trouver un objet d'e-mail qui capte l'attention et décliner le message sur plusieurs formats prend un temps que peu de commerces peuvent se permettre d'y consacrer seuls.",
  },
  {
    icon: MessageCircle,
    title: "Répondre vite à des questions qui reviennent tout le temps",
    description:
      "Suivi de commande, délai de livraison, politique de retour, disponibilité d'une taille ou d'une couleur : une grande partie des messages reçus par un commerce se ressemblent d'un client à l'autre. Rédiger chaque réponse de zéro prend du temps, surtout pendant les pics d'activité ou les périodes de soldes, alors que le client attend une réponse rapide et qui tient compte de sa situation précise.",
  },
];

const learnings = [
  {
    icon: Tags,
    title: "Générer des fiches produits uniques à partir d'une liste de caractéristiques",
    description:
      "Vous apprenez à transformer une fiche technique brute (matière, taille, coloris, usage) en une description qui donne envie d'acheter, tout en gardant un style cohérent d'un produit à l'autre et sans reproduire le même texte d'une fiche à l'autre.",
  },
  {
    icon: Megaphone,
    title: "Construire une campagne e-mailing complète en une session",
    description:
      "Objet, accroche, corps du message décliné pour plusieurs segments de clientèle : vous voyez comment produire rapidement plusieurs versions d'une même campagne, prêtes à être ajustées puis envoyées.",
  },
  {
    icon: MessageCircle,
    title: "Préparer des réponses réutilisables pour le service client",
    description:
      "Vous construisez une bibliothèque de réponses aux questions les plus fréquentes (livraison, retour, disponibilité), que votre équipe peut adapter en quelques instants à chaque situation, sans repartir de zéro à chaque message.",
  },
  {
    icon: Share2,
    title: "Décliner vos contenus produits sur les réseaux sociaux",
    description:
      "À partir d'une fiche produit existante, vous apprenez à générer rapidement des légendes et des accroches adaptées à Instagram, Facebook ou TikTok, dans le ton de votre enseigne, sans reprendre la rédaction depuis le début à chaque publication.",
  },
];

const faqItems = [
  {
    question:
      "Nous vendons sur plusieurs canaux (notre site, une marketplace, les réseaux sociaux). La formation tient-elle compte de ces formats différents ?",
    answer:
      "Oui. On travaille directement sur vos fiches produits et vos contenus réels, en tenant compte des contraintes propres à chaque canal de vente : longueur de texte, ton attendu, mise en forme. L'objectif est que vous sachiez adapter rapidement un même contenu à plusieurs formats, sans repartir de zéro à chaque fois.",
  },
  {
    question:
      "Notre catalogue compte un grand nombre de références. Est-ce vraiment gérable avec l'IA ?",
    answer:
      "C'est justement le cas où la formation apporte le plus de valeur. Un catalogue étendu est ce qui rend la rédaction fiche par fiche difficile à tenir dans la durée. On construit avec vous une méthode répétable, que votre équipe applique ensuite elle-même à l'ensemble du catalogue, produit après produit.",
  },
  {
    question:
      "Nous avons une charte de marque avec un ton bien précis. L'IA ne va-t-elle pas uniformiser nos contenus ?",
    answer:
      "Non, c'est même l'un des points de départ de la formation. On travaille à partir de votre charte et de vos contenus existants pour que les textes générés respectent votre vocabulaire et vos codes de marque, plutôt que d'imposer un style neutre et générique.",
  },
];

export default function EntreprisesCommercePage() {
  const formationEquipe = getOffer("formation-equipe");
  const relatedOffers = [formationEquipe].filter(
    (o): o is NonNullable<typeof o> => Boolean(o)
  );

  return (
    <>
      {relatedOffers.length > 0 && <JsonLd data={coursesJsonLd(relatedOffers)} />}

      <PageHeader
        eyebrow="Entreprises · Commerce"
        title="L'IA au service de vos ventes, de vos campagnes et de votre service client"
        subtitle="Fiches produits, campagnes marketing, e-mailing, service client : une formation construite autour des contenus que votre commerce produit chaque semaine, pour vendre plus vite et répondre plus vite."
        breadcrumb={[
          { name: "Entreprises", path: "/entreprises" },
          { name: "Commerce", path: "/entreprises/commerce" },
        ]}
      >
        <div className="mb-6 flex justify-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/15 text-brand-400">
            <Store size={26} />
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

      {/* Les défis du secteur Commerce */}
      <Section>
        <SectionHeading
          eyebrow="Le quotidien du commerce"
          title="Les défis du secteur Commerce"
          subtitle="Trois tâches qui reviennent chaque semaine, en boutique comme en ligne, et qui prennent du temps sans forcément faire avancer une vente."
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
          subtitle="Une formation construite sur vos propres fiches produits, vos campagnes et vos échanges clients réels."
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
            , un outil bien adapté à la rédaction rapide de fiches produits, de campagnes et de
            réponses client.
          </p>
        </Reveal>
      </Section>

      {/* Offre */}
      <Section id="offres">
        <SectionHeading
          eyebrow="Notre formule"
          title="Une formation construite autour de votre activité commerciale"
          subtitle="Un seul format, adapté à votre équipe, votre catalogue et vos outils habituels. Devis clair sous 24 h."
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
            Votre activité relève d&apos;un autre métier ?{" "}
            <Link href="/entreprises" className="text-brand-400 underline-offset-4 hover:underline">
              Découvrez nos formations par secteur d&apos;activité
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <FinalCta
        title="Prêt à faire gagner du temps à vos équipes commerciales ?"
        subtitle="Décrivez-nous votre besoin, nous vous envoyons une proposition claire sous 24 h."
      />
    </>
  );
}
