/**
 * Configuration globale de la marque Académie IA.
 * Centralise le contenu réutilisé dans tout le site (nom, slogan, coordonnées…).
 *
 * Les données personnelles sont volontairement laissées en [À REMPLACER]
 * ou pointent vers des valeurs fournies par l'utilisateur.
 */

export const site = {
  name: "Académie IA",
  slogan: "L'intelligence artificielle, enfin utile à votre métier.",
  baseline:
    "Passez de « l'IA c'est flou » à « je l'utilise dès demain ». Des formations 100 % personnalisées à votre métier.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://academie-ia.fr",

  // --- Coordonnées (fournies / à compléter) ---------------------------------
  contact: {
    email: "juanrobin89@gmail.com",
    phone: "06.24.95.63.08",
    phoneHref: "+33624956308",
    city: "[À REMPLACER : ville]",
    linkedin: "[À REMPLACER : URL LinkedIn]",
  },

  // --- Données légales (à compléter avant mise en ligne) --------------------
  legal: {
    company: "[À REMPLACER : raison sociale]",
    siret: "[À REMPLACER : SIRET]",
    address: "[À REMPLACER : adresse complète]",
    director: "[À REMPLACER : nom du responsable de publication]",
    host: "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA",
  },
} as const;

/** Liens de navigation principaux. */
export const navLinks = [
  { href: "/entreprises", label: "Entreprises" },
  { href: "/particuliers", label: "Particuliers" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;

/** Outils IA couverts par les formations. */
export const aiTools = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Copilot",
  "Perplexity",
  "Midjourney",
] as const;
