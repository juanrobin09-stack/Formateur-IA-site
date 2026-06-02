/**
 * Catalogue des offres et tarifs de Académie IA.
 * Source unique de vérité, réutilisée sur l'accueil, /tarifs, /entreprises,
 * /particuliers et /reservation.
 */

export type Audience = "entreprises" | "particuliers";

export interface Offer {
  /** Identifiant stable (utilisé pour le pré-remplissage de la réservation). */
  id: string;
  audience: Audience;
  name: string;
  /** Prix affiché tel quel (ex. « 590 € HT », « OFFERT »). */
  price: string;
  duration: string;
  description: string;
  features: string[];
  /** Mise en avant visuelle (offre phare / aimant à prospects). */
  highlight?: boolean;
  badge?: string;
  /** Texte du bouton d'action. */
  cta: string;
}

export const offers: Offer[] = [
  // --- Entreprises ----------------------------------------------------------
  {
    id: "audit-entreprise",
    audience: "entreprises",
    name: "Audit IA",
    price: "Offert",
    duration: "30 min · diagnostic",
    description:
      "Un diagnostic gratuit pour identifier vos cas d'usage IA prioritaires et le temps que vous pourriez gagner.",
    features: [
      "Analyse de vos tâches chronophages",
      "Repérage de 2 à 3 cas d'usage concrets",
      "Estimation du temps gagné chaque semaine",
      "Recommandation de programme sur-mesure",
    ],
    badge: "Sans engagement",
    cta: "Réserver mon audit gratuit",
  },
  {
    id: "atelier-decouverte",
    audience: "entreprises",
    name: "Atelier Découverte",
    price: "590 € HT",
    duration: "½ journée · jusqu'à 8 personnes",
    description:
      "Une demi-journée pour démystifier l'IA et repartir avec vos premiers prompts utiles au quotidien.",
    features: [
      "Panorama des outils IA (ChatGPT, Claude…)",
      "Exercices appliqués à votre secteur",
      "Bibliothèque de prompts prêts à l'emploi",
      "Support PDF récapitulatif",
    ],
    cta: "Réserver cet atelier",
  },
  {
    id: "formation-metier",
    audience: "entreprises",
    name: "Formation IA Métier",
    price: "1 200 € HT",
    duration: "1 journée · jusqu'à 10 personnes",
    description:
      "Notre offre phare : une journée complète, 100 % personnalisée à votre métier, pour rendre votre équipe autonome.",
    features: [
      "Programme construit sur vos cas d'usage réels",
      "Mise en pratique sur vos propres dossiers",
      "Kit de prompts métier personnalisé",
      "Plan d'action « dès demain »",
      "Présentiel ou distanciel",
    ],
    highlight: true,
    badge: "Le plus populaire",
    cta: "Réserver la formation",
  },
  {
    id: "programme-transformation",
    audience: "entreprises",
    name: "Programme Transformation",
    price: "2 400 € HT",
    duration: "2 jours + 1 mois de suivi",
    description:
      "Un accompagnement en profondeur pour ancrer l'IA dans vos process et mesurer les gains.",
    features: [
      "2 jours de formation intensive",
      "Déploiement accompagné sur vos outils",
      "1 mois de suivi et de support",
      "Indicateurs de productivité partagés",
      "Référent IA formé dans votre équipe",
    ],
    cta: "Réserver le programme",
  },
  {
    id: "sur-mesure",
    audience: "entreprises",
    name: "Sur-mesure / Intra-entreprise",
    price: "Sur devis",
    duration: "Format adapté à vos besoins",
    description:
      "Un programme entièrement conçu pour votre organisation, vos équipes et vos objectifs.",
    features: [
      "Cadrage avec vos responsables",
      "Contenus 100 % sur-mesure",
      "Plusieurs sessions et sites possibles",
      "Finançable OPCO selon éligibilité",
    ],
    badge: "Finançable OPCO selon éligibilité",
    cta: "Demander un devis",
  },

  // --- Particuliers ---------------------------------------------------------
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
      "Un coaching individuel, 100 % adapté à votre objectif (recherche d'emploi, projet, productivité…).",
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
