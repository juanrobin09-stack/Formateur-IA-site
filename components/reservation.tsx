"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  CalendarCheck,
  CreditCard,
  Loader2,
  CheckCircle2,
  XCircle,
  Lock,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { offers, getOffer, type Offer } from "@/lib/offers";
import { clsx } from "@/lib/clsx";

// Offres payables en ligne (avec acompte).
const payableOffers: Offer[] = offers.filter((o) => o.depositEUR > 0);

// La clé publique Stripe détermine si le paiement est activé côté client.
const stripeEnabled = Boolean(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

// URL Calendly (placeholder via variable d'environnement).
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

/** Encart Calendly (ou état désactivé si l'URL n'est pas configurée). */
function CalendlyEmbed() {
  if (!calendlyUrl) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center">
        <CalendarCheck size={36} className="text-white/30" />
        <p className="mt-4 text-sm font-medium text-white/70">
          Prise de rendez-vous en ligne bientôt disponible
        </p>
        <p className="mt-1 max-w-sm text-xs text-white/40">
          [À REMPLACER] Configurez la variable{" "}
          <code className="rounded bg-white/10 px-1">
            NEXT_PUBLIC_CALENDLY_URL
          </code>{" "}
          pour afficher votre calendrier ici.
        </p>
      </div>
    );
  }

  return (
    <iframe
      src={calendlyUrl}
      title="Prendre rendez-vous"
      className="h-[680px] w-full rounded-2xl border border-white/10 bg-white"
      loading="lazy"
    />
  );
}

/** Bannière de retour de paiement (success / cancel). */
function PaymentBanner({ status }: { status: string | null }) {
  if (status === "success") {
    return (
      <div className="mb-8 flex items-center gap-3 rounded-2xl border border-brand-500/40 bg-brand-600/15 p-4 text-sm">
        <CheckCircle2 size={20} className="shrink-0 text-brand-400" />
        <p className="text-white/85">
          Merci ! Votre acompte a bien été reçu. Nous vous recontactons pour
          finaliser la date de votre formation.
        </p>
      </div>
    );
  }
  if (status === "cancel") {
    return (
      <div className="mb-8 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm">
        <XCircle size={20} className="shrink-0 text-white/50" />
        <p className="text-white/70">
          Paiement annulé. Vous pouvez réessayer quand vous le souhaitez.
        </p>
      </div>
    );
  }
  return null;
}

/** Bloc principal de réservation : choix de l'offre + paiement de l'acompte. */
export function Reservation() {
  const params = useSearchParams();
  const status = params.get("status");
  const initialOfferId = params.get("offer");

  const [selectedId, setSelectedId] = useState<string>(
    initialOfferId && getOffer(initialOfferId)?.depositEUR
      ? initialOfferId
      : payableOffers[0].id
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const selected = getOffer(selectedId)!;

  // Si l'URL pointe vers une offre payable, on la pré-sélectionne.
  useEffect(() => {
    if (initialOfferId) {
      const o = getOffer(initialOfferId);
      if (o && o.depositEUR > 0) setSelectedId(initialOfferId);
    }
  }, [initialOfferId]);

  async function handleCheckout() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ offerId: selectedId }),
      });
      const json = await res.json();
      if (!res.ok || !json.url) {
        throw new Error(json.error || "Le paiement est indisponible.");
      }
      window.location.href = json.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inattendue.");
      setLoading(false);
    }
  }

  return (
    <div>
      <PaymentBanner status={status} />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Colonne 1 : prise de rendez-vous */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold">
              1
            </span>
            <h2 className="font-display text-xl font-semibold">
              Choisissez un créneau
            </h2>
          </div>
          <p className="mb-5 text-sm text-white/60">
            Réservez votre rendez-vous (audit, atelier ou formation) directement
            dans le calendrier.
          </p>
          <CalendlyEmbed />
        </div>

        {/* Colonne 2 : acompte */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold">
              2
            </span>
            <h2 className="font-display text-xl font-semibold">
              Réglez votre acompte
            </h2>
          </div>
          <p className="mb-5 text-sm text-white/60">
            Confirmez votre réservation en réglant un acompte sécurisé. Le solde
            est réglé selon les modalités convenues.
          </p>

          <div className="rounded-2xl glass p-6">
            <label
              htmlFor="offer-select"
              className="mb-2 block text-sm font-medium text-white/80"
            >
              Formation choisie
            </label>
            <select
              id="offer-select"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white focus:border-brand-500"
            >
              {payableOffers.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.name} — {o.price}
                </option>
              ))}
            </select>

            <div className="mt-6 flex items-baseline justify-between border-t border-white/10 pt-6">
              <div>
                <p className="text-sm text-white/55">Acompte à régler</p>
                <p className="text-xs text-white/40">{selected.duration}</p>
              </div>
              <p className="font-display text-3xl font-bold">
                {selected.depositEUR} €
              </p>
            </div>

            {error && (
              <p className="mt-4 text-sm text-red-300">{error}</p>
            )}

            <div className="mt-6">
              {stripeEnabled ? (
                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Redirection…
                    </>
                  ) : (
                    <>
                      <CreditCard size={18} />
                      Payer l&apos;acompte
                    </>
                  )}
                </Button>
              ) : (
                <Button size="lg" className="w-full" disabled>
                  <Lock size={18} />
                  Paiement bientôt disponible
                </Button>
              )}
            </div>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-white/40">
              <Lock size={12} />
              Paiement sécurisé via Stripe
            </p>
          </div>

          <div
            className={clsx(
              "mt-4 flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs text-white/50",
              stripeEnabled && "hidden"
            )}
          >
            <Info size={16} className="mt-0.5 shrink-0 text-brand-400" />
            <span>
              [À REMPLACER] Le paiement en ligne s&apos;activera dès que les clés
              Stripe (<code>STRIPE_SECRET_KEY</code> et{" "}
              <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code>) seront
              configurées. En attendant, contactez-nous pour réserver.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
