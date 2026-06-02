import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Formator AI.",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader title="Mentions légales" />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8 text-white/70">
          <p className="text-sm text-white/40">
            Gabarit fourni à titre indicatif. À faire valider et compléter avec
            vos informations réelles avant la mise en ligne.
          </p>

          <div>
            <h2 className="font-display text-xl font-semibold text-white">
              Éditeur du site
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Le site {site.name} est édité par {site.legal.company}.<br />
              Adresse : {site.legal.address}
              <br />
              SIRET : {site.legal.siret}
              <br />
              Email : {site.contact.email}
              <br />
              Téléphone : {site.contact.phone}
              <br />
              Responsable de la publication : {site.legal.director}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-white">
              Hébergement
            </h2>
            <p className="mt-3 text-sm leading-relaxed">{site.legal.host}</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-white">
              Propriété intellectuelle
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              L&apos;ensemble des contenus présents sur ce site (textes, visuels,
              logo, supports de formation) est protégé par le droit de la
              propriété intellectuelle et reste la propriété exclusive de{" "}
              {site.legal.company}, sauf mention contraire. Toute reproduction
              sans autorisation préalable est interdite.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-white">
              Données personnelles
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Les informations transmises via le formulaire de contact sont
              utilisées uniquement pour répondre à votre demande. Conformément au
              RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification
              et de suppression de vos données, exerçable à l&apos;adresse{" "}
              {site.contact.email}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-white">
              Cookies
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Ce site n&apos;utilise pas de cookies de suivi publicitaire. Des
              cookies techniques peuvent être déposés par les services tiers
              intégrés (paiement, prise de rendez-vous) lors de leur
              utilisation.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
