#!/usr/bin/env node
/**
 * Resynchronise les documents légaux depuis le backend de l'app vers la landing.
 *
 * Source de vérité : `<repo app>/backend/legal/` (fichiers .md + manifest.json).
 * Destination      : `content/legal/` (lue au build par lib/legal.ts).
 *
 * Usage :
 *   node scripts/sync-legal.mjs
 *   LEGAL_SRC=/chemin/vers/backend/legal node scripts/sync-legal.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const landingRoot = path.resolve(__dirname, "..");

// Par défaut : ../../app/backend/legal relatif à la landing (ajuster si besoin).
const src =
  process.env.LEGAL_SRC ||
  path.resolve(landingRoot, "..", "app", "backend", "legal");
const dest = path.join(landingRoot, "content", "legal");

const FILES = ["cgu.md", "privacy.md", "cookies.md", "legal-notice.md", "manifest.json"];

if (!fs.existsSync(src)) {
  console.error(`✗ Dossier source introuvable : ${src}`);
  console.error("  Renseignez LEGAL_SRC=/chemin/vers/backend/legal");
  process.exit(1);
}

fs.mkdirSync(dest, { recursive: true });

for (const file of FILES) {
  const from = path.join(src, file);
  if (!fs.existsSync(from)) {
    console.warn(`⚠ Ignoré (absent de la source) : ${file}`);
    continue;
  }
  fs.copyFileSync(from, path.join(dest, file));
  console.log(`✓ ${file}`);
}

console.log(`\nDocuments légaux synchronisés depuis :\n  ${src}\nvers :\n  ${dest}`);
