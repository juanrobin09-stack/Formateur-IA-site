import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

/** Bandeau d'appel à l'action final, réutilisable. */
export function FinalCta({
  title = "Prêt à mettre l'IA au service de votre métier ?",
  subtitle = "Décrivez-nous votre besoin, nous vous envoyons une proposition claire sous 24 h.",
  primaryLabel = "Demander un devis",
  primaryHref = "/contact",
  secondaryLabel = "Voir les tarifs",
  secondaryHref = "/tarifs",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-500/30 bg-gradient-to-br from-brand-600/20 via-brand-700/10 to-transparent px-6 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/30 blur-[100px]"
              aria-hidden
            />
            <h2 className="mx-auto max-w-2xl text-balance font-display text-[1.75rem] font-bold leading-[1.12] sm:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-white/65 sm:text-lg">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={primaryHref} size="lg" className="w-full sm:w-auto">
                {primaryLabel}
                <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink
                href={secondaryHref}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {secondaryLabel}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
