import { Video, Car, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { particulierPricing } from "@/lib/content";

/**
 * Grille tarifaire du cours particulier : visio ou présentiel à domicile
 * (Gironde / Libournais), avec tarifs dégressifs selon la distance.
 */
export function PresentielPricingSection() {
  const { visio, presentiel } = particulierPricing;

  return (
    <Section className="bg-white/[0.02]">
      <SectionHeading
        eyebrow="Cours particulier"
        title="En visio ou à domicile"
        subtitle="Le même accompagnement individuel, selon ce qui vous arrange : depuis chez vous en visio, ou en présentiel si vous êtes en Gironde ou dans le Libournais."
      />

      <Reveal className="mx-auto mt-16 max-w-3xl">
        <div className="overflow-hidden rounded-3xl glass">
          <div className="grid sm:grid-cols-2">
            {/* Visio */}
            <div className="flex flex-col gap-3 border-b border-white/10 p-6 sm:border-b-0 sm:border-r sm:p-8">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                <Video size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold">Visio</h3>
              <p className="text-sm text-white/55">
                1 h, individuel, depuis chez vous
              </p>
              <div className="mt-auto pt-4">
                <span className="font-display text-3xl font-bold tracking-tight">
                  {visio.price}
                </span>
              </div>
            </div>

            {/* Présentiel */}
            <div className="flex flex-col gap-3 p-6 sm:p-8">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                <Car size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold">
                Présentiel
              </h3>
              <p className="text-sm text-white/55">
                À domicile, déplacement inclus
              </p>
              <ul className="mt-2 space-y-2.5">
                {presentiel.tiers.map((tier) => (
                  <li
                    key={tier.label}
                    className="flex items-center justify-between gap-3 border-t border-white/5 pt-2.5 text-sm first:border-t-0 first:pt-0"
                  >
                    <span className="text-white/70">{tier.label}</span>
                    <span className="font-semibold text-white">
                      {tier.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-2.5 border-t border-white/10 bg-white/[0.03] px-6 py-4 text-xs text-white/45 sm:px-8">
            <MapPin size={14} className="mt-0.5 shrink-0 text-brand-400" />
            {presentiel.note}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <ButtonLink href="/reservation?offer=cours-particulier" size="lg">
            Réserver mon cours
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
