import { OfferCard } from "@/components/offer-card";
import { Reveal } from "@/components/reveal";
import { phaseOrder, phaseInfo, offersByPhase } from "@/lib/offers";

/**
 * Grille des offres organisée selon le parcours commercial :
 * Découverte → Engagement → Fidélité.
 */
export function OffersGrid() {
  return (
    <div className="space-y-16">
      {phaseOrder.map((phase, pIndex) => {
        const list = offersByPhase(phase);
        return (
          <div key={phase}>
            {/* En-tête de phase */}
            <Reveal className="mb-8 flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-white/50">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/15 text-xs font-bold text-brand-300">
                  {pIndex + 1}
                </span>
                Phase {pIndex + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {phase}
              </h3>
              <p className="mt-2 max-w-md text-pretty text-sm text-white/55">
                {phaseInfo[phase].tagline}
              </p>
            </Reveal>

            {/* Cartes de la phase */}
            <div
              className={
                list.length === 1
                  ? "mx-auto max-w-2xl"
                  : "mx-auto grid max-w-4xl gap-6 sm:grid-cols-2"
              }
            >
              {list.map((offer, i) => (
                <Reveal key={offer.id} delay={i * 0.06}>
                  <OfferCard offer={offer} />
                </Reveal>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
