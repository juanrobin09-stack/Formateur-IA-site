import {
  UserCheck,
  Rocket,
  Boxes,
  MessageSquare,
  Wallet,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { reasons } from "@/lib/content";

const icons = [UserCheck, Rocket, Boxes, MessageSquare, Wallet];

/** Section « Pourquoi Formator AI ». */
export function ReasonsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Pourquoi nous"
        title="Une formation qui change vraiment votre quotidien"
        subtitle="Pas de blabla théorique : on vous rend autonome avec des résultats mesurables, dès le lendemain."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={reason.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl glass p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400 transition-colors group-hover:bg-brand-600/25">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
