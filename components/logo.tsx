import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Logo Académie IA — marque-mot premium avec monogramme « A » en dégradé
 * indigo→violet et halo lumineux.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className ?? ""}`}
      aria-label={`${site.name} — accueil`}
    >
      {/* Monogramme */}
      <span className="relative flex h-9 w-9 items-center justify-center">
        {/* Halo */}
        <span className="absolute inset-0 rounded-[0.7rem] bg-gradient-to-br from-brand-500 to-accent-600 opacity-60 blur-md transition-opacity group-hover:opacity-90" />
        {/* Pastille */}
        <span className="relative flex h-9 w-9 items-center justify-center rounded-[0.7rem] bg-gradient-to-br from-brand-400 via-brand-600 to-accent-600 shadow-lg shadow-accent-600/30 ring-1 ring-inset ring-white/20 transition-transform group-hover:scale-105">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            aria-hidden
          >
            {/* « A » stylisé + barre = idée d'académie / sommet */}
            <path
              d="M5 19L12 5l7 14"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 14h7"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </span>

      {/* Marque-mot */}
      <span className="font-display text-lg font-semibold tracking-tight">
        Académie{" "}
        <span className="bg-gradient-to-r from-brand-300 to-accent-400 bg-clip-text text-transparent">
          IA
        </span>
      </span>
    </Link>
  );
}
