import { Check, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { clsx } from "@/lib/clsx";
import type { Offer } from "@/lib/offers";

/** Détermine la destination du CTA selon le type d'offre. */
function ctaHref(offer: Offer): string {
  // Audit gratuit et sur-mesure → contact / devis
  if (offer.price === "Offert" || offer.price === "Sur devis") return "/contact";
  // Les autres offres → prise de rendez-vous (sans paiement)
  return `/reservation?offer=${offer.id}`;
}

/** Carte d'offre réutilisable (tarifs, accueil, pages publics). */
export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div
      className={clsx(
        "relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 sm:p-8",
        offer.highlight
          ? "border border-brand-500/50 bg-gradient-to-b from-brand-600/15 to-white/[0.02] shadow-xl shadow-brand-600/10 ring-1 ring-brand-500/30"
          : "glass hover:border-white/20"
      )}
    >
      {offer.badge && (
        <span
          className={clsx(
            "absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium",
            offer.highlight
              ? "bg-brand-500 text-white shadow-lg shadow-brand-600/40"
              : "border border-white/15 bg-ink text-white/80"
          )}
        >
          {offer.highlight && <Sparkles size={12} />}
          {offer.badge}
        </span>
      )}

      <h3 className="font-display text-xl font-semibold">{offer.name}</h3>
      <p className="mt-1 text-sm text-white/50">{offer.duration}</p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="font-display text-4xl font-bold">{offer.price}</span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-white/60">
        {offer.description}
      </p>

      <ul className="mt-6 space-y-3">
        {offer.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              size={16}
              className="mt-0.5 shrink-0 text-brand-400"
              aria-hidden
            />
            <span className="text-white/75">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 pt-2">
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
