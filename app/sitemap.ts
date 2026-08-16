import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Génération automatique du sitemap.
 * N'inclut que les pages réellement indexables (les pages en noindex comme
 * /cgv et /mentions-legales sont volontairement absentes).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/entreprises", priority: 0.9, changeFrequency: "monthly" },
    { path: "/particuliers", priority: 0.9, changeFrequency: "monthly" },
    { path: "/formations", priority: 0.8, changeFrequency: "monthly" },
    { path: "/formations/chatgpt", priority: 0.8, changeFrequency: "monthly" },
    { path: "/entreprises/immobilier", priority: 0.7, changeFrequency: "monthly" },
    { path: "/entreprises/restauration", priority: 0.7, changeFrequency: "monthly" },
    { path: "/entreprises/btp", priority: 0.7, changeFrequency: "monthly" },
    { path: "/entreprises/artisans", priority: 0.7, changeFrequency: "monthly" },
    { path: "/entreprises/commerce", priority: 0.7, changeFrequency: "monthly" },
    { path: "/entreprises/professions-liberales", priority: 0.7, changeFrequency: "monthly" },
    { path: "/tarifs", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/blog/comment-utiliser-chatgpt-au-travail", priority: 0.6, changeFrequency: "yearly" },
    { path: "/blog/apprendre-intelligence-artificielle-debutant", priority: 0.6, changeFrequency: "yearly" },
    { path: "/blog/former-salaries-intelligence-artificielle", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/reservation", priority: 0.6, changeFrequency: "yearly" },
    { path: "/avis", priority: 0.6, changeFrequency: "weekly" },
    { path: "/a-propos", priority: 0.5, changeFrequency: "yearly" },
  ];

  const now = new Date();
  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
