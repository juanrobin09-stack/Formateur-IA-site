/**
 * Catalogue des offres d'Académie IA.
 * - Entreprises : formation sur-mesure → accompagnement continu.
 * - Particuliers : séance découverte → ateliers → coaching → pack complet →
 *   prestations sur-mesure (réalisées par le formateur, pas une formation).
 * Source unique de vérité, réutilisée sur l'accueil, /tarifs et /reservation.
 */

export type Audience = "entreprises" | "particuliers";

export interface Offer {
  /** Identifiant stable (utilisé pour le pré-remplissage de la réservation). */
  id: string;
  audience: Audience;
  name: string;
  /** Prix affiché tel quel (ex. « 49 € », « Sur devis », « Gratuit »). */
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
  // === ENTREPRISES ==========================================================
  {
    id: "formation-equipe",
    audience: "entreprises",
    name: "Formation équipe",
    price: "Sur devis",
    duration: "1 à 2 jours · présentiel ou visio",
    description:
      "Une formation concrète et personnalisée pour vos équipes, construite autour de vos vrais cas d'usage métier. Devis clair envoyé sous 24 h.",
    features: [
      "Programme adapté à votre secteur",
      "Exercices sur vos propres dossiers",
      "Support de formation inclus",
      "Paiement unique à la prestation",
    ],
    highlight: true,
    badge: "Le plus demandé",
    cta: "Demander un devis",
  },
  {
    id: "accompagnement-surmesure",
    audience: "entreprises",
    name: "Accompagnement sur-mesure",
    price: "Sur devis",
    duration: "Plusieurs sessions · à définir ensemble",
    description:
      "Un programme structuré sur plusieurs sessions pour un déploiement progressif de l'IA dans votre organisation, avec un suivi dans la durée.",
    features: [
      "Diagnostic initial + formation + sessions de suivi",
      "Rythme adapté à votre organisation",
      "Ajustements selon vos retours",
      "Interlocuteur dédié tout au long",
    ],
    cta: "Discuter de mon projet",
  },

  // === PARTICULIERS ==========================================================
  {
    id: "seance-decouverte",
    audience: "particuliers",
    name: "Séance découverte",
    price: "Gratuit",
    duration: "30 min · en visio",
    description:
      "Un premier échange pour voir ce que l'IA peut faire concrètement pour vous, sans jargon et sans engagement. On repart avec un plan d'action clair.",
    features: [
      "Sans engagement",
      "Conseils personnalisés à votre situation",
      "Pour savoir exactement par où commencer",
    ],
    badge: "Gratuit",
    cta: "Réserver ma séance",
  },
  {
    id: "atelier-collectif",
    audience: "particuliers",
    name: "Atelier collectif",
    price: "49 €",
    duration: "2 h · en visio",
    description:
      "Une session live pour découvrir les outils IA essentiels, poser vos questions et repartir avec des réflexes concrets utilisables dès le lendemain.",
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
    name: "Cours particulier",
    price: "À partir de 75 €",
    duration: "1 h · visio ou à domicile (Gironde/Libournais)",
    description:
      "Un coaching 100 % adapté à votre situation : recherche d'emploi, projet perso, productivité, rédaction… On avance vite sur ce qui compte pour vous.",
    features: [
      "1 h en tête-à-tête",
      "Programme centré sur votre objectif",
      "Visio : 75 € · présentiel : dès 85 € (Gironde/Libournais)",
      "100% pratique, sur votre cas réel",
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
    duration: "5 h · à répartir comme vous voulez",
    description:
      "Un parcours complet pour devenir vraiment autonome avec l'IA. Cinq heures de formation personnalisée, réparties librement selon votre rythme et vos objectifs.",
    features: [
      "5 h de formation individuelle, réparties à votre rythme",
      "Support et échanges entre les séances",
      "Bibliothèque de prompts évolutive",
      "Suivi de progression inclus",
    ],
    cta: "Choisir ce pack",
  },
  {
    id: "prestation-surmesure",
    audience: "particuliers",
    name: "Prestation IA clé en main",
    price: "Sur devis",
    duration: "Selon le projet",
    description:
      "Vous avez un projet précis (CV, lettre de motivation, présentation, automatisation, contenu…) mais pas le temps ou l'envie de le faire vous-même ? Je le réalise pour vous avec l'IA.",
    features: [
      "Rédaction, contenu, automatisation…",
      "Devis clair avant de démarrer",
      "Livraison rapide",
      "Résultat prêt à l'emploi",
    ],
    cta: "Décrire mon projet",
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
