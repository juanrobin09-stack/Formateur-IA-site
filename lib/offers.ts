/**
 * Catalogue des offres d'Académie IA, structuré selon le parcours commercial :
 * Découverte → Engagement → Fidélité.
 * Source unique de vérité, réutilisée sur l'accueil, /tarifs et /reservation.
 */

// Conservé pour l'adaptation du discours du hero (entreprises / particuliers).
export type Audience = "entreprises" | "particuliers";

export type Phase = "Découverte" | "Engagement" | "Fidélité";

export interface Offer {
  /** Identifiant stable (utilisé pour le pré-remplissage de la réservation). */
  id: string;
  phase: Phase;
  name: string;
  /** Prix affiché tel quel (ex. « 300 à 600 € », « Offert », « Sur devis »). */
  price: string;
  duration: string;
  description: string;
  features: string[];
  /** Mise en avant visuelle (offre recommandée). */
  highlight?: boolean;
  badge?: string;
  /** Texte du bouton d'action. */
  cta: string;
}

export const offers: Offer[] = [
  // --- Phase 1 · Découverte -------------------------------------------------
  {
    id: "essai-gratuit",
    phase: "Découverte",
    name: "Essai gratuit",
    price: "Offert",
    duration: "7 à 14 jours · sans engagement",
    description:
      "Une période d'essai sans engagement financier pour découvrir la qualité de l'accompagnement et construire la confiance, sur le terrain.",
    features: [
      "Aucun engagement financier",
      "Accompagnement concret et représentatif",
      "Idéal pour démarrer en toute confiance",
    ],
    badge: "Sans engagement",
    cta: "Demander mon essai gratuit",
  },
  {
    id: "echantillon-decouverte",
    phase: "Découverte",
    name: "Échantillon découverte",
    price: "300 à 600 €",
    duration: "7 à 14 jours",
    description:
      "Une période d'échantillonnage pour accéder à une prestation concrète et représentative, avec un investissement maîtrisé.",
    features: [
      "Tarif attractif selon la durée et le périmètre",
      "Accès à une prestation concrète",
      "Engagement financier limité et maîtrisé",
    ],
    cta: "Réserver l'échantillon",
  },

  // --- Phase 2 · Engagement -------------------------------------------------
  {
    id: "contrat-sans-engagement",
    phase: "Engagement",
    name: "Contrat sans engagement",
    price: "Sur devis",
    duration: "30 jours renouvelables",
    description:
      "Pour les clients qui recherchent de la flexibilité : résiliation possible à tout moment, sans pénalité ni préavis contraignant.",
    features: [
      "Base de 30 jours renouvelables",
      "Résiliation à tout moment, sans pénalité",
      "Réduit les freins et facilite l'entrée en relation",
    ],
    cta: "Demander un devis",
  },
  {
    id: "contrat-avec-engagement",
    phase: "Engagement",
    name: "Contrat avec engagement",
    price: "Sur devis",
    duration: "6 à 12 mois",
    description:
      "Pour s'inscrire dans une relation stable et durable, avec une visibilité à long terme et des conditions avantageuses pour les deux parties.",
    features: [
      "Durée d'engagement de 6 à 12 mois",
      "Conditions tarifaires préférentielles négociables",
      "Visibilité et stabilité à long terme",
    ],
    highlight: true,
    badge: "Recommandé",
    cta: "Demander un devis",
  },

  // --- Phase 3 · Fidélité ---------------------------------------------------
  {
    id: "offre-exclusivite",
    phase: "Fidélité",
    name: "Offre d'exclusivité — premiers clients",
    price: "Exclusif",
    duration: "14 à 16 mois",
    description:
      "Les premiers clients fidèles bénéficient d'un accès prioritaire, voire unique, aux nouvelles offres et fonctionnalités avant toute ouverture au marché.",
    features: [
      "Accès prioritaire (voire unique) aux nouvelles offres",
      "Assortie d'un engagement ferme",
      "Exclusivité portée à 14-16 mois",
      "Récompense les clients pionniers",
    ],
    badge: "Premiers clients",
    cta: "Devenir client pionnier",
  },
];

/** Ordre d'affichage des phases. */
export const phaseOrder: Phase[] = ["Découverte", "Engagement", "Fidélité"];

/** Sous-titre descriptif de chaque phase. */
export const phaseInfo: Record<Phase, { tagline: string }> = {
  Découverte: {
    tagline: "Tester sans risque, découvrir la qualité de l'accompagnement.",
  },
  Engagement: {
    tagline: "Choisir la formule qui correspond à votre rythme.",
  },
  Fidélité: {
    tagline: "Récompenser la confiance des premiers clients.",
  },
};

/** Filtre les offres par phase. */
export function offersByPhase(phase: Phase): Offer[] {
  return offers.filter((o) => o.phase === phase);
}

/** Retrouve une offre par son identifiant. */
export function getOffer(id: string): Offer | undefined {
  return offers.find((o) => o.id === id);
}
