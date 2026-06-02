import type { Metadata } from "next";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Formator AI pour réserver un audit gratuit, demander un devis ou poser vos questions sur nos formations IA.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        subtitle="Une question, un devis, un audit gratuit ? Écrivez-nous, nous répondons sous 24 h ouvrées."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Coordonnées */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold">
                  Coordonnées
                </h2>
                <p className="mt-2 text-white/60">
                  Préférez-vous le téléphone ou l&apos;email ? Choisissez ce qui
                  vous arrange.
                </p>
              </div>

              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="flex items-center gap-4 rounded-2xl glass p-4 transition-colors hover:border-white/20"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                      <Mail size={20} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-white/40">
                        Email
                      </span>
                      <span className="text-sm text-white">
                        {site.contact.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.contact.phoneHref}`}
                    className="flex items-center gap-4 rounded-2xl glass p-4 transition-colors hover:border-white/20"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                      <Phone size={20} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-white/40">
                        Téléphone
                      </span>
                      <span className="text-sm text-white">
                        {site.contact.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4 rounded-2xl glass p-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                    <MapPin size={20} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-white/40">
                      Zone
                    </span>
                    <span className="text-sm text-white">
                      {site.contact.city} · présentiel &amp; distanciel
                    </span>
                  </span>
                </li>
              </ul>

              <div className="rounded-2xl border border-brand-500/30 bg-brand-600/10 p-6">
                <div className="flex items-center gap-2 text-brand-300">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">Plus rapide</span>
                </div>
                <p className="mt-2 text-sm text-white/65">
                  Réservez directement un créneau pour votre audit gratuit ou
                  votre formation.
                </p>
                <ButtonLink href="/reservation" className="mt-4" size="md">
                  Réserver un créneau
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl glass p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
