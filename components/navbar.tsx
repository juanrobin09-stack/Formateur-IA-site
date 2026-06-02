"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { navLinks } from "@/lib/site";
import { clsx } from "@/lib/clsx";

/** Barre de navigation principale, sticky, avec menu mobile. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <Logo />

        {/* Liens — desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  "link-underline text-sm transition-colors",
                  pathname === link.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href="/reservation" variant="ghost" size="md">
            Réserver
          </ButtonLink>
          <ButtonLink href="/contact" size="md">
            Audit gratuit
          </ButtonLink>
        </div>

        {/* Burger — mobile */}
        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur-xl md:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-base text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex flex-col gap-2 px-1">
              <ButtonLink href="/reservation" variant="secondary" size="lg">
                Réserver
              </ButtonLink>
              <ButtonLink href="/contact" size="lg">
                Audit gratuit
              </ButtonLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
