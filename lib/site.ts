/**
 * Configuration globale de la marque Académie IA.
 * Centralise le contenu réutilisé dans tout le site (nom, slogan, coordonnées…).
 *
 * Les informations personnelles (téléphone, SIRET…) sont configurables ici
 * et/ou via les variables d'environnement.
 */

export const site = {
  name: "Académie IA",
  slogan: "L'intelligence artificielle, enfin utile à votre métier.",
  baseline:
    "Passez de « l'IA c'est flou » à « je l'utilise dès demain ». Des formations 100 % personnalisées à votre métier.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://academie-ia.fr",

  // --- Coordonnées ----------------------------------------------------------
  contact: {
    email: "juanrobin89@gmail.com",
    phone: "06.24.95.63.08",
    phoneHref: "+33624956308",
    area: "France · présentiel & distanciel",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  },

  // --- Données légales ------------------------------------------------------
  legal: {
    company: "Académie IA",
    siret: process.env.NEXT_PUBLIC_SIRET || "",
    address: process.env.NEXT_PUBLIC_ADDRESS || "",
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
