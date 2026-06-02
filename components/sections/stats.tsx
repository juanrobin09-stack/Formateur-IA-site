import { Reveal } from "@/components/reveal";
import { keyStats } from "@/lib/content";

/** Barre de réassurance : 4 chiffres clés. */
export function StatsBar() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
        {keyStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center">
            <p className="font-display text-3xl font-bold text-white sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-white/55">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
