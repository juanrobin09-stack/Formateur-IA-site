/**
 * Contenu éditorial réutilisable : chiffres clés, témoignages, FAQ,
 * étapes, raisons de choisir Formator AI, cas d'usage par secteur.
 *
 * Les éléments de preuve sociale sont balisés [À REMPLACER].
 */

import {
  Brain,
  Building2,
  HardHat,
  Hammer,
  Home,
  Stethoscope,
  Store,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

/** 4 chiffres clés affichés dans la barre de réassurance. */
export const keyStats = [
  { value: "+30", label: "entreprises formées", note: "[À REMPLACER]" },
  { value: "5 à 10 h", label: "économisées / semaine", note: "[À REMPLACER]" },
  { value: "4,9/5", label: "de satisfaction", note: "[À REMPLACER]" },
  { value: "100 %", label: "repartent avec un cas d'usage", note: "[À REMPLACER]" },
];

/** Pourquoi Formator AI. */
export const reasons = [
  {
    title: "100 % personnalisé métier",
    description:
      "Pas de théorie générique : chaque exemple part de vos vrais dossiers et de votre quotidien.",
  },
  {
    title: "Concret, dès demain",
    description:
      "Vous repartez avec vos prompts, vos automatisations et un plan d'action applicable immédiatement.",
  },
  {
    title: "Tous les outils IA",
    description:
      "ChatGPT, Claude, Gemini, Copilot, Perplexity, Midjourney… On vous oriente vers les bons outils.",
  },
  {
    title: "Sans jargon",
    description:
      "Une pédagogie simple et rassurante, pensée pour celles et ceux qui partent de zéro.",
  },
  {
    title: "Finançable",
    description:
      "Formations en entreprise potentiellement finançables via votre OPCO, selon éligibilité.",
  },
];

/** Comment ça marche, en 4 étapes. */
export const steps = [
  {
    title: "Audit gratuit",
    description:
      "30 minutes pour comprendre votre métier et repérer vos cas d'usage IA prioritaires.",
  },
  {
    title: "Programme sur-mesure",
    description:
      "On conçoit un programme adapté à vos objectifs, votre niveau et votre secteur.",
  },
  {
    title: "Formation",
    description:
      "En présentiel ou en distanciel, place à la pratique sur vos propres dossiers.",
  },
  {
    title: "Suivi + support",
    description:
      "On reste disponibles après la formation pour ancrer les bons réflexes durablement.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

/** Témoignages de clients particuliers. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Un grand merci ! J'étais complètement perdu avec l'IA, et en quelques séances j'ai appris à m'en servir au quotidien. Pédagogue, patient et très concret : je recommande les yeux fermés.",
    name: "Frédéric Perges",
    role: "Particulier",
    company: "Client accompagné en visio",
  },
  {
    quote:
      "Une formation claire, sans jargon et vraiment adaptée à mes besoins. J'ai gagné en autonomie et en confiance avec les outils IA. Top !",
    name: "Gino Robin",
    role: "Particulier",
    company: "Client accompagné en visio",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

/** Foire aux questions. */
export const faq: FaqItem[] = [
  {
    question: "Faut-il des connaissances en informatique ?",
    answer:
      "Non, aucune. Nos formations sont conçues pour les débutants comme pour les plus à l'aise. On part de votre niveau et on avance pas à pas, sans jargon.",
  },
  {
    question: "C'est en présentiel ou en distanciel ?",
    answer:
      "Les deux. Les formations en entreprise se déroulent dans vos locaux ou en visio, selon vos préférences. Les offres particuliers se font en visio.",
  },
  {
    question: "Est-ce finançable ?",
    answer:
      "Les formations en entreprise sont potentiellement finançables via votre OPCO, selon votre éligibilité. Nous fournissons un devis et les documents nécessaires.",
  },
  {
    question: "Combien de temps dure une formation ?",
    answer:
      "De la demi-journée (Atelier Découverte) à 2 jours + 1 mois de suivi (Programme Transformation). Les formats particuliers vont de 1 h à 5 h.",
  },
  {
    question: "Sur quels outils formez-vous ?",
    answer:
      "Sur tous les outils d'IA générative utiles à votre métier : ChatGPT, Claude, Gemini, Copilot, Perplexity, Midjourney et bien d'autres.",
  },
  {
    question: "Proposez-vous du sur-mesure ?",
    answer:
      "Oui. Nous concevons des programmes intra-entreprise entièrement adaptés à vos équipes, vos outils et vos objectifs. Demandez un devis.",
  },
  {
    question: "Et pour les particuliers ?",
    answer:
      "Nous proposons des ateliers collectifs en ligne, des cours particuliers en visio et un Pack Autonomie IA pour devenir vraiment autonome à votre rythme.",
  },
];

export interface SectorUseCase {
  icon: LucideIcon;
  sector: string;
  useCases: string[];
}

/** Cas d'usage par secteur (page Entreprises). */
export const sectorUseCases: SectorUseCase[] = [
  {
    icon: Home,
    sector: "Immobilier",
    useCases: [
      "Rédiger des annonces percutantes en quelques secondes",
      "Préparer les visites et les relances clients",
      "Synthétiser les diagnostics et les comptes-rendus",
    ],
  },
  {
    icon: UtensilsCrossed,
    sector: "Restauration",
    useCases: [
      "Créer menus, cartes et fiches plats",
      "Gérer les avis clients et les réseaux sociaux",
      "Planifier les achats et réduire le gaspillage",
    ],
  },
  {
    icon: HardHat,
    sector: "BTP",
    useCases: [
      "Rédiger devis et comptes-rendus de chantier",
      "Répondre plus vite aux appels d'offres",
      "Structurer le suivi de sécurité",
    ],
  },
  {
    icon: Hammer,
    sector: "Artisans",
    useCases: [
      "Automatiser les devis et factures",
      "Communiquer simplement sur vos réalisations",
      "Gérer les demandes clients sans y passer la soirée",
    ],
  },
  {
    icon: Store,
    sector: "Commerce",
    useCases: [
      "Fiches produits et descriptions optimisées",
      "Campagnes marketing et e-mailing",
      "Service client assisté par l'IA",
    ],
  },
  {
    icon: Stethoscope,
    sector: "Professions libérales",
    useCases: [
      "Synthèses de dossiers et comptes-rendus",
      "Rédaction de courriers et de documents",
      "Veille et recherche d'informations fiables",
    ],
  },
];

/** Publics particuliers ciblés (page Particuliers). */
export const individualProfiles = [
  {
    icon: Brain,
    title: "Indépendants",
    description:
      "Gagnez du temps sur l'administratif, le marketing et la relation client.",
  },
  {
    icon: Building2,
    title: "Salariés",
    description:
      "Montez en compétences et devenez la personne « qui maîtrise l'IA » dans votre équipe.",
  },
  {
    icon: Home,
    title: "Demandeurs d'emploi",
    description:
      "Boostez votre CV, vos candidatures et préparez vos entretiens avec l'IA.",
  },
  {
    icon: Store,
    title: "Curieux de l'IA",
    description:
      "Découvrez ce que l'IA peut vraiment faire pour vous, sans prise de tête.",
  },
];
