"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { AudienceToggle } from "@/components/audience-offers";
import { useAudience } from "@/components/home/audience-context";
import { aiTools } from "@/lib/site";
import type { Audience } from "@/lib/offers";

const heroCopy: Record<
  Audience,
  { titleEnd: string; subtitle: string; cta: string; href: string }
> = {
  entreprises: {
    titleEnd: "enfin utile à votre métier.",
    subtitle:
      "Formez vos équipes à l'IA générative et gagnez 5 à 10 heures par semaine. Des programmes 100 % personnalisés à votre métier.",
    cta: "Réserver un audit gratuit",
    href: "/contact",
  },
  particuliers: {
    titleEnd: "enfin simple et accessible.",
    subtitle:
      "Apprenez à utiliser l'IA dès demain, sans connaissances techniques. Ateliers en ligne, cours particuliers en visio et pack autonomie.",
    cta: "Voir les offres particuliers",
    href: "/particuliers",
  },
};

/** Hero plein écran avec sélecteur de public. */
export function Hero() {
  const { audience, setAudience } = useAudience();
  const copy = heroCopy[audience];

  return (
    <section className="relative overflow-hidden">
      {/* Décor d'arrière-plan animé */}
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[-6rem] -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[120px] animate-pulse-glow sm:h-[44rem] sm:w-[60rem]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[-10%] top-[20%] -z-10 h-72 w-72 rounded-full bg-brand-500/20 blur-[100px] animate-float-slow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-8%] top-[40%] -z-10 h-72 w-72 rounded-full bg-accent-500/20 blur-[100px] animate-float-slow [animation-delay:-8s]"
        aria-hidden
      />

      <div className="container-page relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center py-16 text-center sm:py-20">
        {/* Sélecteur de public */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AudienceToggle value={audience} onChange={setAudience} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 max-w-3xl text-balance font-display text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient">L&apos;intelligence artificielle, </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={audience}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-shine inline-block"
            >
              {copy.titleEnd}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        <div className="mx-auto mt-5 min-h-[7rem] max-w-xl sm:min-h-[5.5rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={audience}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-pretty text-base leading-relaxed text-white/65 sm:text-lg"
            >
              {copy.subtitle}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        >
          <ButtonLink href={copy.href} size="lg" className="w-full sm:w-auto">
            {copy.cta}
            <ArrowRight size={18} />
          </ButtonLink>
          <ButtonLink
            href="/tarifs"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Voir les formations
          </ButtonLink>
        </motion.div>

        <ButtonLink
          href="/reservation"
          variant="ghost"
          size="md"
          className="mt-3 text-white/60"
        >
          <Calendar size={16} />
          Ou réservez directement un créneau
        </ButtonLink>

        {/* Bandeau outils */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <p className="text-xs uppercase tracking-widest text-white/40">
            On vous forme sur les meilleurs outils
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm transition-colors hover:border-brand-500/40 hover:text-white sm:text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
