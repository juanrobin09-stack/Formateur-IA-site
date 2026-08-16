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
  // Domaine réel de production (académie-ia.com, forme Punycode car le "é"
  // n'est pas un caractère ASCII). Surchargeable via NEXT_PUBLIC_SITE_URL —
  // vérifiez que cette variable est bien définie sur Vercel avec la même valeur.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://xn--acadmie-ia-e7a.com",

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
    director: "Juan Robin",
    statut: "Entrepreneur individuel",
    siren: "994 221 653",
    siret: process.env.NEXT_PUBLIC_SIRET || "",
    address: process.env.NEXT_PUBLIC_ADDRESS || "",
    host: "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA",
  },
} as const;

/** Liens de navigation principaux. */
export const navLinks = [
  { href: "/entreprises", label: "Entreprises" },
  { href: "/particuliers", label: "Particuliers" },
  { href: "/formations", label: "Formations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/avis", label: "Avis" },
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
