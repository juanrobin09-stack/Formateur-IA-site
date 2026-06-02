"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUp, Check } from "lucide-react";

/**
 * Visuel produit du hero : une maquette d'assistant IA qui montre,
 * de façon concrète, la valeur d'une formation (prompt → résultat).
 * Style « product shot » startup.
 */
export function HeroShowcase() {
  return (
    <section className="relative -mt-8 pb-20 sm:pb-28">
      {/* Halo sous la maquette */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-[90%] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/20 blur-[100px]"
        aria-hidden
      />

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <div className="border-gradient overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-2xl shadow-brand-950/40 backdrop-blur-xl">
            {/* Barre de fenêtre */}
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
              <div className="ml-3 flex items-center gap-1.5 text-xs text-white/40">
                <Sparkles size={12} className="text-brand-400" />
                Assistant IA · Académie IA
              </div>
            </div>

            {/* Conversation */}
            <div className="space-y-4 p-5 sm:p-6">
              {/* Message utilisateur */}
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-br-md bg-brand-600/90 px-4 py-2.5 text-sm text-white shadow-lg shadow-brand-600/20">
                  Rédige une annonce pour un T3 de 65 m² avec balcon, proche du
                  centre.
                </div>
              </div>

              {/* Réponse IA */}
              <div className="flex justify-start">
                <div className="max-w-[88%] space-y-2 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/85">
                  <p className="font-semibold text-white">
                    ✨ Appartement T3 lumineux avec balcon — hypercentre
                  </p>
                  <p className="text-white/70">
                    Coup de cœur assuré ! Ce T3 de 65 m² vous séduira par sa
                    luminosité, son balcon exposé sud et son emplacement idéal à
                    deux pas des commerces…
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Optimisé SEO", "Ton chaleureux", "Prêt à publier"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-brand-500/15 px-2 py-0.5 text-[11px] font-medium text-brand-200"
                        >
                          <Check size={10} />
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Champ de saisie (décoratif) */}
            <div className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5">
                <span className="flex-1 text-sm text-white/35">
                  Demandez n&apos;importe quoi à votre IA…
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white">
                  <ArrowUp size={15} />
                </span>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-white/40">
            Un exemple concret parmi des centaines : on construit{" "}
            <span className="text-white/70">vos</span> cas d&apos;usage, adaptés à{" "}
            <span className="text-white/70">votre</span> métier.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
