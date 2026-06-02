import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { steps } from "@/lib/content";

/** Section « Comment ça marche » en 4 étapes. */
export function StepsSection() {
  return (
    <Section className="bg-white/[0.02]">
      <SectionHeading
        eyebrow="Comment ça marche"
        title="De l'audit à l'autonomie, en 4 étapes"
        subtitle="Un parcours simple et balisé, pensé pour des résultats rapides et durables."
      />

      <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 0.08}>
            <div className="group relative h-full rounded-2xl glass-hover p-6">
              <span className="font-display text-5xl font-bold text-brand-500/30 transition-colors group-hover:text-brand-400/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
