/**
 * Catalogue des offres d'Académie IA.
 * - Entreprises : parcours commercial (découverte → engagement → fidélité).
 * - Particuliers : formules grand public à tarif accessible.
 * Source unique de vérité, réutilisée sur l'accueil, /tarifs et /reservation.
 */

export type Audience = "entreprises" | "particuliers";

export interface Offer {
  /** Identifiant stable (utilisé pour le pré-remplissage de la réservation). */
  id: string;
  audience: Audience;
  name: string;
  /** Prix affiché tel quel (ex. « 49 € », « 300 à 600 € », « Sur devis »). */
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
  // === ENTREPRISES — parcours commercial ====================================
  {
    id: "essai-gratuit",
    audience: "entreprises",
    name: "Essai gratuit",
    price: "Offert",
    duration: "7 à 14 jours · sans engagement",
    description:
      "Une période d'essai sans aucun engagement pour découvrir la qualité de l'accompagnement et construire la confiance.",
    features: [
      "Aucun engagement de départ",
      "Accompagnement concret et représentatif",
      "Idéal pour démarrer en toute confiance",
    ],
    badge: "Sans engagement",
    cta: "Demander mon essai gratuit",
  },
  {
    id: "echantillon-decouverte",
    audience: "entreprises",
    name: "Échantillon découverte",
    price: "300 à 600 €",
    duration: "7 à 14 jours",
    description:
      "Une période d'échantillonnage pour accéder à une prestation concrète et représentative, avec un investissement maîtrisé.",
    features: [
      "Tarif attractif selon la durée et le périmètre",
      "Accès à une prestation concrète",
      "Investissement limité et maîtrisé",
    ],
    cta: "Réserver l'échantillon",
  },
  {
    id: "contrat-sans-engagement",
    audience: "entreprises",
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
    audience: "entreprises",
    name: "Contrat avec engagement",
    price: "Sur devis",
    duration: "6 à 12 mois",
    description:
      "Pour s'inscrire dans une relation stable et durable, avec une visibilité à long terme et des conditions avantageuses.",
    features: [
      "Durée d'engagement de 6 à 12 mois",
      "Conditions tarifaires préférentielles négociables",
      "Visibilité et stabilité à long terme",
    ],
    highlight: true,
    badge: "Recommandé",
    cta: "Demander un devis",
  },
  {
    id: "offre-exclusivite",
    audience: "entreprises",
    name: "Offre d'exclusivité",
    price: "Exclusif",
    duration: "14 à 16 mois",
    description:
      "Les premiers clients fidèles bénéficient d'un accès prioritaire, voire unique, aux nouvelles offres avant toute ouverture au marché.",
    features: [
      "Accès prioritaire (voire unique) aux nouvelles offres",
      "Assortie d'un engagement ferme",
      "Exclusivité portée à 14-16 mois",
      "Récompense les clients pionniers",
    ],
    badge: "Premiers clients",
    cta: "Devenir client pionnier",
  },

  // === PARTICULIERS — formules grand public =================================
  {
    id: "essai-decouverte-particulier",
    audience: "particuliers",
    name: "Séance découverte",
    price: "Offert",
    duration: "30 min · en visio",
    description:
      "Un premier échange gratuit pour cerner votre besoin et vous montrer concrètement ce que l'IA peut faire pour vous.",
    features: [
      "Sans engagement",
      "Conseils personnalisés",
      "Pour savoir par où commencer",
    ],
    badge: "Gratuit",
    cta: "Réserver ma séance",
  },
  {
    id: "atelier-collectif",
    audience: "particuliers",
    name: "Atelier collectif en ligne",
    price: "49 €",
    duration: "2 h · en visio",
    description:
      "Une session live pour découvrir l'IA, poser vos questions et repartir avec des automatismes simples.",
    features: [
      "2 h en direct avec le formateur",
      "Démonstrations pas à pas",
      "Questions / réponses en direct",
      "Replay et support fournis",
    ],
    cta: "Réserver ma place",
  },
  {
    id: "cours-particulier",
    audience: "particuliers",
    name: "Cours particulier en visio",
    price: "75 €",
    duration: "1 h · en visio individuelle",
    description:
      "Un coaching individuel, 100 % adapté à votre objectif (recherche d'emploi, projet perso, productivité…).",
    features: [
      "1 h en tête-à-tête",
      "Programme adapté à votre besoin",
      "Prompts personnalisés",
      "Conseils outils et méthode",
    ],
    highlight: true,
    badge: "Le plus demandé",
    cta: "Réserver mon cours",
  },
  {
    id: "pack-autonomie",
    audience: "particuliers",
    name: "Pack Autonomie IA",
    price: "290 €",
    duration: "5 h + support",
    description:
      "Un parcours complet pour devenir vraiment autonome avec l'IA, à votre rythme.",
    features: [
      "5 h de formation personnalisée",
      "Support entre les séances",
      "Bibliothèque de prompts évolutive",
      "Suivi de progression",
    ],
    cta: "Choisir ce pack",
  },
];

/** Filtre les offres par public. */
export function offersByAudience(audience: Audience): Offer[] {
  return offers.filter((o) => o.audience === audience);
}

/** Retrouve une offre par son identifiant. */
export function getOffer(id: string): Offer | undefined {
  return offers.find((o) => o.id === id);
}
