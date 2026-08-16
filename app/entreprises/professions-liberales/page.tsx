import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  PenLine,
  Search,
  ShieldCheck,
  Stethoscope,
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
  title: "Formation IA professions libérales : dossiers, courriers et veille",
  description:
    "Formation IA pour les professions libérales (avocats, experts-comptables, consultants, professions de santé...) : synthétiser des dossiers, rédiger courriers et documents, organiser une veille fiable. Devis clair sous 24 h.",
  path: "/entreprises/professions-liberales",
});

const challenges = [
  {
    icon: ClipboardList,
    title: "Synthétiser un dossier volumineux sans y passer la soirée",
    description:
      "Un dossier client, qu'il s'agisse d'un contrat, d'un bilan, d'une expertise ou d'un échange de correspondance étalé sur plusieurs mois, peut représenter des dizaines de pages à relire avant un rendez-vous ou une échéance. En extraire les points essentiels sans perdre une clause, un chiffre ou un détail important demande une lecture attentive que le rythme d'un cabinet laisse rarement le temps de faire sereinement entre deux dossiers.",
  },
  {
    icon: PenLine,
    title: "Rédiger des courriers qui restent précis malgré la répétition",
    description:
      "Mise en demeure, courrier de suivi, compte-rendu de consultation, note de synthèse à destination d'un client : ces écrits reviennent sans cesse, avec une structure et un vocabulaire proches d'un dossier à l'autre. Reprendre un modèle, l'adapter précisément à la situation et vérifier qu'aucune formule ne sonne comme un copier-coller mal ajusté prend un temps qui pourrait être consacré à l'analyse du dossier lui-même.",
  },
  {
    icon: Search,
    title: "Suivre une actualité réglementaire ou technique qui ne s'arrête jamais",
    description:
      "Textes de loi, jurisprudence, normes professionnelles, recommandations d'usage : ce qui était valable l'an dernier ne l'est parfois plus aujourd'hui. Faire cette veille sérieusement, en distinguant une source fiable d'une information approximative trouvée en ligne, demande un temps de recherche récurrent qui s'ajoute à une charge de dossiers déjà pleine.",
  },
];

const learnings = [
  {
    icon: ClipboardList,
    title: "Résumer un dossier long en une note exploitable",
    description:
      "Vous apprenez à formuler une demande précise pour obtenir, à partir d'un dossier volumineux, une synthèse fidèle et structurée que vous relisez et complétez, plutôt qu'à tout reparcourir en détail avant chaque échéance.",
  },
  {
    icon: PenLine,
    title: "Produire courriers et documents sans repartir de zéro",
    description:
      "Vous construisez des trames adaptées à vos écrits les plus fréquents (courrier, compte-rendu, note de synthèse), que vous personnalisez ensuite dossier par dossier, dans le ton et le vocabulaire de votre cabinet.",
  },
  {
    icon: Search,
    title: "Organiser une veille régulière sur votre domaine",
    description:
      "Vous mettez en place une méthode simple pour suivre l'actualité qui concerne votre activité, repérer ce qui mérite votre attention et écarter le reste, sans y consacrer des heures chaque semaine.",
  },
  {
    icon: ShieldCheck,
    title: "Utiliser l'IA sans mettre en danger le secret professionnel",
    description:
      "Vous apprenez à distinguer ce qu'il est raisonnable de transmettre à un outil d'IA et ce qui doit rester anonymisé ou en dehors, pour garder un usage compatible avec vos obligations de confidentialité.",
  },
];

const faqItems = [
  {
    question:
      "Le secret professionnel nous impose des règles strictes. L'usage de l'IA est-il compatible ?",
    answer:
      "C'est un point abordé dès le premier échange. La formation explique quelles informations peuvent raisonnablement être transmises à un outil d'IA, comment anonymiser un dossier avant de l'utiliser, et dans quels cas il vaut mieux s'en abstenir. L'objectif n'est jamais de contourner vos obligations, mais de les respecter tout en gagnant du temps.",
  },
  {
    question:
      "Nous ne sommes pas tous du même métier : avocats, experts-comptables, consultants, professions de santé... La formation est-elle vraiment adaptée à chacun ?",
    answer:
      "Oui. Le programme est construit à partir de vos propres dossiers, de vos écrits habituels et du vocabulaire de votre activité, pas sur un contenu générique. Un cabinet d'avocats et un cabinet d'expertise-comptable n'auront pas la même formation, même si la méthode de départ se ressemble.",
  },
  {
    question: "Peut-on faire confiance à l'IA pour la veille réglementaire ou la recherche ?",
    answer:
      "Non, pas telle quelle. L'IA accélère la recherche et aide à repérer ce qui mérite d'être approfondi, mais elle peut se tromper ou citer une source qui n'existe pas. La vérification humaine sur toute information utilisée dans un dossier reste indispensable, et c'est un réflexe installé dès le début de la formation.",
  },
];

export default function EntreprisesProfessionsLiberalesPage() {
  const formationEquipe = getOffer("formation-equipe");
  const relatedOffers = [formationEquipe].filter(
    (o): o is NonNullable<typeof o> => Boolean(o)
  );

  return (
    <>
      {relatedOffers.length > 0 && <JsonLd data={coursesJsonLd(relatedOffers)} />}

      <PageHeader
        eyebrow="Entreprises · Professions libérales"
        title="L'IA au service des professions libérales, sans jamais remplacer votre expertise"
        subtitle="Synthèse de dossiers, rédaction de courriers, veille réglementaire : une formation construite autour des documents que vous traitez chaque semaine, dans le respect du secret professionnel."
        breadcrumb={[
          { name: "Entreprises", path: "/entreprises" },
          { name: "Professions libérales", path: "/entreprises/professions-liberales" },
        ]}
      >
        <div className="mb-6 flex justify-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600/15 text-brand-400">
            <Stethoscope size={26} />
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

      {/* Les défis du secteur Professions libérales */}
      <Section>
        <SectionHeading
          eyebrow="Le quotidien du cabinet"
          title="Les défis du secteur Professions libérales"
          subtitle="Trois tâches qui reviennent dans la plupart des cabinets, quelle que soit la profession exercée, et qui empiètent sur le temps consacré aux clients."
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
          subtitle="Une formation construite sur vos propres dossiers, vos propres courriers et vos sources de veille habituelles."
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
            Une bonne partie de ces usages s&apos;appuient sur{" "}
            <Link href="/formations/chatgpt" className="text-brand-400 underline-offset-4 hover:underline">
              ChatGPT
            </Link>
            , un outil particulièrement adapté à la synthèse de texte long et à la rédaction de
            courriers professionnels.
          </p>
        </Reveal>
      </Section>

      {/* Offre */}
      <Section id="offres">
        <SectionHeading
          eyebrow="Notre formule"
          title="Une formation construite autour de vos dossiers"
          subtitle="Un seul format, adapté à votre cabinet, à votre profession et à vos documents habituels. Devis clair sous 24 h."
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
            Vous exercez une autre profession libérale, ou un métier différent ?{" "}
            <Link href="/entreprises" className="text-brand-400 underline-offset-4 hover:underline">
              Découvrez nos programmes par secteur d&apos;activité
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <FinalCta
        title="Prêt à passer moins de soirées sur la rédaction et la veille ?"
        subtitle="Décrivez-nous votre besoin, nous vous envoyons une proposition claire sous 24 h."
      />
    </>
  );
}
