import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Logo Académie IA — monogramme « A » premium en dégradé indigo→violet,
 * avec étincelle « IA », reflet supérieur et halo lumineux.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className ?? ""}`}
      aria-label={`${site.name} — accueil`}
    >
      {/* Monogramme */}
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
        {/* Halo */}
        <span className="absolute inset-0 rounded-[0.75rem] bg-gradient-to-br from-brand-500 to-accent-600 opacity-50 blur-lg transition-opacity duration-300 group-hover:opacity-90" />

        {/* Pastille « squircle » */}
        <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-[0.75rem] bg-gradient-to-br from-brand-400 via-brand-600 to-accent-700 shadow-lg shadow-accent-700/40 ring-1 ring-inset ring-white/25 transition-transform duration-300 group-hover:scale-105">
          {/* Reflet supérieur */}
          <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent" />

          <svg
            viewBox="0 0 32 32"
            className="relative h-6 w-6"
            fill="none"
            aria-hidden
          >
            {/* Jambes du « A » */}
            <path
              d="M8 25 L16 8 L24 25"
              stroke="white"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Barre du « A » */}
            <path
              d="M11.5 19 H20.5"
              stroke="white"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            {/* Étincelle « IA » (4 branches) */}
            <path
              d="M24.5 6.2 c.4 1.7 .9 2.2 2.6 2.6 -1.7 .4 -2.2 .9 -2.6 2.6 -.4-1.7-.9-2.2-2.6-2.6 1.7-.4 2.2-.9 2.6-2.6Z"
              fill="white"
            />
          </svg>
        </span>
      </span>

      {/* Marque-mot */}
      <span className="font-display text-lg font-semibold tracking-tight">
        Académie
        <span className="bg-gradient-to-r from-brand-300 to-accent-400 bg-clip-text text-transparent">
          {" "}
          IA
        </span>
      </span>
    </Link>
  );
}
