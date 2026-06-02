import Link from "next/link";
import { site } from "@/lib/site";

/** Logo textuel Académie IA avec marqueur dégradé. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className ?? ""}`}
      aria-label={`${site.name} — accueil`}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-600/30 transition-transform group-hover:scale-105">
        <span className="font-display text-lg font-bold leading-none text-white">
          A
        </span>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-white/90" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        Académie <span className="text-brand-400">IA</span>
      </span>
    </Link>
  );
}
