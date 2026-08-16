import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { ReviewsBoard } from "@/components/reviews-board";
import { getReviews } from "@/lib/reviews";
import { pageMetadata } from "@/lib/seo";

// Toujours lire les avis les plus récents, sans mise en cache statique.
export const dynamic = "force-dynamic";

export const metadata = pageMetadata({
  title: "Avis clients sur nos formations IA",
  description:
    "Découvrez les avis de nos clients particuliers et entreprises sur les formations Académie IA, et laissez le vôtre en quelques secondes.",
  path: "/avis",
});

// Note SEO : pas de données structurées Review/AggregateRating ici.
// Google restreint fortement les extraits d'avis auto-publiés par
// l'organisation elle-même sur son propre site (risque de sanction pour
// avis "self-serving"). Voir SEO-AUDIT-FINAL.md.

export default async function AvisPage() {
  const reviews = await getReviews();

  return (
    <>
      <PageHeader
        eyebrow="Avis"
        title="Ce qu'en pensent nos clients"
        subtitle="Des retours authentiques, publiés directement par les personnes accompagnées. Vous aussi, partagez votre expérience."
        breadcrumb={[{ name: "Avis", path: "/avis" }]}
      />

      <Section>
        <ReviewsBoard initialReviews={reviews} />
      </Section>
    </>
  );
}
