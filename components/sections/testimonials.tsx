import { Quote, Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { testimonials } from "@/lib/content";

/** Section témoignages (preuve sociale). */
export function TestimonialsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Ils nous font confiance"
        title="Ce qu'en disent nos clients"
        subtitle="Des retours concrets de professionnels et de particuliers formés par Formator AI."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-2xl glass p-6">
              <Quote size={28} className="text-brand-500/50" aria-hidden />
              <div className="mt-3 flex gap-0.5" aria-label="5 sur 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={15}
                    className="fill-brand-400 text-brand-400"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/50">
                  {t.role} · {t.company}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
