"use client";

import { useSearchParams } from "next/navigation";
import {
  CalendarCheck,
  Mail,
  Phone,
  Check,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { getOffer } from "@/lib/offers";
import { site } from "@/lib/site";

// URL Calendly (configurable via variable d'environnement).
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

/** Encart Calendly (ou état neutre si l'URL n'est pas encore configurée). */
function CalendlyEmbed() {
  if (!calendlyUrl) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center sm:p-10">
        <CalendarCheck size={36} className="text-white/30" />
        <p className="mt-4 text-sm font-medium text-white/70">
          Calendrier de réservation bientôt disponible
        </p>
        <p className="mt-1 max-w-sm text-xs text-white/40">
          En attendant, écrivez-nous ou appelez-nous : on trouve un créneau
          ensemble en quelques minutes.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <ButtonLink href="/contact" size="md">
            Nous écrire
          </ButtonLink>
          <ButtonLink
            href={`tel:${site.contact.phoneHref}`}
            variant="secondary"
            size="md"
          >
            <Phone size={16} />
            {site.contact.phone}
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={calendlyUrl}
      title="Prendre rendez-vous"
      className="h-[640px] w-full rounded-2xl border border-white/10 bg-white sm:h-[720px]"
      loading="lazy"
    />
  );
}

/** Bloc principal de réservation : prise de rendez-vous (sans paiement). */
export function Reservation() {
  const params = useSearchParams();
  const offerId = params.get("offer");
  const offer = offerId ? getOffer(offerId) : undefined;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      {/* Colonne 1 : calendrier */}
      <div>
        {offer && (
          <div className="mb-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-brand-500/30 bg-brand-600/10 px-4 py-2 text-sm text-brand-200">
            <Check size={15} className="shrink-0" />
            <span>Formation choisie :</span>
            <strong>{offer.name}</strong>
          </div>
        )}
        <h2 className="font-display text-xl font-semibold sm:text-2xl">
          Choisissez votre créneau
        </h2>
        <p className="mb-5 mt-2 text-sm text-white/60">
          Réservez votre rendez-vous (atelier, cours ou formation) directement
          dans le calendrier ci-dessous.
        </p>
        <CalendlyEmbed />
      </div>

      {/* Colonne 2 : repères + contact */}
      <aside className="space-y-6">
        <div className="rounded-2xl glass p-6">
          <h3 className="font-display text-lg font-semibold">
            Comment ça se passe
          </h3>
          <ol className="mt-4 space-y-3 text-sm text-white/70">
            {[
              "Vous choisissez un créneau qui vous arrange.",
              "On échange sur votre besoin.",
              "Vous recevez une proposition claire, sans surprise.",
              "On planifie la formation, en présentiel ou en visio.",
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[11px] font-bold">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl glass p-6">
          <h3 className="font-display text-lg font-semibold">
            Vous préférez nous joindre ?
          </h3>
          <p className="mt-2 text-sm text-white/60">
            Aucun paiement en ligne : on cale tout ensemble, simplement.
          </p>
          <div className="mt-4 space-y-3">
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-sm transition-colors hover:border-white/20"
            >
              <Mail size={18} className="text-brand-400" />
              {site.contact.email}
            </a>
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-sm transition-colors hover:border-white/20"
            >
              <Phone size={18} className="text-brand-400" />
              {site.contact.phone}
            </a>
          </div>
          <ButtonLink href="/contact" size="md" className="mt-4 w-full">
            Ouvrir le formulaire de contact
          </ButtonLink>
        </div>
      </aside>
    </div>
  );
}
