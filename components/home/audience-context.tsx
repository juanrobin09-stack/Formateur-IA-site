"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Audience } from "@/lib/offers";

interface AudienceContextValue {
  audience: Audience;
  setAudience: (a: Audience) => void;
}

const AudienceContext = createContext<AudienceContextValue | null>(null);

/**
 * Fournit le public sélectionné (entreprises / particuliers) à toute la page
 * d'accueil : le sélecteur du hero et la grille d'offres restent synchronisés.
 */
export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudience] = useState<Audience>("entreprises");
  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience(): AudienceContextValue {
  const ctx = useContext(AudienceContext);
  if (!ctx) {
    throw new Error("useAudience doit être utilisé dans un AudienceProvider");
  }
  return ctx;
}
