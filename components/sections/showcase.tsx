"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUp, Check } from "lucide-react";
import { useAudience } from "@/components/home/audience-context";
import type { Audience } from "@/lib/offers";

interface Example {
  /** Libellé court affiché dans la puce cliquable. */
  chip: string;
  /** Message envoyé par l'utilisateur. */
  prompt: string;
  /** Titre de la réponse de l'IA. */
  title: string;
  /** Corps de la réponse. */
  body: string;
  /** Étiquettes de qualité affichées sous la réponse. */
  tags: string[];
}

const examples: Record<Audience, Example[]> = {
  entreprises: [
    {
      chip: "Annonce immo",
      prompt: "Rédige une annonce pour un T3 de 65 m² avec balcon, proche du centre.",
      title: "Appartement T3 lumineux avec balcon — hypercentre",
      body: "Coup de cœur assuré ! Ce T3 de 65 m² vous séduira par sa luminosité, son balcon exposé sud et son emplacement idéal à deux pas des commerces…",
      tags: ["Optimisé SEO", "Ton chaleureux", "Prêt à publier"],
    },
    {
      chip: "Email client",
      prompt: "Réponds à un client mécontent d'un retard de livraison, ton pro et rassurant.",
      title: "Réponse au client — suivi de commande",
      body: "Bonjour, je comprends votre frustration et je vous présente nos excuses pour ce retard. Votre commande est repartie ce matin et arrivera sous 48 h. Voici un geste commercial pour la gêne occasionnée…",
      tags: ["Ton pro", "Empathique", "Prêt à envoyer"],
    },
    {
      chip: "Compte-rendu",
      prompt: "Résume ce compte-rendu de réunion en 5 points avec les actions à suivre.",
      title: "Synthèse de réunion — 5 points clés",
      body: "1. Budget validé pour le T2. 2. Lancement produit décalé au 15. 3. Marie pilote la com'. 4. Devis fournisseur à relancer. 5. Prochaine réunion vendredi…",
      tags: ["Synthétique", "Actions claires", "Gain de temps"],
    },
  ],
  particuliers: [
    {
      chip: "Lettre de motivation",
      prompt: "Écris une lettre de motivation pour un poste d'assistant commercial.",
      title: "Lettre de motivation — Assistant commercial",
      body: "Madame, Monsieur, fort d'un sens du contact développé et d'une réelle aisance relationnelle, je souhaite mettre mon dynamisme au service de votre équipe commerciale…",
      tags: ["Personnalisé", "Convaincant", "Prêt à envoyer"],
    },
    {
      chip: "Week-end à Lisbonne",
      prompt: "Organise-moi un week-end à Lisbonne avec un budget de 400 €.",
      title: "Week-end à Lisbonne — 3 jours, 400 €",
      body: "Jour 1 : Alfama et coucher de soleil au Miradouro. Jour 2 : Belém, pastéis de nata et tramway 28. Jour 3 : marché de Lisbonne. Logement et vols dans le budget…",
      tags: ["Jour par jour", "Dans le budget", "Bons plans"],
    },
    {
      chip: "Expliquer simplement",
      prompt: "Explique-moi simplement comment fonctionne un crédit immobilier.",
      title: "Le crédit immobilier, expliqué simplement",
      body: "Une banque vous prête une somme que vous remboursez chaque mois, sur 15 à 25 ans. Chaque mensualité paie une part du capital et des intérêts. Voici un exemple concret…",
      tags: ["Sans jargon", "Clair", "Avec exemples"],
    },
  ],
};

export function HeroShowcase() {
  const { audience } = useAudience();
  const list = examples[audience];
  const [active, setActive] = useState(0);
  const [thinking, setThinking] = useState(false);

  // Revient au premier exemple quand on change de public.
  useEffect(() => {
    setActive(0);
  }, [audience]);

  // Petite animation de « réflexion » à chaque changement d'exemple.
  useEffect(() => {
    setThinking(true);
    const t = setTimeout(() => setThinking(false), 650);
    return () => clearTimeout(t);
  }, [active, audience]);

  const current = list[active];

  return (
    <section className="relative -mt-8 pb-20 sm:pb-28">
      {/* Halo sous la maquette */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-[90%] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/20 blur-[100px]"
        aria-hidden
      />

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            <div className="min-h-[248px] space-y-4 p-5 sm:p-6">
              {/* Message utilisateur */}
              <div className="flex justify-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${audience}-${active}-prompt`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="max-w-[80%] rounded-2xl rounded-br-md bg-brand-600/90 px-4 py-2.5 text-sm text-white shadow-lg shadow-brand-600/20"
                  >
                    {current.prompt}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Réponse IA */}
              <div className="flex justify-start">
                <AnimatePresence mode="wait">
                  {thinking ? (
                    <motion.div
                      key="thinking"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.04] px-4 py-3"
                    >
                      {[0, 1, 2].map((d) => (
                        <motion.span
                          key={d}
                          className="h-2 w-2 rounded-full bg-brand-300"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 0.9,
                            repeat: Infinity,
                            delay: d * 0.15,
                          }}
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`${audience}-${active}-answer`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="max-w-[88%] space-y-2 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/85"
                    >
                      <p className="font-semibold text-white">
                        ✨ {current.title}
                      </p>
                      <p className="text-white/70">{current.body}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {current.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-full bg-brand-500/15 px-2 py-0.5 text-[11px] font-medium text-brand-200"
                          >
                            <Check size={10} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Suggestions cliquables */}
            <div className="border-t border-white/10 px-3 pt-3">
              <p className="px-1 pb-2 text-[11px] uppercase tracking-wider text-white/30">
                Essayez un exemple
              </p>
              <div className="flex flex-wrap gap-2">
                {list.map((ex, i) => (
                  <button
                    key={ex.chip}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    className={
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors " +
                      (i === active
                        ? "border-brand-500/50 bg-brand-500/15 text-brand-100"
                        : "border-white/10 bg-white/[0.03] text-white/55 hover:border-white/25 hover:text-white")
                    }
                  >
                    {ex.chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Champ de saisie (décoratif) */}
            <div className="p-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5">
                <span className="flex-1 truncate text-sm text-white/35">
                  {current.prompt}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <ArrowUp size={15} />
                </span>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-white/40">
            {audience === "entreprises" ? (
              <>
                Un exemple concret parmi des centaines : on construit{" "}
                <span className="text-white/70">vos</span> cas d&apos;usage,
                adaptés à <span className="text-white/70">votre</span> métier.
              </>
            ) : (
              <>
                Emploi, voyages, démarches du quotidien : on vous apprend à faire{" "}
                <span className="text-white/70">tout ça</span> vous-même, en
                quelques minutes.
              </>
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
