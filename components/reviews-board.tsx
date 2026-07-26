"use client";

import { useState, type FormEvent } from "react";
import {
  Star,
  Send,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { clsx } from "@/lib/clsx";
import type { Review } from "@/lib/reviews";

type Status = "idle" | "loading" | "success" | "pending" | "error";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors focus:border-brand-500 focus:bg-white/[0.05]";

const labelClasses = "mb-1.5 block text-sm font-medium text-white/80";

/** Sélecteur de note par étoiles cliquables. */
function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`${n} étoile${n > 1 ? "s" : ""} sur 5`}
          aria-pressed={value === n}
          className="p-0.5 transition-transform hover:scale-110"
        >
          <Star
            size={26}
            className={value >= n ? "fill-brand-400 text-brand-400" : "text-white/20"}
          />
        </button>
      ))}
    </div>
  );
}

/** Formulaire d'avis + liste des avis, synchronisés (nouvel avis affiché instantanément). */
export function ReviewsBoard({ initialReviews }: { initialReviews: Review[] }) {
  const [reviews, setReviews] = useState(initialReviews);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [rating, setRating] = useState(5);
  const [role, setRole] = useState<"particulier" | "entreprise">("particulier");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, rating, role }),
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Une erreur est survenue.");
      }

      if (json.persisted && json.review) {
        setReviews((prev) => [json.review, ...prev]);
        setStatus("success");
      } else {
        setStatus("pending");
      }
      form.reset();
      setRating(5);
      setRole("particulier");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  const done = status === "success" || status === "pending";

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
      {/* Formulaire */}
      <div className="h-fit rounded-3xl glass p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold">Laisser un avis</h2>
        <p className="mt-2 text-sm text-white/60">
          Votre avis compte : il aide d&apos;autres personnes à savoir si
          Académie IA est fait pour elles.
        </p>

        {done ? (
          <div className="mt-8 flex flex-col items-center rounded-2xl border border-brand-500/30 bg-brand-600/10 p-8 text-center">
            <CheckCircle2 size={40} className="text-brand-400" />
            <h3 className="mt-3 font-display text-lg font-semibold">
              {status === "success" ? "Merci pour votre avis !" : "Avis bien reçu !"}
            </h3>
            <p className="mt-2 max-w-xs text-sm text-white/60">
              {status === "success"
                ? "Il vient d'être publié, juste à côté."
                : "Il sera publié après vérification. Merci de votre patience."}
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-5 text-sm text-brand-400 underline-offset-4 hover:underline"
            >
              Laisser un autre avis
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative mt-6 space-y-5">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Votre nom *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                autoComplete="name"
                placeholder="Jean Dupont"
                className={inputClasses}
              />
            </div>

            <div>
              <span className={labelClasses}>Vous êtes</span>
              <div className="flex gap-2">
                {(["particulier", "entreprise"] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    aria-pressed={role === r}
                    className={clsx(
                      "rounded-xl border px-4 py-2 text-sm font-medium transition-colors",
                      role === r
                        ? "border-brand-500/50 bg-brand-500/15 text-brand-100"
                        : "border-white/10 bg-white/[0.03] text-white/55 hover:text-white"
                    )}
                  >
                    {r === "particulier" ? "Un particulier" : "Une entreprise"}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className={labelClasses}>Votre note *</span>
              <StarPicker value={rating} onChange={setRating} />
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>
                Votre avis *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={2000}
                placeholder="Qu'avez-vous pensé de votre expérience avec Académie IA ?"
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Honeypot anti-spam : caché aux humains, rempli par les robots */}
            <div className="absolute left-[-9999px]" aria-hidden>
              <label htmlFor="website">Ne pas remplir</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                <AlertCircle size={18} className="shrink-0" />
                {error}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="w-full"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  Publier mon avis
                  <Send size={18} />
                </>
              )}
            </Button>
          </form>
        )}
      </div>

      {/* Liste des avis */}
      <div className="space-y-5">
        {reviews.length === 0 && (
          <p className="text-sm text-white/50">
            Aucun avis pour le moment. Soyez le premier à en laisser un !
          </p>
        )}
        {reviews.map((r) => (
          <figure key={r.id} className="rounded-2xl glass p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-0.5" aria-label={`${r.rating} sur 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < r.rating
                        ? "fill-brand-400 text-brand-400"
                        : "text-white/15"
                    }
                  />
                ))}
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-medium text-white/50">
                {r.role}
              </span>
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-white/75">
              « {r.message} »
            </blockquote>
            <figcaption className="mt-4 border-t border-white/10 pt-3 text-sm font-semibold text-white">
              {r.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
