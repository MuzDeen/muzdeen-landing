import fs from "node:fs";
import path from "node:path";
import { Marked } from "marked";

/**
 * Couche d'accès aux documents légaux.
 *
 * La source de vérité est le dossier `content/legal/`, recopié depuis
 * `backend/legal/` du dépôt applicatif (voir `scripts/sync-legal.mjs`).
 * Tout est lu et rendu au build : aucune dépendance runtime, aucun backend.
 */

const LEGAL_DIR = path.join(process.cwd(), "content", "legal");

/** URL stable et lisible par type de document. */
const SLUG_BY_TYPE: Record<string, string> = {
  cgu: "cgu",
  privacy: "confidentialite",
  cookies: "cookies",
  legal_notice: "mentions-legales",
};

type ManifestEntry = {
  type: string;
  title: string;
  version: string;
  file: string;
  required: boolean;
};

export type LegalDoc = {
  slug: string;
  type: string;
  title: string;
  version: string;
  /** Date « Dernière mise à jour » extraite du Markdown (ex. « 20 juin 2026 »). */
  updated: string | null;
  /** Corps du document rendu en HTML (titre H1 et ligne de date retirés). */
  html: string;
};

const marked = new Marked({ gfm: true, breaks: false });

function readManifest(): ManifestEntry[] {
  const raw = fs.readFileSync(path.join(LEGAL_DIR, "manifest.json"), "utf8");
  return (JSON.parse(raw).documents ?? []) as ManifestEntry[];
}

/** Extrait « Dernière mise à jour : <date> » puis renvoie le corps sans le H1 ni cette ligne. */
function splitMarkdown(md: string): { updated: string | null; body: string } {
  const updatedMatch = md.match(/Derni[èe]re mise à jour\s*:\s*([^*\n]+)/i);
  const updated = updatedMatch ? updatedMatch[1].trim() : null;

  const body = md
    // Retire le titre H1 (affiché dans l'en-tête de la page).
    .replace(/^#\s+.*$/m, "")
    // Retire la ligne « **Dernière mise à jour : ...** ».
    .replace(/^\s*\*\*\s*Derni[èe]re mise à jour\s*:.*\*\*\s*$/im, "")
    .trim();

  return { updated, body };
}

let cache: LegalDoc[] | null = null;

/** Liste les documents légaux dans l'ordre du manifeste. */
export function getLegalDocs(): LegalDoc[] {
  if (cache) return cache;

  cache = readManifest().map((entry) => {
    const slug = SLUG_BY_TYPE[entry.type] ?? entry.type;
    const md = fs.readFileSync(path.join(LEGAL_DIR, entry.file), "utf8");
    const { updated, body } = splitMarkdown(md);

    return {
      slug,
      type: entry.type,
      title: entry.title,
      version: entry.version,
      updated,
      html: marked.parse(body) as string,
    };
  });

  return cache;
}

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return getLegalDocs().find((doc) => doc.slug === slug);
}
