import Link from "next/link";
import { ArrowRight, Compass, MessageSquare, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/sections/cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog Académie IA : conseils pratiques sur l'IA et ChatGPT",
  description:
    "Des guides pratiques pour apprendre à utiliser l'intelligence artificielle et ChatGPT au quotidien, débuter sans se perdre, et former ses équipes en entreprise.",
  path: "/blog",
});

const articles = [
  {
    slug: "comment-utiliser-chatgpt-au-travail",
    title: "Comment utiliser ChatGPT au travail",
    excerpt:
      "Un guide pratique pour utiliser ChatGPT au travail : usages concrets (emails, synthèse, brainstorming, structuration, relecture), méthode pour bien formuler ses demandes, erreurs fréquentes à éviter et limites à connaître.",
    icon: MessageSquare,
  },
  {
    slug: "apprendre-intelligence-artificielle-debutant",
    title: "Comment apprendre l'intelligence artificielle quand on débute",
    excerpt:
      "Un guide concret pour les débutants complets : par où commencer, quels outils tester en premier (ChatGPT, Claude, Gemini), comment éviter le jargon technique et progresser en pratiquant sur ses propres tâches plutôt que sur des tutoriels génériques.",
    icon: Compass,
  },
  {
    slug: "former-salaries-intelligence-artificielle",
    title: "Comment former ses salariés à l'intelligence artificielle",
    excerpt:
      "Un guide pratique pour dirigeants, RH et managers : pourquoi former ses équipes à l'IA maintenant, comment repérer les bons cas d'usage par service, désamorcer les freins courants (peur du remplacement, réticence au changement) et choisir le bon format de formation.",
    icon: Users,
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Le blog Académie IA"
        subtitle="Des guides pratiques pour comprendre et utiliser l'intelligence artificielle au quotidien, sans jargon ni blabla technique."
        breadcrumb={[{ name: "Blog", path: "/blog" }]}
      />

      <Section>
        <SectionHeading
          eyebrow="Derniers articles"
          title="Nos guides pour progresser avec l'IA"
          subtitle="Des conseils concrets, applicables tout de suite, que vous débutiez ou que vous cherchiez à former votre équipe."
        />
        <div className="mx-auto mt-12 max-w-2xl space-y-5">
          {articles.map((article, i) => {
            const Icon = article.icon;
            return (
              <Reveal key={article.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex items-start gap-4 rounded-2xl glass-hover p-6"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <Icon size={22} />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {article.excerpt}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="mt-1 shrink-0 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-brand-400"
                  />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
