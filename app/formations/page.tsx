import Link from "next/link";
import { ArrowRight, Building2, User, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { aiTools } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Formations à l'intelligence artificielle : ChatGPT et outils IA",
  description:
    "Découvrez nos formations à l'intelligence artificielle générative : ChatGPT, Claude, Gemini et les autres outils IA, pour les entreprises comme pour les particuliers.",
  path: "/formations",
});

const dedicatedTrainings = [
  {
    href: "/formations/chatgpt",
    title: "Formation ChatGPT",
    description:
      "Le point de départ le plus demandé : comprendre et utiliser ChatGPT efficacement, pour votre métier ou votre quotidien.",
  },
];

export default function FormationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Formations"
        title="Nos formations à l'intelligence artificielle"
        subtitle="Que vous partiez de zéro ou que vous cherchiez à aller plus loin, chaque formation part de votre métier et de vos vrais outils."
        breadcrumb={[{ name: "Formations", path: "/formations" }]}
      />

      {/* Outils couverts */}
      <Section>
        <SectionHeading
          eyebrow="Les outils"
          title="Les outils IA que vous apprendrez à maîtriser"
          subtitle="On vous oriente vers les bons outils selon votre métier et vos objectifs, sans jargon inutile."
        />
        <Reveal className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2.5">
          {aiTools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/70"
            >
              {tool}
            </span>
          ))}
        </Reveal>
      </Section>

      {/* Formations dédiées */}
      <Section className="bg-white/[0.02]">
        <SectionHeading
          eyebrow="Formation dédiée"
          title="Un sujet précis à approfondir"
        />
        <div className="mx-auto mt-12 max-w-xl">
          {dedicatedTrainings.map((t) => (
            <Reveal key={t.href}>
              <Link
                href={t.href}
                className="group flex items-center justify-between gap-4 rounded-2xl glass-hover p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <Sparkles size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {t.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/60">
                      {t.description}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-brand-400"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pour qui */}
      <Section>
        <SectionHeading eyebrow="Pour qui" title="Choisissez votre profil" />
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          <Reveal>
            <Link
              href="/entreprises"
              className="group flex h-full flex-col rounded-2xl glass-hover p-7"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                <Building2 size={22} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">
                Pour les entreprises
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                Programmes sur-mesure pour former vos équipes, secteur par
                secteur, sur devis.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400">
                Découvrir
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              href="/particuliers"
              className="group flex h-full flex-col rounded-2xl glass-hover p-7"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                <User size={22} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">
                Pour les particuliers
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                Séance découverte gratuite, ateliers et cours particuliers,
                dès 49 €.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400">
                Découvrir
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white/[0.02]">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Une question avant de vous lancer ?
          </h2>
          <ButtonLink href="/contact" size="lg">
            Nous contacter
            <ArrowRight size={18} />
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
