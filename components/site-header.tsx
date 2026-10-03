"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="relative z-50 flex items-center justify-between rounded-full border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] px-3 py-3 shadow-sm backdrop-blur md:px-4">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[color:var(--ui-muted-strong)] lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a className="transition hover:text-[color:var(--ui-accent)]" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="#demo">Demander une demo</Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] text-[color:var(--ui-accent)] transition hover:bg-[color:var(--ui-surface-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--ui-accent)]"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-[color:var(--ui-overlay)] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            aria-label="Navigation mobile"
            className="fixed inset-x-4 top-24 z-50 rounded-[1.75rem] border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] p-4 shadow-[0_24px_80px_color-mix(in_srgb,var(--ui-shadow)_24%,transparent)] md:hidden"
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  className="rounded-2xl px-4 py-4 text-base font-black text-[color:var(--ui-text)] transition hover:bg-[color:var(--ui-surface-soft)]"
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 grid gap-3 border-t border-[color:var(--ui-line)] pt-4">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[color:var(--ui-accent)] px-5 text-sm font-black text-[color:var(--ui-on-primary)] shadow-[0_18px_40px_color-mix(in_srgb,var(--ui-shadow)_18%,transparent)] transition hover:bg-[color:var(--ui-accent-hover)]"
                href="#demo"
                onClick={() => setIsOpen(false)}
              >
                Demander une demo
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-soft)] px-5 text-sm font-black text-[color:var(--ui-accent)]"
                href="mailto:contact@mweema.com"
                onClick={() => setIsOpen(false)}
              >
                Contacter l&apos;equipe
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
