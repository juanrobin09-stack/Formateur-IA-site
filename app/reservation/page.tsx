import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reservation } from "@/components/reservation";

export const metadata: Metadata = {
  title: "Réservation",
  description:
    "Réservez votre formation IA : choisissez un créneau et réglez votre acompte en ligne en toute sécurité.",
};

export default function ReservationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Réservation"
        title="Réservez votre formation"
        subtitle="Choisissez un créneau qui vous convient et confirmez avec un acompte sécurisé. Simple et rapide."
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
