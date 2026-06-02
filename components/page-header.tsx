import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

/** En-tête de page interne (titre + intro), avec halo décoratif. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-brand-600/15 blur-[120px]"
        aria-hidden
      />
      <div className="container-page py-16 text-center sm:py-24">
        <Reveal className="mx-auto max-w-3xl">
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-[2.25rem] font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
