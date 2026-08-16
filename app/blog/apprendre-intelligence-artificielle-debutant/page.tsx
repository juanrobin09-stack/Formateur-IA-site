import Link from "next/link";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const ARTICLE_TITLE = "Comment apprendre l'intelligence artificielle quand on débute";
const ARTICLE_DESCRIPTION =
  "Un guide clair pour débuter avec l'intelligence artificielle : par où commencer, quels outils tester en premier (ChatGPT, Claude, Gemini) et comment progresser sans se sentir dépassé.";
const PUBLISHED_AT = "2026-08-16";

export const metadata = pageMetadata({
  title: ARTICLE_TITLE,
  description: ARTICLE_DESCRIPTION,
  path: "/blog/apprendre-intelligence-artificielle-debutant",
});

interface ArticleSection {
  title: string;
  paragraphs: string[];
  tips?: string[];
}

const sections: ArticleSection[] = [
  {
    title: "Par où commencer quand on part de zéro",
    paragraphs: [
      "Le plus simple est de choisir un seul outil pour commencer, plutôt que de vouloir tout tester en même temps. Un compte gratuit sur ChatGPT, Claude ou Gemini suffit largement pour découvrir ce que ces outils savent faire.",
      "Pas besoin d'installer de logiciel ni de configurer quoi que ce soit : ces assistants fonctionnent directement depuis un navigateur, sur ordinateur comme sur mobile. La seule chose à apprendre au départ, c'est de formuler une demande claire, comme on l'écrirait à quelqu'un.",
      "Pour vos premiers essais, choisissez une tâche que vous connaissez déjà bien : rédiger un message, reformuler un texte, résumer un article. Vous jugerez tout de suite si la réponse est utile, ce qui est plus parlant qu'un exercice abstrait.",
    ],
  },
  {
    title: "ChatGPT, Claude, Gemini : lequel tester en premier",
    paragraphs: [
      "Ces trois outils sont des assistants conversationnels : vous tapez une demande en langage courant, vous recevez une réponse, et vous pouvez la préciser ou la corriger au fil de l'échange.",
      "ChatGPT, développé par OpenAI, est l'assistant le plus utilisé au quotidien pour la rédaction, les résumés et les échanges généraux. Claude, développé par Anthropic, est particulièrement à l'aise sur les textes longs et les tâches de rédaction qui demandent de la nuance. Gemini, développé par Google, s'intègre directement aux outils Google (Gmail, Docs, Drive), ce qui peut simplifier son usage si vous les utilisez déjà au quotidien.",
      "Pour un usage débutant, les trois se valent largement. Le plus important n'est pas de trouver le bon outil du premier coup, mais de commencer à s'en servir régulièrement, sur des tâches concrètes.",
    ],
  },
  {
    title: "Le piège du jargon technique",
    paragraphs: [
      "Modèle de langage, token, prompt engineering, paramètres... Ce vocabulaire circule beaucoup autour de l'IA, mais il n'est pas nécessaire pour bien s'en servir au quotidien.",
      "Ce qui fait vraiment la différence, c'est la clarté de la demande : donner du contexte (votre métier, votre objectif, le ton souhaité) et préciser ce que vous attendez comme résultat. Pas besoin de comprendre la mécanique interne de l'outil pour bien l'utiliser, de la même façon qu'on peut conduire une voiture sans être mécanicien.",
      "Se laisser intimider par ce vocabulaire technique est l'un des premiers freins qu'on observe chez les débutants. Ignorer ce jargon et se concentrer sur l'usage concret permet d'avancer beaucoup plus vite.",
    ],
  },
  {
    title: "Pratiquer sur vos propres tâches, pas sur des tutoriels génériques",
    paragraphs: [
      "Les tutoriels génériques donnent une bonne idée de ce qu'un outil sait faire, mais ils apprennent peu de choses sur la façon de s'en servir pour votre propre travail.",
      "Pratiquer sur vos propres tâches change tout : le CV que vous êtes en train de préparer, l'email un peu délicat à envoyer, le compte-rendu à rédiger. Chaque essai devient immédiatement utile, et pas seulement un exercice de démonstration.",
    ],
    tips: [
      "Reformuler un email un peu maladroit",
      "Résumer un document long en quelques lignes claires",
      "Préparer les grandes lignes d'un CV ou d'une lettre de motivation",
      "Organiser les idées d'un projet avant de vous y mettre",
    ],
  },
  {
    title: "Progresser sans se sentir dépassé",
    paragraphs: [
      "Il n'est pas nécessaire de tout apprendre d'un coup. Mieux vaut prendre l'habitude d'utiliser l'IA sur une tâche par semaine que d'essayer de maîtriser tous les outils et toutes les fonctionnalités en même temps.",
      "Gardez aussi un réflexe simple : vérifier les informations importantes (chiffres, dates, faits précis) avant de les utiliser. Ces outils peuvent donner une réponse fausse avec la même assurance qu'une réponse juste. Ce doute raisonnable fait partie d'une bonne utilisation de l'IA, ce n'est pas un frein à son usage.",
      "Si la première réponse ne convient pas, il suffit de préciser votre demande ou de corriger ce qui ne va pas. L'échange s'affine au fil de la conversation : la première réponse n'est presque jamais la version finale.",
    ],
  },
];

