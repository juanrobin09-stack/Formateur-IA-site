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
    { path: "/tarifs", priority: 0.8, changeFrequency: "monthly" },
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
