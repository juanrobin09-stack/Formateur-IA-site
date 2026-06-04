/**
 * Contenu éditorial réutilisable : témoignages, FAQ, étapes,
 * raisons de choisir Académie IA, cas d'usage par secteur.
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

/** Pourquoi Académie IA. */
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
    title: "Sans risque",
    description:
      "On commence toujours par une première étape gratuite et sans engagement. Vous jugez la qualité par vous-même, puis vous décidez.",
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
    name: "Frédéric",
    role: "Particulier",
    company: "Client accompagné en visio",
  },
  {
    quote:
      "Une formation claire, sans jargon et vraiment adaptée à mes besoins. J'ai gagné en autonomie et en confiance avec les outils IA. Top !",
    name: "Gino",
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
    question: "Comment se déroule l'accompagnement ?",
    answer:
      "On commence toujours par une phase de découverte (essai gratuit ou échantillon de 7 à 14 jours) pour valider la qualité sans risque. Vous choisissez ensuite un contrat sans engagement (30 jours) ou avec engagement (6 à 12 mois), selon votre rythme.",
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
    question: "Et si je veux juste tester d'abord ?",
    answer:
      "C'est exactement l'idée de la phase Découverte : un essai gratuit ou un échantillon à petit prix (7 à 14 jours) pour vous faire une idée concrète, sans engagement, avant de vous décider.",
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
