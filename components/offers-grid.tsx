import { Building2, User } from "lucide-react";
import { OfferCard } from "@/components/offer-card";
import { Reveal } from "@/components/reveal";
import { offers, offersByAudience, type Audience } from "@/lib/offers";

/** Grille d'offres, filtrable par public. */
export function OffersGrid({ audience }: { audience?: Audience }) {
  const list = audience ? offersByAudience(audience) : offers;
  return (
    <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((offer, i) => (
        <Reveal key={offer.id} delay={i * 0.05}>
          <OfferCard offer={offer} />
        </Reveal>
      ))}
    </div>
  );
}

/** Affiche les deux publics (entreprises puis particuliers), avec sous-titres. */
export function OffersByAudience() {
  const groups: { audience: Audience; icon: typeof Building2; title: string; subtitle: string }[] = [
    {
      audience: "entreprises",
      icon: Building2,
      title: "Pour les entreprises",
      subtitle: "Formation sur-mesure ou accompagnement continu. Paiement unique à chaque prestation, sur devis.",
    },
    {
      audience: "particuliers",
      icon: User,
      title: "Pour les particuliers",
      subtitle: "Des formules accessibles, en visio, à votre rythme.",
    },
  ];

  return (
    <div className="space-y-16">
      {groups.map((g) => {
        const Icon = g.icon;
        return (
          <div key={g.audience}>
            <Reveal className="mb-8 flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1.5 text-sm font-medium text-brand-200">
                <Icon size={16} />
                {g.title}
              </span>
              <p className="mt-3 max-w-md text-pretty text-sm text-white/55">
                {g.subtitle}
              </p>
            </Reveal>
            <OffersGrid audience={g.audience} />
          </div>
        );
      })}
    </div>
  );
}
