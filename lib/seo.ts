/**
 * Aide centralisée pour les métadonnées de page.
 *
 * Le layout racine définit des valeurs par défaut (title template, OG,
 * Twitter…), mais chaque page DOIT appeler `pageMetadata()` pour :
 * - fixer sa propre URL canonique (sinon toutes les pages canonicalisent
 *   vers la page d'accueil, ce qui empêche Google de les indexer correctement) ;
 * - fournir un Open Graph / Twitter Card qui correspond à SON contenu,
 *   et non à celui hérité de la page d'accueil.
 */

import type { Metadata } from "next";
import { site } from "@/lib/site";
import type { Offer } from "@/lib/offers";

export interface PageMetadataInput {
  /** Titre de la page (le suffixe " · Académie IA" est ajouté automatiquement). */
  title: string;
  description: string;
  /** Chemin absolu depuis la racine, ex. "/entreprises". Vide pour l'accueil. */
  path?: string;
  /** Exclut la page de l'index (mentions légales, CGV…). */
  noIndex?: boolean;
}

export function pageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = `${site.url.replace(/\/$/, "")}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} · ${site.name}`,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${site.name}`,
      description,
    },
    ...(noIndex && {
      robots: { index: false, follow: true },
    }),
  };
}

/** Données structurées Organization, injectées une fois sur tout le site. */
export function organizationJsonLd(): Record<string, unknown> {
  const base = site.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: base,
    logo: `${base}/icon.svg`,
    description: site.baseline,
    email: site.contact.email,
    telephone: site.contact.phoneHref,
    founder: {
      "@type": "Person",
      name: site.legal.director,
    },
    ...(site.contact.linkedin && { sameAs: [site.contact.linkedin] }),
  };
}

/** Données structurées WebSite, injectées une fois sur tout le site. */
export function websiteJsonLd(): Record<string, unknown> {
  const base = site.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: base,
    inLanguage: "fr-FR",
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** Données structurées BreadcrumbList, à partir d'un fil d'Ariane. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
  const base = site.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${base}${item.path}`,
    })),
  };
}

/**
 * Données structurées Course pour un ensemble d'offres. N'émet un sous-objet
 * `offers` que pour les prix fermes (jamais pour "Sur devis", qui n'a pas de
 * prix public réel à annoncer aux moteurs de recherche).
 */
function parsePrice(price: string): number | null {
  if (price === "Gratuit") return 0;
  const match = price.trim().match(/^(\d+)\s?€$/);
  return match ? Number(match[1]) : null;
}

export function coursesJsonLd(offers: Offer[]): Record<string, unknown>[] {
  const base = site.url.replace(/\/$/, "");
  return offers.map((offer) => {
    const numericPrice = parsePrice(offer.price);

    return {
      "@context": "https://schema.org",
      "@type": "Course",
      name: offer.name,
      description: offer.description,
      provider: {
        "@type": "Organization",
        name: site.name,
        url: base,
      },
      ...(numericPrice !== null && {
        offers: {
          "@type": "Offer",
          price: numericPrice,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      }),
    };
  });
}