export default function ApprendreIntelligenceArtificielleDebutantPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    datePublished: PUBLISHED_AT,
    dateModified: PUBLISHED_AT,
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <PageHeader
        eyebrow="Guide débutant"
        title={ARTICLE_TITLE}
        subtitle="Par où commencer, quels outils tester en premier et comment progresser à votre rythme, sans jargon et sans vous sentir dépassé."
        breadcrumb={[
          { name: "Blog", path: "/blog" },
          {
            name: ARTICLE_TITLE,
            path: "/blog/apprendre-intelligence-artificielle-debutant",
          },
        ]}
      >
        <p className="text-xs uppercase tracking-wider text-white/40">
          Publié le <time dateTime={PUBLISHED_AT}>16 août 2026</time>
        </p>
      </PageHeader>

      {/* Article */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-pretty font-display text-xl font-medium leading-snug text-white/90 sm:text-2xl">
              Apprendre l&apos;intelligence artificielle ne veut pas dire suivre
              des cours d&apos;informatique ou comprendre comment fonctionne un
              algorithme. Il s&apos;agit surtout d&apos;apprendre à utiliser des
              outils comme ChatGPT, Claude ou Gemini pour de vraies tâches :
              écrire un email, préparer un CV, résumer un document, organiser
              une idée. Voici comment s&apos;y prendre, étape par étape.
            </p>
          </Reveal>

          <div className="mt-14 space-y-px">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="border-t border-white/10 py-8">
                  <h2 className="text-balance font-display text-xl font-semibold sm:text-2xl">
                    {s.title}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {s.paragraphs.map((p, pi) => (
                      <p
                        key={pi}
                        className="text-pretty leading-relaxed text-white/65"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  {s.tips && (
                    <ul className="mt-4 space-y-2">
                      {s.tips.map((t) => (
                        <li
                          key={t}
                          className="flex items-start gap-2 text-sm text-white/70"
                        >
                          <Check
                            size={15}
                            className="mt-0.5 shrink-0 text-brand-400"
                          />
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Pour aller plus loin */}
      <Section className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="Pour aller plus loin"
          title="Envie d'être accompagné plutôt que d'avancer seul ?"
        />
        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-pretty leading-relaxed text-white/65">
            Notre page{" "}
            <Link
              href="/particuliers"
              className="text-brand-400 underline-offset-4 hover:underline"
            >
              dédiée aux particuliers
            </Link>{" "}
            présente la séance découverte gratuite et le cours particulier,
            pour progresser à votre rythme sur vos propres dossiers. Si votre
            priorité est justement de bien prendre en main ChatGPT, notre{" "}
            <Link
              href="/formations/chatgpt"
              className="text-brand-400 underline-offset-4 hover:underline"
            >
              formation ChatGPT
            </Link>{" "}
            détaille tout ce qu&apos;il faut savoir pour l&apos;utiliser
            efficacement au quotidien. Une question avant de vous lancer ?{" "}
            <Link
              href="/contact"
              className="text-brand-400 underline-offset-4 hover:underline"
            >
              Contactez-nous
            </Link>
            , on vous répond rapidement.
          </p>
        </Reveal>
      </Section>

      <FinalCta
        title="Prêt à passer à la pratique ?"
        subtitle="La séance découverte est gratuite et sans engagement : 30 minutes pour voir ce que l'IA peut faire pour vous."
        primaryLabel="Réserver ma séance découverte"
        primaryHref="/particuliers#offres"
        secondaryLabel="Voir la formation ChatGPT"
        secondaryHref="/formations/chatgpt"
      />
    </>
  );
}
