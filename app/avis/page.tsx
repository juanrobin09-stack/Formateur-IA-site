import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { ReviewsBoard } from "@/components/reviews-board";
import { getReviews } from "@/lib/reviews";

// Toujours lire les avis les plus récents, sans mise en cache statique.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Avis clients",
  description:
    "Découvrez les avis de nos clients particuliers et entreprises, et laissez le vôtre en quelques secondes.",
};

export default async function AvisPage() {
  const reviews = await getReviews();

  return (
    <>
      <PageHeader
        eyebrow="Avis"
        title="Ce qu'en pensent nos clients"
        subtitle="Des retours authentiques, publiés directement par les personnes accompagnées. Vous aussi, partagez votre expérience."
      />

      <Section>
        <ReviewsBoard initialReviews={reviews} />
      </Section>
    </>
  );
}
