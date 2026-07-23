import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reservation } from "@/components/reservation";

export const metadata: Metadata = {
  title: "Réservation",
  description:
    "Réservez votre formation IA : choisissez un créneau, sans paiement en ligne et sans engagement.",
};

export default function ReservationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Réservation"
        title="Réservez votre créneau"
        subtitle="Choisissez un horaire qui vous arrange. C'est gratuit, sans engagement et sans paiement en ligne."
      />

      <Section>
        <Suspense
          fallback={
            <div className="py-20 text-center text-white/50">Chargement…</div>
          }
        >
          <Reservation />
        </Suspense>
      </Section>
    </>
  );
}
