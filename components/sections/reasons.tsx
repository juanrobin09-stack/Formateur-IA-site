import {
  UserCheck,
  Rocket,
  Boxes,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { reasons } from "@/lib/content";
import { clsx } from "@/lib/clsx";

const icons = [UserCheck, Rocket, Boxes, MessageSquare, ShieldCheck];

// Disposition « bento » : la 1re et la 3e carte sont mises en avant (plus larges).
const spans = [
  "sm:col-span-2 lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "sm:col-span-2 lg:col-span-2",
];

/** Section « Pourquoi Académie IA » en grille bento moderne. */
export function ReasonsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Pourquoi nous"
        title="Une formation qui change vraiment votre quotidien"
        subtitle="Pas de blabla théorique : on vous rend autonome avec des résultats mesurables, dès le lendemain."
      />

      <div className="mt-16 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, i) => {
          const Icon = icons[i % icons.length];
          const featured = i === 0 || i === reasons.length - 1;
          return (
            <Reveal key={reason.title} delay={i * 0.05} className={spans[i]}>
              <div
                className={clsx(
                  "group relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8",
                  featured
                    ? "border border-brand-500/25 bg-gradient-to-br from-brand-600/15 via-white/[0.03] to-white/[0.01] hover:border-brand-500/40"
                    : "glass-hover"
                )}
              >
                {/* Lueur décorative sur les cartes mises en avant */}
                {featured && (
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl transition-opacity duration-300 group-hover:opacity-80"
                    aria-hidden
                  />
                )}
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/15 text-brand-400 ring-1 ring-inset ring-brand-500/20 transition-all group-hover:scale-110 group-hover:bg-brand-600/25">
                    <Icon size={22} />
                  </div>
                  <h3
                    className={clsx(
                      "mt-5 font-display font-semibold",
                      featured ? "text-xl sm:text-2xl" : "text-lg"
                    )}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className={clsx(
                      "mt-2 leading-relaxed text-white/60",
                      featured ? "text-base max-w-md" : "text-sm"
                    )}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
