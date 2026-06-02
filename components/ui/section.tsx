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
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-300">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
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
