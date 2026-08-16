import Link from "next/link";
import {
  ArrowRight,
  Check,
  MessageSquare,
  Briefcase,
  PenLine,
  Search,
  AlertTriangle,
  ShieldAlert,
  RefreshCw,
  HelpCircle,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { getOffer } from "@/lib/offers";
import { pageMetadata, coursesJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Formation ChatGPT : apprendre à l'utiliser pour votre métier",
  description:
    "Apprenez à utiliser ChatGPT efficacement : rédaction, gain de temps, automatisation de tâches. Formation individuelle ou en entreprise, à votre rythme, sans jargon.",
  path: "/formations/chatgpt",
});

const skills = [
  {
    icon: PenLine,
    title: "Écrire de meilleurs prompts",
    description:
      "La différence entre une réponse générique et une réponse vraiment utile tient souvent à la façon de formuler sa demande.",
  },
  {
    icon: Briefcase,
    title: "L'appliquer à votre métier",
    description:
      "Emails, comptes-rendus, annonces, devis, contenus… vous repartez avec des exemples construits sur vos propres dossiers.",
  },
  {
    icon: Search,
    title: "Repérer ses limites",
    description:
      "Savoir quand faire confiance à une réponse et quand la vérifier : ChatGPT est un outil, pas un oracle.",
  },
  {
    icon: MessageSquare,
    title: "L'intégrer à votre quotidien",
    description:
      "Des réflexes simples pour gagner du temps chaque semaine, sans bouleverser vos habitudes de travail.",
  },
];

const mistakes = [
  {
    icon: AlertTriangle,
    title: "Faire confiance sans vérifier",
    description:
      "ChatGPT peut se tromper avec assurance. Sur un fait précis, une date ou un chiffre, le réflexe de vérifier reste indispensable.",
  },
  {
    icon: HelpCircle,
    title: "Rester trop vague dans la demande",
    description:
      "Plus le contexte donné est précis (votre métier, votre destinataire, le ton souhaité), plus la réponse est directement exploitable.",
  },
  {
    icon: ShieldAlert,
    title: "Partager des informations sensibles",
    description:
      "Données clients, informations confidentielles de l'entreprise : on apprend à identifier ce qu'il vaut mieux ne pas transmettre.",
  },
  {
    icon: RefreshCw,
    title: "Abandonner après une seule mauvaise réponse",
    description:
      "Reformuler, préciser, corriger : la conversation s'affine. La première réponse est rarement la meilleure, et c'est normal.",
  },
];

const faqItems = [
  {
    question: "Faut-il déjà connaître ChatGPT avant de commencer ?",
    answer:
      "Non. La formation part de zéro si besoin : création de compte, prise en main de l'interface, puis usages concrets liés à votre métier.",
  },
  {
    question: "La formation ChatGPT est-elle vendue séparément ?",
    answer:
      "ChatGPT fait partie des outils couverts par nos formations, aux côtés de Claude, Gemini et les autres. Vous choisissez le format qui vous convient : cours particulier, atelier collectif ou programme entreprise.",
  },
  {
    question: "Est-ce adapté si mon entreprise a des consignes de confidentialité ?",
    answer:
      "Oui, c'est justement l'un des sujets abordés : quelles informations éviter de partager, et quelles alternatives existent selon votre contexte.",
  },
];

export default function FormationChatGptPage() {
  const coursParticulier = getOffer("cours-particulier");
  const formationEquipe = getOffer("formation-equipe");
  const relatedOffers = [coursParticulier, formationEquipe].filter(
    (o): o is NonNullable<typeof o> => Boolean(o)
  );

  return (
    <>
      {relatedOffers.length > 0 && <JsonLd data={coursesJsonLd(relatedOffers)} />}

      <PageHeader
        eyebrow="Formation ChatGPT"
        title="Apprendre à utiliser ChatGPT pour de vrai"
        subtitle="Pas une démo théorique : une formation pratique pour que ChatGPT devienne un outil que vous maîtrisez, sur vos propres tâches."
        breadcrumb={[
          { name: "Formations", path: "/formations" },
          { name: "ChatGPT", path: "/formations/chatgpt" },
        ]}
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/particuliers#offres" size="lg">
            Formation individuelle
            <ArrowRight size={18} />
          </ButtonLink>
          <ButtonLink href="/entreprises#offres" variant="secondary" size="lg">
            Formation en entreprise
          </ButtonLink>
        </div>
      </PageHeader>

      {/* Pourquoi apprendre ChatGPT */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-pretty font-display text-xl font-medium leading-snug text-white/90 sm:text-2xl">
              ChatGPT est aujourd&apos;hui l&apos;outil d&apos;IA générative le
              plus utilisé, aussi bien au travail qu&apos;au quotidien. Savoir
              s&apos;en servir correctement fait une vraie différence : entre
              une réponse approximative et un résultat réellement exploitable,
              il n&apos;y a souvent qu&apos;une question de méthode.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Ce que vous apprendrez */}
      <Section className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="Au programme"
          title="Ce que vous apprendrez"
          subtitle="Une formation concrète, pensée pour être utile dès la première séance."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Formats disponibles */}
      <Section>
        <SectionHeading
          eyebrow="Formats"
          title="Deux façons de se former à ChatGPT"
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl glass p-7">
              <h3 className="font-display text-lg font-semibold">
                En individuel
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                Cours particulier en visio ou à domicile (Gironde/Libournais),
                100 % centré sur votre situation.
              </p>
              <ul className="mt-4 space-y-2">
                {["1 h en tête-à-tête", "Programme sur votre objectif", "Séance découverte gratuite possible"].map(
                  (f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                      <Check size={15} className="mt-0.5 shrink-0 text-brand-400" />
                      {f}
                    </li>
                  )
                )}
              </ul>
              <ButtonLink href="/particuliers#offres" className="mt-6 w-full" size="md">
                Voir les formules particuliers
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex h-full flex-col rounded-2xl glass p-7">
              <h3 className="font-display text-lg font-semibold">
                En entreprise
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                Programme sur-mesure pour vos équipes, construit autour de vos
                cas d&apos;usage réels.
              </p>
              <ul className="mt-4 space-y-2">
                {["Programme adapté à votre secteur", "Présentiel ou visio", "Devis clair sous 24 h"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                    <Check size={15} className="mt-0.5 shrink-0 text-brand-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <ButtonLink href="/entreprises#offres" className="mt-6 w-full" size="md">
                Voir les formules entreprises
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Erreurs fréquentes */}
      <Section>
        <SectionHeading
          eyebrow="Conseils"
          title="Les erreurs les plus fréquentes avec ChatGPT"
          subtitle="Ce qu'on corrige en premier, quel que soit votre niveau de départ."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {mistakes.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {m.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-sm text-white/50">
            Pour aller plus loin, notre article{" "}
            <Link
              href="/blog/comment-utiliser-chatgpt-au-travail"
              className="text-brand-400 underline-offset-4 hover:underline"
            >
              Comment utiliser ChatGPT au travail
            </Link>{" "}
            détaille ces bonnes pratiques.
          </p>
        </Reveal>
      </Section>

      {/* FAQ ChatGPT */}
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
            D&apos;autres questions ? Consultez notre{" "}
            <Link href="/tarifs" className="text-brand-400 underline-offset-4 hover:underline">
              FAQ complète
            </Link>{" "}
            ou{" "}
            <Link href="/contact" className="text-brand-400 underline-offset-4 hover:underline">
              contactez-nous
            </Link>
            .
          </p>
        </Reveal>
      </Section>
    </>
  );
}
