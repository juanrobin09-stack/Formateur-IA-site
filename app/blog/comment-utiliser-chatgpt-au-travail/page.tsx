import Link from "next/link";
import {
  Mail,
  FileText,
  Lightbulb,
  LayoutList,
  SpellCheck,
  AlertTriangle,
  ShieldAlert,
  HelpCircle,
  Eye,
  Info,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { getOffer } from "@/lib/offers";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const description =
  "Guide pratique pour utiliser ChatGPT au travail : usages concrets, méthode pour bien formuler ses demandes, erreurs à éviter et limites à connaître.";

export const metadata = pageMetadata({
  title: "Comment utiliser ChatGPT au travail",
  description,
  path: "/blog/comment-utiliser-chatgpt-au-travail",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment utiliser ChatGPT au travail",
  description,
  datePublished: "2026-08-16",
  dateModified: "2026-08-16",
  author: { "@type": "Organization", name: site.name },
  publisher: { "@type": "Organization", name: site.name },
};

const usages = [
  {
    icon: Mail,
    title: "Rédiger des emails",
    description:
      "Un brouillon pour une relance, une réponse délicate ou un message professionnel. ChatGPT propose une première version que vous ajustez ensuite au ton juste.",
  },
  {
    icon: FileText,
    title: "Synthétiser un document",
    description:
      "Coller un texte long (rapport, compte-rendu, article) et demander un résumé structuré fait gagner du temps de lecture, surtout sur les documents denses.",
  },
  {
    icon: Lightbulb,
    title: "Trouver des idées",
    description:
      "Demander plusieurs pistes sur un sujet précis (nom de projet, angle de communication, plan d'action) donne une base à trier et à affiner ensuite.",
  },
  {
    icon: LayoutList,
    title: "Structurer ses idées",
    description:
      "Transformer des notes en vrac en plan clair, avec une introduction, des parties et une conclusion. Utile avant une présentation ou un document long.",
  },
  {
    icon: SpellCheck,
    title: "Relire et corriger",
    description:
      "Repérer les fautes, raccourcir une phrase trop longue, ou vérifier que le ton correspond bien au destinataire avant l'envoi.",
  },
];

const method = [
  {
    title: "Donnez du contexte",
    description:
      "Précisez votre métier, la situation et à qui s'adresse la réponse. Plus le contexte est clair, plus la réponse colle à votre besoin.",
  },
  {
    title: "Dites le résultat attendu",
    description:
      "Un email court, une liste à puces, un plan en trois parties : indiquez le format que vous voulez obtenir, pas seulement le sujet.",
  },
  {
    title: "Précisez le ton",
    description:
      "Formel, direct, chaleureux : le ton demandé change complètement la réponse. Ne laissez pas ChatGPT le deviner à votre place.",
  },
  {
    title: "Reformulez et précisez",
    description:
      "La première réponse est un point de départ. Demandez de raccourcir, de préciser un point ou de changer d'angle jusqu'à obtenir ce qu'il vous faut.",
  },
];

const mistakes = [
  {
    icon: AlertTriangle,
    title: "Faire confiance sans vérifier",
    description:
      "ChatGPT peut se tromper tout en semblant sûr de lui. Sur un chiffre, une date ou une référence précise, la vérification reste indispensable avant de vous en servir.",
  },
  {
    icon: ShieldAlert,
    title: "Partager des informations confidentielles",
    description:
      "Données clients, contrats, informations internes sensibles : ce qui est écrit dans une conversation ne doit jamais inclure ce que vous ne voudriez pas voir sortir de l'entreprise.",
  },
  {
    icon: HelpCircle,
    title: "Rester trop vague",
    description:
      "Une demande générale donne une réponse générale. Sans contexte ni objectif précis, ChatGPT ne peut pas deviner ce qui compte vraiment pour vous.",
  },
  {
    icon: Eye,
    title: "Ne pas relire avant d'envoyer",
    description:
      "Un email ou un document généré doit toujours être relu avant diffusion. C'est vous qui restez responsable du contenu final, pas l'outil.",
  },
];

const limits = [
  {
    title: "Les réponses peuvent contenir des erreurs",
    description:
      "ChatGPT peut affirmer une information fausse avec assurance : c'est ce qu'on appelle une hallucination. Toute donnée précise doit être vérifiée avant d'être utilisée.",
  },
  {
    title: "Il ne connaît pas votre contexte interne",
    description:
      "Sauf si vous le lui fournissez, ChatGPT ignore vos process, vos documents ou l'historique de vos clients. La qualité de la réponse dépend directement de ce que vous lui donnez.",
  },
  {
    title: "Il ne remplace pas une expertise pointue",
    description:
      "Sur un sujet juridique, comptable ou médical précis, ChatGPT peut aider à défricher le sujet, mais il ne remplace pas l'avis d'un professionnel qualifié.",
  },
  {
    title: "La confidentialité n'est jamais totalement garantie",
    description:
      "Considérez que ce que vous écrivez peut être conservé par l'outil. Évitez d'y mettre des informations que vous ne voudriez pas voir sortir de votre entreprise.",
  },
];

export default function BlogChatGptAuTravailPage() {
  const formationEquipe = getOffer("formation-equipe");

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <PageHeader
        eyebrow="Blog"
        title="Comment utiliser ChatGPT au travail"
        subtitle="Rédaction, synthèse, brainstorming, relecture : une méthode simple pour tirer parti de ChatGPT au quotidien, sans se laisser piéger par ses limites."
        breadcrumb={[
          { name: "Blog", path: "/blog" },
          {
            name: "Comment utiliser ChatGPT au travail",
            path: "/blog/comment-utiliser-chatgpt-au-travail",
          },
        ]}
      >
        <p className="text-xs uppercase tracking-wider text-white/40">
          Publié le 16 août 2026
        </p>
      </PageHeader>

      {/* Introduction */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-pretty font-display text-xl font-medium leading-snug text-white/90 sm:text-2xl">
              ChatGPT peut faire gagner un temps réel au travail, à condition
              de savoir s&apos;en servir. Ce guide passe en revue les usages
              professionnels les plus utiles, une méthode simple pour
              formuler ses demandes, et les erreurs qui rendent les réponses
              inexploitables ou risquées.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Usages professionnels */}
      <Section className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="Usages"
          title="Les usages professionnels les plus utiles de ChatGPT"
          subtitle="Cinq façons concrètes de s'en servir au quotidien, quel que soit votre métier."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {usages.map((u, i) => {
            const Icon = u.icon;
            return (
              <Reveal key={u.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {u.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {u.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Méthode pour bien formuler ses demandes */}
      <Section>
        <SectionHeading
          eyebrow="Méthode"
          title="Comment bien formuler une demande à ChatGPT"
          subtitle="La qualité d'une réponse tient presque toujours à la façon dont la demande est posée."
        />
        <ol className="mt-16 grid gap-6 sm:grid-cols-2">
          {method.map((m, i) => (
            <Reveal as="li" key={m.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl glass p-6">
                <span className="font-display text-4xl font-bold text-brand-500/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {m.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Erreurs fréquentes */}
      <Section className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="Erreurs courantes"
          title="Les erreurs fréquentes à éviter"
          subtitle="Ce qui transforme une bonne réponse en problème, ou une réponse moyenne en occasion manquée."
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
      </Section>

      {/* Limites à connaître */}
      <Section>
        <SectionHeading
          eyebrow="Limites"
          title="Les limites de ChatGPT à connaître"
          subtitle="Un outil utile, mais qui reste un outil : voici ce qu'il faut garder en tête."
        />
        <ul className="mx-auto mt-12 max-w-3xl space-y-6">
          {limits.map((l, i) => (
            <Reveal as="li" key={l.title} delay={i * 0.05}>
              <div className="flex gap-3">
                <Info size={18} className="mt-1 shrink-0 text-brand-400" />
                <div>
                  <p className="font-medium text-white">{l.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {l.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Pour aller plus loin */}
      <Section className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="Pour aller plus loin"
          title="Se faire accompagner pour aller plus loin"
          subtitle="Ce guide pose les bases. Une formation permet d'aller plus loin, sur vos propres dossiers."
        />
        <Reveal className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-white/70 leading-relaxed">
            Pour approfondir ces usages sur vos propres tâches, la{" "}
            <Link
              href="/formations/chatgpt"
              className="text-brand-400 underline-offset-4 hover:underline"
            >
              formation ChatGPT
            </Link>{" "}
            propose un accompagnement individuel, construit autour de vos
            dossiers réels. Pour toute une équipe, direction la page{" "}
            <Link
              href="/entreprises"
              className="text-brand-400 underline-offset-4 hover:underline"
            >
              formations pour entreprises
            </Link>
            .
          </p>
        </Reveal>

        {formationEquipe && (
          <Reveal className="mx-auto mt-10 max-w-xl" delay={0.06}>
            <div className="flex h-full flex-col rounded-2xl glass p-7">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">
                  {formationEquipe.name}
                </h3>
                <span className="text-sm font-medium text-brand-400">
                  {formationEquipe.price}
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                {formationEquipe.duration}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {formationEquipe.description}
              </p>
              <ButtonLink href="/contact" className="mt-6 w-full" size="md">
                {formationEquipe.cta}
              </ButtonLink>
            </div>
          </Reveal>
        )}
      </Section>
    </>
  );
}
