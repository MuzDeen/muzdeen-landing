import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Logo } from "@/components/ui/logo";
import { getLegalDocs } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Documents légaux",
  description:
    "Conditions Générales d'Utilisation, Politique de confidentialité, Politique de cookies et Mentions légales de Muz'Deen.",
  alternates: { canonical: "/legal" },
  robots: { index: true, follow: true },
};

export default function LegalIndexPage() {
  const docs = getLegalDocs();

  return (
    <main>
      <header className="section-shell pt-6">
        <div className="flex items-center justify-between rounded-full border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] px-3 py-3 shadow-sm backdrop-blur md:px-4">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--ui-line)] px-4 py-2 text-sm font-semibold text-[color:var(--ui-accent)] transition hover:bg-[color:var(--ui-surface-soft)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      <section className="section-shell py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--ui-accent)]">
            Informations légales
          </p>
          <h1 className="mt-3 text-balance text-4xl font-black leading-tight text-[color:var(--ui-text)] md:text-5xl">
            Documents légaux
          </h1>
          <p className="mt-6 max-w-2xl leading-7 text-[color:var(--ui-muted)]">
            Retrouvez l&apos;ensemble des documents qui encadrent l&apos;utilisation de
            Muz&apos;Deen. Chaque document dispose d&apos;une adresse stable, librement
            consultable et partageable.
          </p>

          <ul className="mt-10 grid gap-4">
            {docs.map((doc) => (
              <li key={doc.slug}>
                <Link
                  href={`/legal/${doc.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-soft)] p-5 transition hover:border-[color:var(--ui-accent)] hover:bg-[color:var(--ui-surface)]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[color:var(--ui-line)] bg-[color:var(--ui-surface)] text-[color:var(--ui-accent)]">
                    <FileText className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2 text-lg font-black text-[color:var(--ui-text)]">
                      {doc.title}
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[color:var(--ui-muted)] transition group-hover:text-[color:var(--ui-accent)]" />
                    </span>
                    <span className="mt-1 block text-sm text-[color:var(--ui-muted)]">
                      Version {doc.version}
                      {doc.updated ? ` · Mis à jour le ${doc.updated}` : ""}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
