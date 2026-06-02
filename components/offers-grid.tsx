import { OfferCard } from "@/components/offer-card";
import { Reveal } from "@/components/reveal";
import { offers } from "@/lib/offers";

/** Grille des offres (sans regroupement par phase). */
export function OffersGrid() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {offers.map((offer, i) => (
        <Reveal key={offer.id} delay={i * 0.05}>
          <OfferCard offer={offer} />
        </Reveal>
      ))}
    </div>
  );
}
