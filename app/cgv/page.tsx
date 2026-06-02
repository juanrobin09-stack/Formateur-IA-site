import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Conditions générales de vente des formations Académie IA.",
  robots: { index: false, follow: true },
};

const articles = [
  {
    title: "Article 1 — Objet",
    body: `Les présentes conditions générales de vente (CGV) régissent les prestations de formation proposées par ${site.legal.company} (ci-après « ${site.name} ») à destination des entreprises et des particuliers. Toute commande implique l'acceptation sans réserve des présentes CGV.`,
  },
  {
    title: "Article 2 — Prestations",
    body: "Les prestations comprennent des audits, ateliers, formations et programmes d'accompagnement à l'usage de l'intelligence artificielle, en présentiel ou à distance, selon les modalités décrites sur le site et précisées dans le devis ou la convention de formation.",
  },
  {
    title: "Article 3 — Tarifs",
    body: "Les tarifs sont indiqués sur le site. Les prix destinés aux entreprises sont exprimés hors taxes (HT) ; les prix destinés aux particuliers sont exprimés toutes taxes comprises (TTC). Les tarifs applicables sont ceux en vigueur au jour de la commande.",
  },
  {
    title: "Article 4 — Réservation et règlement",
    body: "La réservation se fait par prise de rendez-vous puis acceptation du devis. Le règlement s'effectue selon les modalités convenues (virement bancaire, etc.), au plus tard à la date de la formation, sauf prise en charge par un organisme financeur.",
  },
  {
    title: "Article 5 — Financement OPCO",
    body: "Les formations destinées aux entreprises peuvent faire l'objet d'une prise en charge par un OPCO, sous réserve d'éligibilité. Le client fait son affaire des démarches de financement ; les documents nécessaires sont fournis sur demande.",
  },
  {
    title: "Article 6 — Annulation et report",
    body: "Toute demande d'annulation ou de report doit être notifiée par écrit. Les conditions et éventuelles indemnités sont précisées dans la convention de formation ou le devis. [À REMPLACER : préciser vos délais et conditions, ex. délai de 7 jours, remboursement de l'acompte, etc.]",
  },
  {
    title: "Article 7 — Obligations et responsabilité",
    body: `${site.name} s'engage à dispenser ses formations avec professionnalisme et conformément aux objectifs annoncés. ${site.name} est tenu à une obligation de moyens. Sa responsabilité ne saurait être engagée pour l'usage fait par le client des outils et méthodes enseignés.`,
  },
  {
    title: "Article 8 — Propriété intellectuelle",
    body: "Les supports de formation restent la propriété d'Académie IA. Ils sont fournis pour un usage strictement personnel ou interne et ne peuvent être reproduits ou diffusés sans autorisation.",
  },
  {
    title: "Article 9 — Données personnelles",
    body: `Les données collectées sont traitées conformément au RGPD. Le client dispose d'un droit d'accès, de rectification et de suppression à l'adresse ${site.contact.email}.`,
  },
  {
    title: "Article 10 — Droit applicable et litiges",
    body: "Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les tribunaux compétents seront ceux du ressort du siège de l'éditeur. [À REMPLACER : préciser la juridiction.]",
  },
];

export default function CgvPage() {
  return (
    <>
      <PageHeader title="Conditions générales de vente" />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8 text-white/70">
          <p className="text-sm text-white/40">
            Gabarit fourni à titre indicatif. À faire valider par un
            professionnel du droit et à compléter avant la mise en ligne.
          </p>

          {articles.map((a) => (
            <div key={a.title}>
              <h2 className="font-display text-xl font-semibold text-white">
                {a.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
