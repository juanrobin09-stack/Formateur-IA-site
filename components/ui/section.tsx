import { clsx } from "@/lib/clsx";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

/** En-tête de section (eyebrow + titre + sous-titre), centré par défaut. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={clsx(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-brand-400">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-white/60">{subtitle}</p>
      )}
    </Reveal>
  );
}

/** Section verticale avec rythme d'espacement homogène. */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={clsx("py-16 sm:py-24", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}
