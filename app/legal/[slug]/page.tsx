import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { Logo } from "@/components/ui/logo";
import { getLegalDoc, getLegalDocs } from "@/lib/legal";

type Params = { slug: string };

/** Pré-génère une page statique par document (hébergement statique compatible). */
export function generateStaticParams(): Params[] {
  return getLegalDocs().map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) return {};

  return {
    title: doc.title,
    description: `${doc.title} de Muz'Deen — version ${doc.version}${
      doc.updated ? `, mise à jour le ${doc.updated}` : ""
    }.`,
    alternates: { canonical: `/legal/${doc.slug}` },
    robots: { index: true, follow: true },
  };
}

export default async function LegalDocPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  return (
    <main>
      <header className="section-shell pt-6">
        <div className="flex items-center justify-between rounded-full border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-raised)] px-3 py-3 shadow-sm backdrop-blur md:px-4">
          <Logo />
          <Link
            href="/legal"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--ui-line)] px-4 py-2 text-sm font-semibold text-[color:var(--ui-accent)] transition hover:bg-[color:var(--ui-surface-soft)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Tous les documents
          </Link>
        </div>
      </header>

      <section className="section-shell py-16 md:py-20">
        <article className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[color:var(--ui-accent)]">
            Informations légales
          </p>
          <h1 className="mt-3 text-balance text-4xl font-black leading-tight text-[color:var(--ui-text)] md:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[color:var(--ui-muted)]">
            <span className="inline-flex items-center rounded-full border border-[color:var(--ui-line)] bg-[color:var(--ui-surface-soft)] px-3 py-1 font-semibold text-[color:var(--ui-muted-strong)]">
              Version {doc.version}
            </span>
            {doc.updated ? <span>Dernière mise à jour : {doc.updated}</span> : null}
          </p>

          <div
            className="legal-prose mt-10"
            dangerouslySetInnerHTML={{ __html: doc.html }}
          />
        </article>
      </section>
      <Footer />
    </main>
  );
}
