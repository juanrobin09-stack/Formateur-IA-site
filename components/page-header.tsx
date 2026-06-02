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
      <div className="container-page py-20 text-center sm:py-28">
        <Reveal className="mx-auto max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-brand-400">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
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
