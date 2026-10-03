import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { download, navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--ui-line)] bg-[color:var(--ui-bg)] py-12">
      <div className="section-shell flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 leading-7 text-[color:var(--ui-muted)]">
            Pour ici et l&apos;au-delà. La plateforme qui digitalise les dons des organisations musulmanes — simplement, et en toute confiance.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href={download.appStore.href} target="_blank" rel="noreferrer" className="transition hover:opacity-85">
              <Image src={download.appStore.src} alt={download.appStore.alt} width={150} height={44} className="h-11 w-auto" />
            </a>
            <a href={download.googlePlay.href} target="_blank" rel="noreferrer" className="transition hover:opacity-85">
              <Image src={download.googlePlay.src} alt={download.googlePlay.alt} width={150} height={44} className="h-11 w-auto" />
            </a>
          </div>
          <div className="mt-5 flex gap-3">
            <a
              aria-label="Instagram"
              href="https://instagram.com"
              rel="noreferrer"
              target="_blank"
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--ui-line)] text-[color:var(--ui-accent)] transition hover:bg-[color:var(--ui-surface-soft)]"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com"
              rel="noreferrer"
              target="_blank"
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--ui-line)] text-[color:var(--ui-accent)] transition hover:bg-[color:var(--ui-surface-soft)]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-black text-[color:var(--ui-text)]">Navigation</p>
            <div className="mt-3 grid gap-2 text-sm text-[color:var(--ui-muted)]">
              {navItems.map((item) => (
                <Link className="hover:text-[color:var(--ui-accent)]" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-black text-[color:var(--ui-text)]">Contact</p>
            <div className="mt-3 grid gap-2 text-sm text-[color:var(--ui-muted)]">
              <a className="hover:text-[color:var(--ui-accent)]" href="mailto:contact@muzdeen.com">contact@muzdeen.com</a>
              <Link className="hover:text-[color:var(--ui-accent)]" href="/#demo">Inscrire mon organisation</Link>
            </div>
          </div>
          <div>
            <p className="font-black text-[color:var(--ui-text)]">Légal</p>
            <div className="mt-3 grid gap-2 text-sm text-[color:var(--ui-muted)]">
              <Link className="hover:text-[color:var(--ui-accent)]" href="/legal">Documents légaux</Link>
              <Link className="hover:text-[color:var(--ui-accent)]" href="/legal/confidentialite">Confidentialité</Link>
              <Link className="hover:text-[color:var(--ui-accent)]" href="/legal/mentions-legales">Mentions légales</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-[color:var(--ui-line)] pt-6 text-sm text-[color:var(--ui-muted)]">
        © 2026 Muz&apos;Deen. Tous droits réservés.
      </div>
    </footer>
  );
}
