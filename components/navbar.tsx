"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { navLinks } from "@/lib/site";
import { clsx } from "@/lib/clsx";

/** Barre de navigation principale, sticky, avec menu mobile plein écran. */
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

  // Bloque le défilement de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
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

        {/* Bouton menu — mobile */}
        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/5 md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-ink/98 backdrop-blur-xl md:hidden"
          >
            <div className="container-page flex min-h-full flex-col py-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        className={clsx(
                          "flex items-center justify-between rounded-2xl border px-4 py-4 text-lg font-medium transition-colors",
                          active
                            ? "border-brand-500/30 bg-brand-500/10 text-white"
                            : "border-transparent text-white/75 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {link.label}
                        <ArrowRight
                          size={18}
                          className={clsx(active ? "text-brand-300" : "text-white/30")}
                        />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + navLinks.length * 0.04 }}
                className="mt-auto flex flex-col gap-3 pt-8"
              >
                <ButtonLink href="/contact" size="lg" className="w-full">
                  Réserver un audit gratuit
                  <ArrowRight size={18} />
                </ButtonLink>
                <ButtonLink href="/reservation" variant="secondary" size="lg" className="w-full">
                  Réserver un créneau
                </ButtonLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
