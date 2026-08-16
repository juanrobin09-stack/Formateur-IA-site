# Audit et implémentation SEO — Académie IA

Date : 2026-08-16
Périmètre : audit complet + implémentation technique et on-page, sur le projet Next.js 14 (App Router) existant.

---

## 1. Résumé

### État initial
Le site avait une base propre (Next.js App Router, metadata par page, sitemap et robots.txt générés) mais souffrait d'un **bug technique critique qui invalidait tout le référencement des pages internes**, d'une absence totale de données structurées, d'un contenu meta obsolète sur une page clé, et d'une couverture de mots-clés limitée à deux pages génériques (Entreprises / Particuliers) sans page dédiée aux requêtes à fort volume comme « formation ChatGPT ».

### État final
- Le bug de canonicalisation est corrigé : chaque page a désormais sa propre URL canonique, son propre Open Graph et sa propre Twitter Card.
- Le domaine de production réel a été corrigé dans la configuration (voir §10, risque critique).
- Données structurées Schema.org : `Organization`, `WebSite`, `BreadcrumbList` (toutes pages), `Course`/`Offer` (pages avec offres), `FAQPage` (une seule fois, sur `/tarifs`).
- Deux nouvelles pages à forte valeur SEO : `/formations` (hub) et `/formations/chatgpt` (page dédiée à la requête « formation ChatGPT » / « apprendre ChatGPT »).
- Sitemap et robots.txt corrigés et étendus.
- Maillage interne renforcé (fil d'Ariane visible + liens contextuels).
- Page 404 utile, avec liens de rebond.
- Aucune fonctionnalité existante cassée (build de production vérifié, formulaires de contact et d'avis testés).

### Niveau SEO estimé
- **Avant** : base technique correcte mais un défaut structurel empêchait Google d'indexer correctement les pages secondaires. Niveau réel : faible malgré une bonne apparence de surface.
- **Après** : base technique saine et conforme aux bonnes pratiques actuelles (2025-2026). Le site est maintenant en état d'être indexé correctement et de commencer à se positionner. La suite dépend surtout du travail de contenu (voir §11) et de la publication effective (Search Console, backlinks), qui sortent du périmètre du code.

---

## 2. SEO technique — corrections effectuées

| Problème | Sévérité | Correction |
|---|---|---|
| `alternates.canonical` fixé une seule fois dans `app/layout.tsx`, hérité tel quel par **toutes** les pages : `/entreprises`, `/particuliers`, `/tarifs`, `/avis`, etc. avaient toutes pour URL canonique la page d'accueil | **Critique** | Nouveau helper `lib/seo.ts` (`pageMetadata()`) appelé sur chaque page, qui fixe un canonical propre à chaque URL |
| Open Graph et Twitter Card identiques sur tout le site (hérités de l'accueil) : partager `/entreprises` sur LinkedIn affichait le titre/la description de l'accueil | Élevée | `pageMetadata()` génère un OG/Twitter propre à chaque page |
| Domaine de secours (`NEXT_PUBLIC_SITE_URL` non défini) pointait vers `academie-ia.fr`, alors que le domaine réel de production est `académie-ia.com` (`xn--acadmie-ia-e7a.com` en Punycode, confirmé par capture d'écran du site en ligne) | **Critique** | Valeur de secours corrigée dans `lib/site.ts`. **Action requise côté utilisateur, voir §10** |
| `app/tarifs/page.tsx` : meta description obsolète, mentionnant « essai gratuit, contrats avec/sans engagement, offre d'exclusivité » — une offre commerciale abandonnée depuis plusieurs itérations | Moyenne | Description réécrite pour refléter l'offre actuelle |
| Page d'accueil sans `export const metadata` propre (héritait des valeurs par défaut du layout) | Faible | Metadata explicite ajoutée, avec title/description orientés mots-clés |
| Sitemap incluait `/cgv` et `/mentions-legales`, deux pages en `noindex` — incohérence (un sitemap ne doit lister que des URLs indexables) | Faible | Retirées du sitemap |
| Sitemap ne contenait pas `/avis` (page existante) ni les nouvelles pages `/formations` | Faible | Sitemap régénéré avec toutes les pages indexables et des priorités cohérentes |
| Page 404 : deux balises `<meta name="robots">` dupliquées (une injectée automatiquement par Next.js, une par mon propre code) | Cosmétique | Retiré le `robots` explicite du côté applicatif ; Next.js gère déjà le `noindex` automatiquement sur cette page. Voir §10 pour le détail — sans impact réel car Google fusionne les directives les plus restrictives en cas de doublon, et le vrai statut HTTP 404 reste le signal principal |

---

## 3. SEO on-page — pages optimisées

Chaque page a désormais : un `<title>` unique orienté intention de recherche, une meta description unique orientée conversion, un H1 unique, un canonical propre, et un fil d'Ariane visible (sauf accueil).

| Page | Intention principale | Changement |
|---|---|---|
| `/` (accueil) | Marque + double intention (B2B/B2C) | Metadata explicite ajoutée |
| `/entreprises` | Transactionnelle B2B | Title/description réécrits, lien contextuel vers `/formations/chatgpt`, données `Course` |
| `/particuliers` | Transactionnelle B2C | Title/description réécrits, lien contextuel vers `/formations/chatgpt`, données `Course` |
| `/formations` (nouvelle) | Hub informationnel/navigationnel | Créée |
| `/formations/chatgpt` (nouvelle) | Informationnelle + transactionnelle sur « formation ChatGPT » | Créée |
| `/tarifs` | Transactionnelle (comparaison prix) | Description corrigée (obsolète), `FAQPage` + `Course` ajoutés |
| `/avis` | Confiance / preuve sociale | Metadata affinée |
| `/contact` | Transactionnelle (devis) | Description affinée |
| `/reservation` | Transactionnelle (prise de rdv) | Canonical ajouté (consolide les variantes `?offer=...`) |
| `/a-propos` | E-E-A-T / confiance | Ajout du nom réel du fondateur (déjà public dans les mentions légales, aucune fabrication) |
| `/cgv`, `/mentions-legales` | Légal (noindex volontaire, correct) | Migré vers le helper commun, comportement inchangé |
| 404 | — | Réécrite avec liens utiles, statut HTTP 404 confirmé |

---

## 4. Architecture

```
/
├── entreprises/                (existant, optimisé)
├── particuliers/                (existant, optimisé)
├── formations/                  ← NOUVEAU (hub)
│   └── chatgpt/                 ← NOUVEAU (page dédiée)
├── tarifs/                      (existant, optimisé)
├── avis/                        (existant, optimisé)
├── a-propos/                    (existant, optimisé)
├── contact/                     (existant, optimisé)
├── reservation/                 (existant, optimisé)
├── cgv/                         (existant, noindex — correct)
└── mentions-legales/            (existant, noindex — correct)
```

Je n'ai **pas** créé les sous-pages `/entreprises/formation-ia-entreprise`, `/entreprises/formation-equipes`, etc. proposées dans le brief : le contenu réel du site ne justifie pas encore cette profondeur (ça aurait produit des pages fines, redondantes avec `/entreprises`). Voir §11 pour la suite logique.

Je n'ai créé qu'**une seule** page de formation dédiée (`/formations/chatgpt`), pas six pages par secteur ni une par outil IA (Claude, Gemini, etc.) : c'est la requête la plus recherchée et la plus explicitement demandée dans le brief, avec un contenu réellement différenciant à écrire. Créer 5-6 pages supplémentaires sans contenu spécifique aurait produit exactement les « pages fines » que le brief interdit.

---

## 5. Mots-clés — cartographie

### A. Transactionnelles
`formation IA`, `formation intelligence artificielle`, `formation ChatGPT`, `formation IA entreprise`, `formation IA professionnelle` → couvertes par `/entreprises`, `/particuliers`, `/tarifs`, `/formations/chatgpt`.

### B. Informationnelles
`comment utiliser ChatGPT`, `apprendre ChatGPT`, `qu'est-ce que l'IA générative` → couvertes en partie par `/formations/chatgpt` (section « Ce que vous apprendrez » + FAQ). Opportunité de contenu plus poussé en §11.

### C. B2B
`formation IA entreprise`, `former ses salariés à l'IA`, `formation ChatGPT entreprise`, `sensibilisation IA entreprise` → `/entreprises`, cas d'usage par secteur (Immobilier, Restauration, BTP, Artisans, Commerce, Professions libérales), déjà présents et de bonne qualité.

### D. B2C
`apprendre l'IA`, `formation IA débutant`, `cours IA en ligne` → `/particuliers`, `/formations/chatgpt`.

### E. Longue traîne
`formation ChatGPT à domicile Gironde`, `cours particulier IA visio`, `former son équipe à l'IA sur devis` → couvertes naturellement par le contenu existant (présentiel Gironde/Libournais, devis entreprise), sans page dédiée artificielle.

Chaque page a une intention **principale** unique — aucune page ne cible plusieurs intentions concurrentes.

---

## 6. Maillage interne

```
Accueil ──┬── Entreprises ──→ Formation ChatGPT ──→ Contact
          ├── Particuliers ──→ Formation ChatGPT ──→ Réservation
          ├── Formations ──┬── Formation ChatGPT
          │                ├── Entreprises
          │                └── Particuliers
          ├── Tarifs (FAQ + toutes les offres)
          ├── Avis
          └── À propos
```

- Le footer (déjà présent) donne un lien vers **toutes** les pages principales depuis **chaque** page du site — bonne base d'auparavant, conservée.
- Nouveaux liens contextuels ajoutés (ancres descriptives, jamais « cliquez ici ») :
  - Badge « ChatGPT » du hero (accueil) → `/formations/chatgpt`
  - `/entreprises` → « ChatGPT » → `/formations/chatgpt`
  - `/particuliers` → « apprendre ChatGPT » → `/formations/chatgpt`
  - `/formations/chatgpt` → `/particuliers#offres`, `/entreprises#offres`, `/tarifs`, `/contact`
  - `/formations` → `/formations/chatgpt`, `/entreprises`, `/particuliers`
- Fil d'Ariane visible + cliquable sur toutes les pages internes (sauf accueil), qui renforce aussi le maillage vers l'accueil et les pages parentes.
- Aucune page orpheline détectée après ajout des nouvelles pages (toutes atteignables depuis la nav, le footer, ou un lien contextuel).

---

## 7. Schema.org — données structurées implémentées

| Type | Où | Détail |
|---|---|---|
| `Organization` | Toutes les pages (layout racine) | Nom, URL, logo, email, téléphone, fondateur (nom réel), `sameAs` LinkedIn si configuré |
| `WebSite` | Toutes les pages (layout racine) | Nom, URL, langue |
| `BreadcrumbList` | Toutes les pages internes | Généré depuis le fil d'Ariane visible de chaque page |
| `Course` (+ `Offer` si prix ferme) | `/entreprises`, `/particuliers`, `/tarifs`, `/formations/chatgpt` | Une entrée par offre réelle du catalogue (`lib/offers.ts`). **Aucun prix n'est fabriqué** : les offres « Sur devis » n'ont pas de sous-objet `offers` (pas de prix numérique inventé) |
| `FAQPage` | `/tarifs` **uniquement** | Voir décision ci-dessous |

**Décision : pas de `Review`/`AggregateRating`.** Le site affiche des avis clients (page `/avis`), mais je n'ai **pas** ajouté de données structurées de type avis. Google restreint fortement, depuis 2023, les extraits enrichis d'avis publiés par l'organisation elle-même sur son propre site (politique anti-avis « self-serving »). Ajouter ce balisage serait un risque réel (perte de confiance algorithmique, voire action manuelle) pour un bénéfice incertain. Documenté ici plutôt que fabriqué.

**Décision : `FAQPage` sur une seule page.** Le composant `FaqSection` affiche le même contenu FAQ sur trois pages (accueil, `/particuliers`, `/tarifs`) — contenu dupliqué à l'identique. Marquer les trois avec des données structurées `FAQPage` identiques aurait été redondant et risqué (Google traite le balisage dupliqué sur plusieurs URLs comme un signal de faible qualité). Le balisage n'existe donc que sur `/tarifs`, la page la plus pertinente pour ce contenu (questions sur les tarifs, le paiement, le déroulement). Le composant visuel reste affiché sur les trois pages pour l'expérience utilisateur — seul le balisage structuré est retiré des deux autres.

**Pas de `LocalBusiness`.** Aucune adresse physique publique n'est exposée sur le site (choix assumé du propriétaire). `LocalBusiness` nécessite une adresse réelle pour être valide — en ajouter une fictive aurait violé la règle explicite du brief contre les fausses localisations. `Organization` (sans adresse) est le type correct pour ce cas.

---

## 8. Indexation

- **Sitemap** (`/sitemap.xml`) : 10 URLs indexables, priorités cohérentes avec la hiérarchie commerciale (accueil > entreprises/particuliers > formations/tarifs > contact/réservation/avis > à propos).
- **Robots.txt** : autorise tout sauf `/api/*` (correct, ce sont des routes techniques). Référence le sitemap.
- **Canonicals** : corrigés sur toutes les pages (voir §2, correction critique).
- **Noindex** : `/cgv`, `/mentions-legales` (pages légales, correct), page 404 (via le comportement natif de Next.js).
- **Pas de contenu dupliqué restant** en dehors du composant FAQ visuel (assumé, schema non dupliqué — voir §7).

---

## 9. Performance, mobile, accessibilité

- **Images** : le site n'utilise aucune image raster (`<img>` ou `next/image`) — tout est en SVG (logo, icônes `lucide-react`) ou en CSS (dégradés). Il n'y a donc **rien à corriger côté attributs ALT** : il n'y a pas d'image de contenu manquante d'ALT. Opportunité de contenu (pas un bug) en §11.
- **Polices** : déjà chargées via `next/font/google` avec `display: "swap"` — bonne pratique déjà en place, aucun changement nécessaire (évite le blocage de rendu et le CLS lié aux polices).
- **JavaScript** : le site utilise Framer Motion pour les animations. Choix de design assumé — non modifié (conformément à la consigne de ne pas sacrifier des fonctionnalités pour quelques millisecondes).
- **Landmarks HTML** : `<header>`, `<main>`, `<footer>` déjà présents et corrects.
- **Formulaires** : labels `htmlFor`/`id` déjà correctement associés (contact, avis) — vérifié, aucun changement nécessaire.
- **Éléments interactifs** : boutons icône-seul déjà pourvus d'`aria-label` (menu mobile, suppression d'avis) — vérifié via recherche systématique, aucune lacune trouvée.
- **Bundle** : `First Load JS` partagé ≈ 87 kB, pages individuelles entre 0,1 et 13 kB — raisonnable pour un site avec animations riches.
- **Mobile** : le site est déjà construit mobile-first (classes Tailwind responsive systématiques, menu mobile dédié). Le nouveau fil d'Ariane utilise `flex-wrap` pour ne jamais déborder horizontalement sur petit écran.

**Non corrigé, documenté** : plusieurs textes utilisent des opacités de blanc faibles (`text-white/40`, `text-white/50`) sur fond très sombre, ce qui peut approcher la limite du contraste WCAG AA pour du texte de petite taille. Je n'ai **pas** modifié ces couleurs : c'est un choix de design existant et le brief interdit explicitement de changer le design sans nécessité. À évaluer visuellement par vous ou un test automatisé (Lighthouse/axe) si l'accessibilité stricte est un objectif.

---

## 10. Risques et points d'attention

### 🔴 Critique — à vérifier immédiatement
**Le domaine `NEXT_PUBLIC_SITE_URL` doit être vérifié sur Vercel.** Le code utilise maintenant `https://xn--acadmie-ia-e7a.com` (= académie-ia.com) comme valeur de secours, déduite de vos captures d'écran du site en ligne. Mais si la variable d'environnement `NEXT_PUBLIC_SITE_URL` est déjà définie sur Vercel avec une **autre** valeur, c'est elle qui prévaudra silencieusement. **Allez dans Vercel → Settings → Environment Variables et confirmez que `NEXT_PUBLIC_SITE_URL` vaut exactement l'URL de production réelle** (avec le bon protocole HTTPS). C'est la base de tout le reste : canonical, sitemap, Open Graph, JSON-LD en dépendent tous.

### 🟠 Élevé
- **Search Console** : après déploiement, soumettez `/sitemap.xml` dans Google Search Console et demandez une réindexation des pages principales — le bug de canonical a pu faire que Google ignorait certaines pages depuis un moment ; il faut lui signaler explicitement que c'est corrigé.
- **Duplication du FAQ visuel** (pas le schema, juste le contenu visible) sur 3 pages : sans impact critique (Google gère bien le contenu dupliqué non malveillant), mais si vous ajoutez plus de contenu à l'avenir, évitez de dupliquer de larges blocs de texte identiques sur plusieurs URLs.

### 🟡 Moyen
- Balise `<meta name="robots">` dupliquée sur la page 404 (voir §2) — sans impact réel confirmé, mais signalé par transparence.
- Contraste de certains textes en `white/40`-`white/50` (voir §9) — à valider visuellement.

### Aucun risque de perte de données ou de fonctionnalité
- Aucune donnée supprimée.
- Aucun formulaire cassé (contact et avis testés après modification).
- Aucune redirection nécessaire : aucune URL existante n'a changé (`/formations` et `/formations/chatgpt` sont de nouvelles URLs, rien n'a été déplacé).
- Aucun secret, clé API ou variable sensible touché.

---

## 11. Contenu recommandé (non fabriqué, à décider par vous)

Le brief interdit explicitement de produire des articles de blog ou des pages en masse sans réelle valeur. Je n'ai donc **pas** créé de blog ni de dizaines de pages. Voici les prochaines pages qui auraient un vrai potentiel, par ordre de priorité, **si vous confirmez le contenu réel** (je ne peux pas inventer un programme pédagogique précis, des durées, ou des méthodes que je ne connais pas) :

1. **`/formations/claude`, `/formations/gemini`** — même format que `/formations/chatgpt`, si ces outils ont une place suffisamment distincte dans vos formations pour justifier une page à part.
2. **Un article de blog « Comment utiliser ChatGPT au travail : le guide »** — cible la requête informationnelle à fort volume, capte du trafic tôt dans le tunnel de conversion.
3. **Une page dédiée par secteur** (`/entreprises/immobilier`, `/entreprises/btp`, etc.) — le contenu existe déjà en embryon (`sectorUseCases` dans `lib/content.ts`), mais chaque page nécessiterait un vrai développement (cas d'usage détaillés, témoignages sectoriels) pour ne pas être une coquille vide.
4. **Une image ou photo réelle** (vous, en formation, ou un logo raster PNG) — améliorerait le rendu des données structurées `Organization.logo` (Google préfère un PNG/JPEG à un SVG pour l'éligibilité "Logo" dans les résultats enrichis) et humaniserait `/a-propos`.

---

## 12. Prochaines étapes, par priorité

### PRIORITÉ CRITIQUE
- [ ] Vérifier/corriger `NEXT_PUBLIC_SITE_URL` sur Vercel (voir §10)
- [ ] Déployer ces changements en production
- [ ] Soumettre le sitemap dans Google Search Console et demander une réindexation

### PRIORITÉ ÉLEVÉE
- [ ] Créer un compte Google Search Console et Bing Webmaster Tools si pas déjà fait, pour suivre l'indexation réelle
- [ ] Vérifier visuellement le rendu du fil d'Ariane et des nouvelles pages `/formations` sur mobile réel

### PRIORITÉ MOYENNE
- [ ] Ajouter un vrai logo PNG/JPEG (en plus du SVG actuel) pour une meilleure éligibilité aux résultats enrichis Google
- [ ] Évaluer le contraste des textes `white/40`/`white/50` avec Lighthouse ou axe DevTools
- [ ] Envisager 1 à 2 pages `/formations/[outil]` supplémentaires si le contenu réel le justifie

### OPPORTUNITÉS
- [ ] Stratégie éditoriale (blog) sur les clusters ChatGPT / IA générative / IA en entreprise, en commençant par 1-2 articles à fort potentiel plutôt qu'une production de masse
- [ ] Pages sectorielles entreprises approfondies
- [ ] Backlinks / présence LinkedIn (le champ `NEXT_PUBLIC_LINKEDIN_URL` existe déjà dans `.env.example` et alimente automatiquement le `sameAs` du schema `Organization` dès qu'il est renseigné)

---

## Annexe — Fichiers modifiés ou créés

**Créés**
- `lib/seo.ts` — helper central de metadata (canonical, OG, Twitter) et générateurs de données structurées
- `components/seo/json-ld.tsx` — composant d'injection JSON-LD
- `app/formations/page.tsx` — nouvelle page hub
- `app/formations/chatgpt/page.tsx` — nouvelle page dédiée
- `SEO-AUDIT-FINAL.md` — ce rapport

**Modifiés**
- `app/layout.tsx` — suppression du canonical global erroné, ajout du JSON-LD `Organization`/`WebSite`
- `app/page.tsx`, `app/entreprises/page.tsx`, `app/particuliers/page.tsx`, `app/tarifs/page.tsx`, `app/avis/page.tsx`, `app/contact/page.tsx`, `app/reservation/page.tsx`, `app/a-propos/page.tsx`, `app/cgv/page.tsx`, `app/mentions-legales/page.tsx` — migration vers `pageMetadata()`, fil d'Ariane, données structurées le cas échéant
- `app/not-found.tsx` — page 404 réécrite avec liens utiles
- `app/sitemap.ts` — sitemap corrigé et étendu
- `components/page-header.tsx` — support du fil d'Ariane (visible + JSON-LD)
- `components/hero.tsx` — lien contextuel « ChatGPT » vers `/formations/chatgpt`
- `lib/site.ts` — correction du domaine de secours, ajout de « Formations » à la navigation
