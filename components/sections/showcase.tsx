"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUp,
  Check,
  Home,
  Mail,
  FileText,
  PenLine,
  Plane,
  GraduationCap,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { useAudience } from "@/components/home/audience-context";
import type { Audience } from "@/lib/offers";

interface Example {
  icon: LucideIcon;
  /** Libellé court de la puce. */
  chip: string;
  /** Tâche résolue, affichée dans le bandeau (le « sens »). */
  useCase: string;
  /** Bénéfice concret : temps gagné ou résultat. */
  result: string;
  /** Message tapé par l'utilisateur. */
  prompt: string;
  /** Titre de la réponse. */
  title: string;
  /** Corps de la réponse. */
  body: string;
  /** Étiquettes de qualité. */
  tags: string[];
}

const examples: Record<Audience, Example[]> = {
  entreprises: [
    {
      icon: Home,
      chip: "Annonce immo",
      useCase: "Rédiger une annonce immobilière",
      result: "≈ 30 min gagnées",
      prompt: "Rédige une annonce pour un T3 de 65 m² avec balcon, proche du centre.",
      title: "Appartement T3 lumineux avec balcon — hypercentre",
      body: "Coup de cœur assuré ! Ce T3 de 65 m² séduit par sa luminosité, son balcon exposé sud et son emplacement idéal, à deux pas des commerces et des transports.",
      tags: ["Optimisé SEO", "Ton chaleureux", "Prêt à publier"],
    },
    {
      icon: Mail,
      chip: "Email client",
      useCase: "Répondre à un client mécontent",
      result: "Réponse pro en 20 s",
      prompt: "Réponds à un client mécontent d'un retard de livraison, ton pro et rassurant.",
      title: "Réponse au client — suivi de votre commande",
      body: "Bonjour, je comprends votre frustration et vous présente toutes nos excuses. Votre commande est repartie ce matin et arrivera sous 48 h. Pour la gêne, voici un geste commercial…",
      tags: ["Ton pro", "Empathique", "Prêt à envoyer"],
    },
    {
      icon: FileText,
      chip: "Compte-rendu",
      useCase: "Synthétiser une réunion d'une heure",
      result: "Compte-rendu en 15 s",
      prompt: "Résume ce compte-rendu de réunion en 5 points avec les actions à suivre.",
      title: "Synthèse de réunion — 5 points clés",
      body: "1. Budget T2 validé. 2. Lancement décalé au 15. 3. Marie pilote la communication. 4. Relancer le devis fournisseur. 5. Prochain point vendredi 10 h.",
      tags: ["Synthétique", "Actions claires", "Gain de temps"],
    },
  ],
  particuliers: [
    {
      icon: PenLine,
      chip: "Lettre de motivation",
      useCase: "Décrocher un entretien d'embauche",
      result: "Lettre prête en 30 s",
      prompt: "Écris une lettre de motivation pour un poste d'assistant commercial.",
      title: "Lettre de motivation — Assistant commercial",
      body: "Madame, Monsieur, doté d'un excellent relationnel et d'un vrai sens du service, je souhaite mettre mon dynamisme au service de votre équipe commerciale. Mon expérience…",
      tags: ["Personnalisée", "Convaincante", "Prête à envoyer"],
    },
    {
      icon: Plane,
      chip: "Week-end voyage",
      useCase: "Organiser un week-end sans stress",
      result: "Itinéraire complet en 20 s",
      prompt: "Organise-moi un week-end à Lisbonne avec un budget de 400 €.",
      title: "Week-end à Lisbonne — 3 jours, 400 €",
      body: "Jour 1 : Alfama et coucher de soleil au Miradouro. Jour 2 : Belém, pastéis de nata et tram 28. Jour 3 : marché de la Ribeira. Vols + logement tiennent dans le budget.",
      tags: ["Jour par jour", "Dans le budget", "Bons plans"],
    },
    {
      icon: GraduationCap,
      chip: "Comprendre un document",
      useCase: "Déchiffrer un document compliqué",
      result: "Expliqué simplement",
      prompt: "Explique-moi simplement comment fonctionne un crédit immobilier.",
      title: "Le crédit immobilier, en clair",
      body: "Une banque vous prête une somme que vous remboursez chaque mois sur 15 à 25 ans. Chaque mensualité paie une part du capital et des intérêts. Concrètement…",
      tags: ["Sans jargon", "Clair", "Avec un exemple"],
    },
  ],
};

type Phase = "typing" | "thinking" | "answer";

