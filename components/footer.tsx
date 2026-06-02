import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Logo } from "@/components/logo";
import { site, navLinks } from "@/lib/site";

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/cgv", label: "CGV" },
];

/** Pied de page : marque, navigation, coordonnées, mentions. */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Marque */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {site.slogan} Des formations IA concrètes et personnalisées pour
              les entreprises et les particuliers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/reservation"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Réservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail size={16} className="text-brand-400" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone size={16} className="text-brand-400" />
                  {site.contact.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-brand-400" />
                {site.contact.city}
              </li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <Linkedin size={16} className="text-brand-400" />
                  {site.contact.linkedin}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </p>
          <ul className="flex gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
