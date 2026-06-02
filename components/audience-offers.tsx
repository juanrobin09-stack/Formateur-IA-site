"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, User } from "lucide-react";
import { OfferCard } from "@/components/offer-card";
import { offersByAudience, type Audience } from "@/lib/offers";
import { clsx } from "@/lib/clsx";

/** Sélecteur Entreprises / Particuliers réutilisable. */
export function AudienceToggle({
  value,
  onChange,
  className,
}: {
  value: Audience;
  onChange: (a: Audience) => void;
  className?: string;
}) {
  const options: { id: Audience; label: string; icon: typeof Building2 }[] = [
    { id: "entreprises", label: "Entreprises", icon: Building2 },
    { id: "particuliers", label: "Particuliers", icon: User },
  ];

  return (
    <div
      role="tablist"
      aria-label="Choisir un public"
      className={clsx(
        "inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm",
        className
      )}
    >
      {options.map((opt) => {
        const active = value === opt.id;
        const Icon = opt.icon;
        return (
          <button
            key={opt.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt.id)}
            className={clsx(
              "relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
              active ? "text-white" : "text-white/60 hover:text-white"
            )}
          >
            {active && (
              <motion.span
                layoutId="audience-pill"
                className="absolute inset-0 rounded-full bg-brand-600 shadow-lg shadow-brand-600/30"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <Icon size={16} className="relative z-10" />
            <span className="relative z-10">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/** Section d'offres pilotée par le sélecteur de public. */
export function AudienceOffers({
  initial = "entreprises",
}: {
  initial?: Audience;
}) {
  const [audience, setAudience] = useState<Audience>(initial);
  const list = offersByAudience(audience);

  return (
    <div>
      <div className="flex justify-center">
        <AudienceToggle value={audience} onChange={setAudience} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={audience}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