export function HeroShowcase() {
  const { audience } = useAudience();
  const list = examples[audience];

  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [typed, setTyped] = useState("");
  const [paused, setPaused] = useState(false);

  const current = list[active];
  const promptRef = useRef(current.prompt);
  promptRef.current = current.prompt;

  // Reviens au premier exemple quand on change de public.
  useEffect(() => {
    setActive(0);
  }, [audience]);

  // Relance la séquence à chaque nouvel exemple.
  useEffect(() => {
    setPhase("typing");
    setTyped("");
  }, [active, audience]);

  // Phase 1 : effet de frappe du message utilisateur.
  useEffect(() => {
    if (phase !== "typing") return;
    const prompt = promptRef.current;
    if (typed.length < prompt.length) {
      const t = setTimeout(() => setTyped(prompt.slice(0, typed.length + 1)), 26);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase("thinking"), 420);
    return () => clearTimeout(t);
  }, [phase, typed]);

  // Phase 2 : l'IA « réfléchit ».
  useEffect(() => {
    if (phase !== "thinking") return;
    const t = setTimeout(() => setPhase("answer"), 750);
    return () => clearTimeout(t);
  }, [phase]);

  // Phase 3 : réponse affichée, puis on enchaîne (sauf si en pause).
  useEffect(() => {
    if (phase !== "answer" || paused) return;
    const t = setTimeout(
      () => setActive((i) => (i + 1) % list.length),
      4200
    );
    return () => clearTimeout(t);
  }, [phase, paused, list.length]);

  const UseCaseIcon = current.icon;
  const showPromptBubble = phase !== "typing";

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
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
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

            {/* Bandeau cas d'usage + bénéfice : donne le sens */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.02] px-4 py-2.5 sm:px-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${audience}-${active}-uc`}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="flex min-w-0 items-center gap-2 text-sm"
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
                    <UseCaseIcon size={15} />
                  </span>
                  <span className="truncate font-medium text-white/80">
                    {current.useCase}
                  </span>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${audience}-${active}-res`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300"
                >
                  <Clock size={11} />
                  {current.result}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Conversation */}
            <div className="min-h-[268px] space-y-4 p-5 sm:p-6">
              {/* Message utilisateur (avec effet de frappe) */}
              <div className="flex justify-end">
                <div className="max-w-[82%] rounded-2xl rounded-br-md bg-brand-600/90 px-4 py-2.5 text-sm text-white shadow-lg shadow-brand-600/20">
                  {showPromptBubble ? (
                    current.prompt
                  ) : (
                    <>
                      {typed}
                      <span className="ml-0.5 inline-block w-1.5 animate-pulse text-white/80">
                        ▍
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Réponse IA */}
              <AnimatePresence mode="wait">
                {phase === "thinking" && (
                  <motion.div
                    key="thinking"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.04] px-4 py-3">
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
                    </div>
                  </motion.div>
                )}

                {phase === "answer" && (
                  <motion.div
                    key={`${audience}-${active}-answer`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-start"
                  >
                    <div className="max-w-[88%] space-y-2 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/85">
                      <p className="font-semibold text-white">
                        ✨ {current.title}
                      </p>
                      <p className="text-white/70">{current.body}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {current.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="inline-flex items-center gap-1 rounded-full bg-brand-500/15 px-2 py-0.5 text-[11px] font-medium text-brand-200"
                          >
                            <Check size={10} />
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Suggestions cliquables */}
            <div className="border-t border-white/10 px-3 pt-3">
              <p className="px-1 pb-2 text-[11px] uppercase tracking-wider text-white/30">
                Choisissez un exemple
              </p>
              <div className="flex flex-wrap gap-2">
                {list.map((ex, i) => {
                  const ChipIcon = ex.icon;
                  return (
                    <button
                      key={ex.chip}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={i === active}
                      className={
                        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors " +
                        (i === active
                          ? "border-brand-500/50 bg-brand-500/15 text-brand-100"
                          : "border-white/10 bg-white/[0.03] text-white/55 hover:border-white/25 hover:text-white")
                      }
                    >
                      <ChipIcon size={13} />
                      {ex.chip}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Champ de saisie (reflète la frappe) */}
            <div className="p-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5">
                <span className="flex-1 truncate text-sm text-white/40">
                  {phase === "typing" && typed.length > 0
                    ? typed
                    : "Demandez n'importe quoi à votre IA…"}
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
                Ce que vos équipes sauront faire seules après une formation :
                des <span className="text-white/70">heures gagnées</span> chaque
                semaine sur vos vraies tâches.
              </>
            ) : (
              <>
                Emploi, voyages, démarches du quotidien : on vous apprend à{" "}
                <span className="text-white/70">tout faire vous-même</span>, en
                quelques minutes.
              </>
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
