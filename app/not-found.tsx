import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

// Next.js injecte déjà automatiquement un <meta name="robots" content="noindex">
// sur cette page (en plus du vrai statut HTTP 404) : inutile de le redéfinir
// ici, ça créerait une deuxième balise robots dupliquée.
export const metadata: Metadata = {
  title: "Page introuvable",
};

const usefulLinks = [
  { href: "/entreprises", label: "Formations entreprises" },
  { href: "/particuliers", label: "Formations particuliers" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Nous contacter" },
];

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-display text-7xl font-bold text-brand-500/40">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold">
        Page introuvable
      </h1>
      <p className="mt-3 max-w-md text-white/60">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
        Retournons à l&apos;essentiel.
      </p>

      <ButtonLink href="/" size="lg" className="mt-8">
        <Home size={18} />
        Retour à l&apos;accueil
      </ButtonLink>

      <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {usefulLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-white"
            >
              {link.label}
              <ArrowRight size={13} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
