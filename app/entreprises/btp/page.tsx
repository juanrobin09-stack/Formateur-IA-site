import Link from "next/link";
import {
  ArrowRight,
  FileSpreadsheet,
  Gavel,
  HardHat,
  ShieldCheck,
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
  title: "Formation IA BTP : devis, comptes-rendus et appels d'offres",
  description:
    "Formation IA pour les entreprises du BTP : rédiger devis et comptes-rendus de chantier, répondre plus vite aux appels d'offres, structurer le suivi de sécurité. Devis clair sous 24 h.",
  path: "/entreprises/btp",
});

const challenges = [
  {
    icon: FileSpreadsheet,
    title: "Des devis techniques et des comptes-rendus à rédiger hors du bureau",
    description:
      "Un devis de chantier ne se limite pas à un prix : il détaille des postes techniques, des quantités, des corps d'état, parfois des variantes selon ce qui est découvert sur place. Le compte-rendu quotidien suit la même logique, souvent rédigé en fin de journée, entre deux chantiers, à partir de notes prises sur le vif. Le vocabulaire doit rester précis, les aléas (retard, intempérie, réserve, modification demandée) doivent être consignés clairement, sans que cela prenne toute la soirée.",
  },
  {
    icon: Gavel,
    title: "Des appels d'offres qui se jouent sur la rapidité de réponse",
    description:
      "Répondre à un dossier de consultation implique de reprendre des pièces administratives et un mémoire technique qui se ressemblent d'un dossier à l'autre, tout en les adaptant précisément au cahier des charges du projet. Le délai de réponse est souvent serré et la concurrence y répond aussi. Le temps passé à remettre en forme des documents déjà rédigés ailleurs, c'est du temps qui ne sert pas à affiner l'offre elle-même.",
  },
  {
    icon: ShieldCheck,
    title: "Un suivi de sécurité qui doit rester traçable, chantier après chantier",
    description:
      "PPSPS, plans de prévention, causeries sécurité, comptes-rendus d'incident ou de quasi-accident : ces documents sont attendus par les donneurs d'ordre et les coordinateurs SPS, et ils changent de forme selon le chantier et l'interlocuteur. Les rédiger correctement, sans se répéter mot pour mot ni oublier un point, demande une rigueur que le rythme d'un chantier laisse rarement le temps de soigner.",
  },
];

const learnings = [
  {
    icon: FileSpreadsheet,
    title: "Structurer un devis détaillé à partir d'un descriptif de travaux",
    description:
      "Vous apprenez à transformer un relevé, un métré ou des notes de visite en un devis clair, poste par poste, avec un vocabulaire technique cohérent d'un chantier à l'autre.",
  },
  {
    icon: HardHat,
    title: "Rédiger un compte-rendu de chantier en quelques minutes",
    description:
      "À partir de notes rapides ou d'un point oral, vous obtenez un compte-rendu structuré, prêt à être envoyé au client ou au maître d'œuvre, avec les aléas de la journée correctement consignés.",
  },
  {
    icon: Gavel,
    title: "Construire un mémoire technique plus rapidement",
    description:
      "Vous apprenez à réutiliser les éléments d'un dossier précédent tout en les adaptant précisément au cahier des charges du nouvel appel d'offres, pour répondre dans les délais sans bâcler.",
  },
  {
    icon: ShieldCheck,
    title: "Formaliser vos documents de suivi de sécurité",
    description:
      "Vous voyez comment structurer PPSPS, plans de prévention et comptes-rendus de causerie de façon claire et exploitable, en gardant toujours la vérification humaine sur le fond.",
  },
];

const faqItems = [
  {
    question:
      "Nos comptes-rendus doivent respecter un format imposé par le maître d'ouvrage ou le maître d'œuvre. La formation en tient-elle compte ?",
    answer:
      "Oui. On travaille directement sur vos propres modèles et vos exigences de présentation, pas sur un format générique. L'objectif est que l'IA vous aide à remplir votre trame habituelle plus vite, pas à en imposer une nouvelle.",
  },
  {
    question:
      "Nous sommes une petite structure sans personnel administratif dédié. Est-ce adapté ?",
    answer:
      "C'est même le cas le plus fréquent. Dans beaucoup d'entreprises du BTP, les devis, les comptes-rendus et les réponses aux appels d'offres sont rédigés en soirée ou le week-end par le chef d'entreprise ou le conducteur de travaux. La formation vise justement à réduire ce temps administratif pris sur le reste.",
  },
  {
    question:
      "La sécurité sur chantier reste-t-elle de notre responsabilité si l'IA aide à rédiger les documents ?",
    answer:
      "Oui, entièrement. L'IA aide à structurer et à formuler les documents de suivi de sécurité, mais elle ne remplace ni votre analyse du chantier ni votre responsabilité réglementaire. Ce point est directement abordé en formation, pour que chaque document produit reste vérifié avant diffusion.",
  },
];

export default function EntreprisesBtpPage() {
  const formationEquipe = getOffer("formation-equipe");
  const relatedOffers = [formationEquipe].filter(
    (o): o is NonNullable<typeof o> => Boolean(o)
  );

  return (
    <>
      {relatedOffers.length > 0 && <JsonLd data={coursesJsonLd(relatedOffers)} />}

      <PageHeader
        eyebrow="Entreprises · BTP"
        title="Faire gagner du temps à vos équipes de chantier avec l'IA"
        subtitle="Devis techniques, comptes-rendus de chantier, réponses aux appels d'offres, suivi de sécurité : une formation construite autour des documents que vous rédigez chaque semaine, sur le terrain comme au bureau."
        breadcrumb={[
          { name: "Entreprises", path: "/entreprises" },
          { name: "BTP", path: "/entreprises/btp" },
        ]}
      >
        <div className="mb-6 flex justify-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/15 text-brand-400">
            <HardHat size={26} />
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

      {/* Les défis du secteur BTP */}
      <Section>
        <SectionHeading
          eyebrow="Le quotidien du chantier"
          title="Les défis du secteur BTP"
          subtitle="Trois tâches administratives qui reviennent sur chaque chantier, et qui empiètent souvent sur le temps de repos ou de préparation."
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
          subtitle="Une formation construite sur vos propres devis, vos propres chantiers et vos dossiers d'appel d'offres réels."
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
            Une bonne partie de ces réflexes s'appuient sur{" "}
            <Link href="/formations/chatgpt" className="text-brand-400 underline-offset-4 hover:underline">
              ChatGPT
            </Link>
            , un outil bien adapté à la rédaction rapide de devis, de comptes-rendus et de
            mémoires techniques.
          </p>
        </Reveal>
      </Section>

      {/* Offre */}
      <Section id="offres">
        <SectionHeading
          eyebrow="Notre formule"
          title="Une formation construite autour de vos chantiers"
          subtitle="Un seul format, adapté à votre activité, à vos équipes et à vos documents habituels. Devis clair sous 24 h."
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
            Votre activité relève d'un autre métier ?{" "}
            <Link href="/entreprises" className="text-brand-400 underline-offset-4 hover:underline">
              Découvrez nos formations par secteur d'activité
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <FinalCta
        title="Prêt à faire gagner du temps à vos équipes de chantier ?"
        subtitle="Décrivez-nous votre besoin, nous vous envoyons une proposition claire sous 24 h."
      />
    </>
  );
}
