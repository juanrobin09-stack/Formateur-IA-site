import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";

/** En-tête de page interne (titre + intro), avec halo décoratif et fil d'Ariane optionnel. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
  breadcrumb,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  /** Fil d'Ariane, sans l'accueil (ajouté automatiquement). Ex. [{ name: "Entreprises", path: "/entreprises" }] */
  breadcrumb?: BreadcrumbItem[];
}) {
  const trail: BreadcrumbItem[] = breadcrumb
    ? [{ name: "Accueil", path: "/" }, ...breadcrumb]
    : [];

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {trail.length > 0 && (
        <JsonLd data={breadcrumbJsonLd(trail)} />
      )}
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-brand-600/15 blur-[120px]"
        aria-hidden
      />
      <div className="container-page py-16 text-center sm:py-24">
        {trail.length > 0 && (
          <nav aria-label="Fil d'Ariane" className="mb-6 flex justify-center">
            <ol className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-white/40">
              {trail.map((item, i) => (
                <li key={item.path} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight size={12} className="text-white/25" />}
                  {i === trail.length - 1 ? (
                    <span className="text-white/60" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link href={item.path} className="transition-colors hover:text-white/70">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <Reveal className="mx-auto max-w-3xl">
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              {eyebrow}
            </span>
          )}
          <h1 className="text-balance font-display text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
