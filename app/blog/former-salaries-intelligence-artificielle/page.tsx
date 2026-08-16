import Link from "next/link";
import {
  Compass,
  Lock,
  Sparkles,
  Users,
  Briefcase,
  Megaphone,
  Calculator,
  Check,
  AlertTriangle,
  HelpCircle,
  ShieldAlert,
  RefreshCw,
  Info,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { getOffer } from "@/lib/offers";
import { steps } from "@/lib/content";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

const description =
  "Guide pratique pour dirigeants, RH et managers : pourquoi former ses équipes à l'IA, comment repérer les bons cas d'usage par service, désamorcer les freins courants et choisir le bon format de formation.";

export const metadata = pageMetadata({
  title: "Comment former ses salariés à l'intelligence artificielle",
  description,
  path: "/blog/former-salaries-intelligence-artificielle",
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment former ses salariés à l'intelligence artificielle",
  description,
  datePublished: "2026-08-16",
  dateModified: "2026-08-16",
  author: { "@type": "Organization", name: site.name },
  publisher: { "@type": "Organization", name: site.name },
};

const reasons = [
  {
    icon: Compass,
    title: "Les usages existent déjà, avec ou sans vous",
    description:
      "Beaucoup de salariés utilisent déjà ChatGPT ou un outil équivalent de leur propre initiative, souvent sans le dire. Former officiellement permet de transformer ces usages isolés en pratique commune et maîtrisée.",
  },
  {
    icon: Lock,
    title: "Réduire les risques d'un usage non encadré",
    description:
      "Sans consigne claire, certains salariés partagent par réflexe des informations sensibles dans un outil grand public. Une formation est l'occasion d'expliquer simplement ce qu'il vaut mieux ne pas partager.",
  },
  {
    icon: Sparkles,
    title: "Une aisance qui se construit avec la pratique",
    description:
      "Se familiariser avec l'IA générative demande des essais répétés sur de vraies tâches. Plus une équipe commence tôt, plus elle a d'occasions de progresser avant que ce soit une urgence.",
  },
  {
    icon: Users,
    title: "Un sujet qui rassure autant qu'il outille",
    description:
      "L'IA inquiète une partie des salariés. En parler ouvertement, en formation plutôt que par une simple note de service, change la façon dont le sujet est reçu par l'équipe.",
  },
];

const departments = [
  {
    icon: Users,
    title: "Ressources humaines",
    items: [
      "Rédiger des offres d'emploi et des annonces internes",
      "Préparer des trames d'entretien et en synthétiser le compte-rendu",
      "Répondre plus vite aux questions internes récurrentes (congés, procédures, notes de frais...)",
    ],
  },
  {
    icon: Briefcase,
    title: "Commercial",
    items: [
      "Préparer un rendez-vous et structurer un argumentaire",
      "Rédiger et relancer des propositions commerciales",
      "Synthétiser un compte-rendu de visite client",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing et communication",
    items: [
      "Rédiger des contenus (posts, newsletters, fiches produits)",
      "Décliner un même message sur plusieurs formats",
      "Générer une première série d'idées à trier et affiner",
    ],
  },
  {
    icon: Calculator,
    title: "Comptabilité et gestion",
    items: [
      "Synthétiser des documents longs (contrats, rapports)",
      "Rédiger des comptes-rendus de réunion",
      "Structurer un tableau de suivi, à vérifier avant diffusion",
    ],
  },
];

const frictions = [
  {
    icon: AlertTriangle,
    title: "La peur d'être remplacé",
    description:
      "C'est le frein le plus fréquent. Présenter l'IA comme un outil qui automatise certaines tâches répétitives, et non comme un substitut au jugement humain, change la perception. Associer les salariés au choix des cas d'usage plutôt que de le leur imposer aide aussi beaucoup.",
  },
  {
    icon: HelpCircle,
    title: "La réticence face à un outil inconnu",
    description:
      "Certains salariés sont mal à l'aise avec le numérique en général. Partir de leur niveau réel, sans jargon, et travailler sur leurs propres dossiers plutôt que sur des exemples abstraits, désamorce une bonne partie de cette réticence.",
  },
  {
    icon: ShieldAlert,
    title: "L'inquiétude sur la confidentialité",
    description:
      "Beaucoup craignent, à raison, que des informations sensibles se retrouvent dans un outil externe. Expliquer clairement ce qu'il ne faut pas partager, et dans quel cadre utiliser l'IA, rassure et évite les usages hasardeux.",
  },
  {
    icon: RefreshCw,
    title: "Le scepticisme sur l'utilité réelle",
    description:
      "Un discours théorique convainc rarement. Démarrer par un ou deux cas d'usage concrets, testés en formation sur de vrais dossiers, convainc davantage qu'une longue présentation.",
  },
];

const formatConsiderations = [
  {
    title: "Collectif ou individuel ?",
    description:
      "Un format collectif réunit toute une équipe autour des mêmes cas d'usage, crée une culture commune et facilite les échanges entre collègues après la formation. Un accompagnement plus resserré convient mieux quand les besoins diffèrent fortement d'un poste à l'autre.",
  },
  {
    title: "Présentiel ou visio ?",
    description:
      "Le présentiel facilite les échanges informels et convient bien pour lancer une dynamique de groupe. La visio offre plus de souplesse d'organisation, en particulier pour des équipes réparties sur plusieurs sites.",
  },
  {
    title: "Toujours sur mesure",
    description:
      "Quel que soit le format retenu, le contenu doit rester construit autour des cas d'usage réels de vos équipes. Un programme générique se retient moins bien qu'un programme bâti sur vos propres dossiers.",
  },
];

export default function BlogFormerSalariesIaPage() {
  const formationEquipe = getOffer("formation-equipe");

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <PageHeader
        eyebrow="Blog"
        title="Comment former ses salariés à l'intelligence artificielle"
        subtitle="Un guide pour les dirigeants, RH et managers qui veulent structurer une formation IA utile, adaptée aux vrais usages et aux vrais freins de leurs équipes."
        breadcrumb={[
          { name: "Blog", path: "/blog" },
          {
            name: "Comment former ses salariés à l'intelligence artificielle",
            path: "/blog/former-salaries-intelligence-artificielle",
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
              Former ses équipes à l&apos;IA ne se résume pas à organiser une
              présentation générale de ChatGPT. C&apos;est une démarche qui se
              prépare : identifier les bons cas d&apos;usage, anticiper les
              freins et choisir un format adapté à votre organisation. Ce
              guide reprend ces étapes une par une.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Pourquoi former maintenant */}
      <Section className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="Pourquoi maintenant"
          title="Pourquoi former ses salariés à l'IA maintenant"
          subtitle="Attendre n'est pas neutre : les usages progressent, encadrés ou non."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {r.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Cas d'usage par service */}
      <Section>
        <SectionHeading
          eyebrow="Cas d'usage"
          title="Identifier les bons cas d'usage, service par service"
          subtitle="Les usages utiles à l'IA ne sont pas les mêmes partout. Les repérer service par service évite les formations trop générales."
        />
        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-white/60">
            Une formation convainc rarement en présentant l&apos;IA en
            général. Elle convainc en montrant ce qu&apos;elle peut faire sur
            les tâches réelles de chaque service. Voici des points de départ
            courants, à adapter à votre organisation.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {departments.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {d.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {d.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-white/60"
                      >
                        <Check size={15} className="mt-0.5 shrink-0 text-brand-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="mx-auto max-w-2xl text-sm text-white/50">
            Pour élargir cette liste, demandez directement à vos équipes
            quelles tâches répétitives leur prennent le plus de temps. Elles
            connaissent leur travail mieux que quiconque, et ce sont souvent
            des pistes concrètes de cas d&apos;usage.
          </p>
        </Reveal>
      </Section>

      {/* Freins courants */}
      <Section className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="Freins courants"
          title="Désamorcer les freins courants"
          subtitle="Les mêmes objections reviennent presque à chaque formation. Les anticiper change la façon dont l'équipe reçoit le sujet."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {frictions.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl glass p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Choisir le bon format */}
      <Section>
        <SectionHeading
          eyebrow="Format"
          title="Choisir le bon format de formation"
          subtitle="Le format compte autant que le contenu. Voici les questions à se poser avant de lancer une formation."
        />
        <ul className="mx-auto mt-12 max-w-3xl space-y-6">
          {formatConsiderations.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 0.05}>
              <div className="flex gap-3">
                <Info size={18} className="mt-1 shrink-0 text-brand-400" />
                <div>
                  <p className="font-medium text-white">{c.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {c.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="font-display text-xl font-semibold sm:text-2xl">
            Comment se déroule un accompagnement, concrètement
          </h3>
        </Reveal>
        <ol className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl glass p-6">
                <span className="font-display text-4xl font-bold text-brand-500/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-3 font-display text-lg font-semibold">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Pour aller plus loin */}
      <Section className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="Pour aller plus loin"
          title="Structurer une formation IA pour vos équipes"
          subtitle="Ce guide pose les bases. La suite se construit avec vos équipes, sur vos cas réels."
        />
        <Reveal className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-white/70 leading-relaxed">
            Ce guide donne un point de départ pour structurer une démarche de
            formation à l&apos;IA dans votre organisation. La page{" "}
            <Link
              href="/entreprises"
              className="text-brand-400 underline-offset-4 hover:underline"
            >
              formations pour entreprises
            </Link>{" "}
            présente notre approche par secteur. Pour discuter de votre projet
            et recevoir un devis clair,{" "}
            <Link
              href="/contact"
              className="text-brand-400 underline-offset-4 hover:underline"
            >
              contactez-nous
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
