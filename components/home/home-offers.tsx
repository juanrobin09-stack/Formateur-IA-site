"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AudienceToggle } from "@/components/audience-offers";
import { OffersGrid } from "@/components/offers-grid";
import { useAudience } from "@/components/home/audience-context";

/**
 * Grille d'offres de l'accueil, synchronisée avec le sélecteur du hero.
 * Affiche uniquement le public sélectionné (entreprises ou particuliers).
 */
export function HomeOffers() {
  const { audience, setAudience } = useAudience();

  return (
    <>
      <div className="mt-10 flex justify-center">
        <AudienceToggle value={audience} onChange={setAudience} />
      </div>

      <div className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={audience}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <OffersGrid audience={audience} />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
