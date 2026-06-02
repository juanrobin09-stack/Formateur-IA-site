"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { AudienceToggle } from "@/components/audience-offers";
import { aiTools } from "@/lib/site";
import type { Audience } from "@/lib/offers";

const heroCopy: Record<Audience, { subtitle: string; cta: string; href: string }> = {
  entreprises: {
    subtitle:
      "Formez vos équipes à l'IA générative et gagnez 5 à 10 heures par semaine. Des programmes 100 % personnalisés à votre métier, finançables OPCO.",
    cta: "Réserver un audit gratuit",
    href: "/contact",
  },
  particuliers: {
    subtitle:
      "Apprenez à utiliser l'IA dès demain, sans connaissances techniques. Ateliers en ligne, cours particuliers en visio et pack autonomie.",
    cta: "Voir les offres particuliers",
    href: "/particuliers",
  },
};

/** Hero plein écran avec sélecteur de public. */
export function Hero() {
  const [audience, setAudience] = useState<Audience>("entreprises");
  const copy = heroCopy[audience];

  return (
    <section className="relative overflow-hidden">
      {/* Décor d'arrière-plan */}
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]"
        aria-hidden
      />

      <div className="container-page relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-brand-400" />
          Formations IA pour entreprises &amp; particuliers
        </motion.div>

        {/* Sélecteur de public */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8"
        >
          <AudienceToggle value={audience} onChange={setAudience} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient">
            L&apos;intelligence artificielle, enfin utile à votre métier.
          </span>
        </motion.h1>

        <div className="mt-6 min-h-[5.5rem] max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={audience}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-lg leading-relaxed text-white/60 sm:text-xl"
            >
              {copy.subtitle}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
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
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="text-xs uppercase tracking-widest text-white/40">
            On vous forme sur les meilleurs outils
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="text-sm font-medium text-white/50 transition-colors hover:text-white/80"
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
