import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Fichier robots.txt généré dynamiquement. */
export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
