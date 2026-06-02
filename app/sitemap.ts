import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Génération automatique du sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const routes = [
    "",
    "/entreprises",
    "/particuliers",
    "/tarifs",
    "/a-propos",
    "/contact",
    "/reservation",
    "/mentions-legales",
    "/cgv",
  ];

  const now = new Date();
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
