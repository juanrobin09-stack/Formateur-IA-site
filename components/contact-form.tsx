"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors focus:border-brand-500 focus:bg-white/[0.05]";

const labelClasses = "mb-1.5 block text-sm font-medium text-white/80";

/** Formulaire de contact relié à /api/contact. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Une erreur est survenue.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Une erreur est survenue."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-brand-500/30 bg-brand-600/10 p-10 text-center">
        <CheckCircle2 size={48} className="text-brand-400" />
        <h3 className="mt-4 font-display text-xl font-semibold">
          Message envoyé, merci !
        </h3>
        <p className="mt-2 max-w-sm text-sm text-white/60">
          Nous revenons vers vous très vite avec une réponse claire à votre
          demande.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-brand-400 underline-offset-4 hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Nom complet *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jean Dupont"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jean@entreprise.fr"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="audience" className={labelClasses}>
            Vous êtes *
          </label>
          <select
            id="audience"
            name="audience"
            required
            defaultValue="entreprise"
            className={inputClasses}
          >
            <option value="entreprise">Une entreprise</option>
            <option value="particulier">Un particulier</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Votre message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Parlez-nous de votre besoin, votre secteur, vos objectifs…"
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
            Envoyer le message
            <Send size={18} />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-white/40">
        En envoyant ce formulaire, vous acceptez d&apos;être recontacté au sujet
        de votre demande.
      </p>
    </form>
  );
}
