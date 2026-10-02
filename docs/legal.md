# Documents légaux — fonctionnement, déploiement & resynchronisation

Section publique exposant les 4 documents légaux de Muz'Deen, exigés par
Apple et Google avant publication sur les stores.

## URLs publiques

| Document                         | URL                          | Version |
| -------------------------------- | ---------------------------- | ------- |
| Index (liste des documents)      | `/legal`                     | —       |
| Conditions Générales d'Utilisation | `/legal/cgu`               | 1.1.0   |
| Politique de confidentialité     | `/legal/confidentialite`     | 1.1.0   |
| Politique de cookies             | `/legal/cookies`             | 1.1.0   |
| Mentions légales                 | `/legal/mentions-legales`    | 1.1.1   |

Chaque page expose `<title>` + meta description, un `canonical`, et autorise
l'indexation (`robots: index, follow`). Un lien « Documents légaux » est présent
dans le footer de tout le site.

## Architecture (tout est pré-généré au build, zéro backend)

- **Source de vérité** : `content/legal/` — copie des `.md` + `manifest.json`
  du dépôt app (`backend/legal/`). On ne réécrit jamais le contenu juridique ici.
- `lib/legal.ts` lit le manifeste et les `.md` **au build**, en extrait la date
  « Dernière mise à jour », et convertit le Markdown en HTML propre via `marked`
  (titres, listes, liens, tableaux, citations). `marked` n'est utilisé qu'au
  build : aucun JS de rendu n'est envoyé au navigateur.
- `app/legal/page.tsx` : page index.
- `app/legal/[slug]/page.tsx` : une page par document, pré-générée via
  `generateStaticParams()` → 4 fichiers HTML statiques.
- Styles du rendu Markdown : classe `.legal-prose` dans `app/globals.css`
  (charte verte `#2f7d5b`, fond clair, responsive mobile, tableaux scrollables).

## Resynchroniser le contenu quand les `.md` du backend changent

Les documents légaux vivent dans le backend (`backend/legal/`). Après toute
modification là-bas (texte **ou** version dans `manifest.json`) :

```bash
# Depuis le dossier landing/
npm run sync:legal      # copie backend/legal/*.md + manifest.json → content/legal/
npm run build           # régénère les pages statiques
```

Le script suppose l'arborescence `…/MuzDeen/app/backend/legal` à côté de
`…/MuzDeen/landing`. Si le backend est ailleurs, précisez le chemin :

```bash
LEGAL_SRC=/chemin/vers/backend/legal npm run sync:legal
```

> Les versions affichées proviennent de `manifest.json` ; la date « Dernière
> mise à jour » provient de la ligne `**Dernière mise à jour : …**` de chaque
> `.md`. Pensez à incrémenter les deux dans le backend lors d'une révision.

## Déploiement

### Netlify (recommandé — supporte Next.js nativement)

1. Connecter le dépôt, **Base directory** = `landing`.
2. Build command : `npm run build` · Publish : laissé géré par le plugin Next.
   Netlify détecte Next.js et installe automatiquement
   `@netlify/plugin-nextjs`. Les pages légales étant 100 % statiques (SSG),
   elles sont servies depuis le CDN, sans fonction serveur.
3. Aucune variable d'environnement requise pour la section légale.

### GitHub Pages (export 100 % statique)

GitHub Pages ne sert que des fichiers statiques. Activer l'export Next :

1. Dans `next.config.ts`, ajouter `output: "export"` (et `images: { unoptimized: true }`
   si `next/image` est utilisé sans loader). Toutes les pages du site doivent
   alors être statiques — les pages légales le sont déjà.
2. `npm run build` génère le site dans `out/`.
3. Publier `out/` sur la branche `gh-pages` (ou via une action GitHub Pages).
4. Si le site n'est pas servi à la racine du domaine, configurer `basePath` /
   `assetPrefix` dans `next.config.ts`.

> Astuce : pour des URLs sans extension `.html` côté Pages, conserver la
> structure de dossiers générée par l'export (`/legal/cgu/index.html`, etc.),
> ce que Next produit déjà.

## Note

Les anciennes pages `app/privacy` et `app/terms` (contenu codé en dur) sont
désormais remplacées par cette section pilotée par le backend. Elles peuvent
être supprimées ou redirigées vers `/legal/confidentialite` et
`/legal/mentions-legales` selon vos besoins de SEO/compatibilité de liens.
