import { ButtonLink } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-display text-7xl font-bold text-brand-500/40">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold">
        Page introuvable
      </h1>
      <p className="mt-3 max-w-md text-white/60">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
        Retournons à l&apos;essentiel.
      </p>
      <ButtonLink href="/" size="lg" className="mt-8">
        <Home size={18} />
        Retour à l&apos;accueil
      </ButtonLink>
    </section>
  );
}
