import { Check, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { clsx } from "@/lib/clsx";
import type { Offer } from "@/lib/offers";

/** Détermine la destination du CTA selon le type d'offre. */
function ctaHref(offer: Offer): string {
  // Particuliers : toutes les formules se réservent en visio via le calendrier.
  if (offer.audience === "particuliers") {
    return `/reservation?offer=${offer.id}`;
  }
  // Entreprises : l'audit gratuit se réserve directement, les formules sur
  // devis passent par le formulaire de contact.
  return offer.price === "Gratuit"
    ? `/reservation?offer=${offer.id}`
    : "/contact";
}

/** Carte d'offre réutilisable (tarifs, accueil, pages publics). */
export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div
      className={clsx(
        "relative flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 sm:p-7",
        offer.highlight
          ? "border-gradient border border-brand-500/50 bg-gradient-to-b from-brand-600/20 to-white/[0.02] shadow-xl shadow-accent-600/20 ring-1 ring-brand-500/30 lg:scale-[1.03]"
          : "glass-hover"
      )}
    >
      {offer.badge && (
        <span
          className={clsx(
            "absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium",
            offer.highlight
              ? "bg-gradient-to-r from-brand-500 to-accent-600 text-white shadow-lg shadow-accent-600/40"
              : "border border-white/15 bg-ink text-white/80"
          )}
        >
          {offer.highlight && <Sparkles size={12} />}
          {offer.badge}
        </span>
      )}

      <h3 className="mt-1 font-display text-lg font-semibold sm:text-xl">
        {offer.name}
      </h3>
      <p className="mt-1 text-sm text-white/50">{offer.duration}</p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {offer.price}
        </span>
      </div>

      <p className="mt-4 text-pretty text-sm leading-relaxed text-white/60">
        {offer.description}
      </p>

      <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <ul className="space-y-3">
        {offer.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-300">
              <Check size={11} strokeWidth={3} aria-hidden />
            </span>
            <span className="text-white/75">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8 max-sm:pt-6">
        <ButtonLink
          href={ctaHref(offer)}
          variant={offer.highlight ? "primary" : "secondary"}
          size="lg"
          className="w-full"
        >
          {offer.cta}
        </ButtonLink>
      </div>
    </div>
  );
}
