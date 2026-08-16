# SEO Académie IA — Phase 2 : Croissance organique

Date : 2026-08-16
Suite de `SEO-AUDIT-FINAL.md` (Phase 1 : fondations techniques). Cette phase construit la
couche « visibilité + trafic + autorité » par-dessus ces fondations, sans les refaire.

---

## 1. Ce qui existait déjà (vérifié dans le code, pas supposé)

Avant toute modification, j'ai relu `SEO-AUDIT-FINAL.md` puis contrôlé chaque élément annoncé
directement dans le code réel :

| Élément annoncé | Vérifié dans | Constat |
|---|---|---|
| Helper `pageMetadata()` (canonical, OG, Twitter par page) | `lib/seo.ts` | Présent, fonctionnel |
| `organizationJsonLd`, `websiteJsonLd`, `breadcrumbJsonLd`, `coursesJsonLd` | `lib/seo.ts` | Présents, corrects |
| Injection JSON-LD sitewide (`Organization`, `WebSite`) | `app/layout.tsx` | Présente, pas de canonical global résiduel |
| Composant `<JsonLd>` | `components/seo/json-ld.tsx` | Présent |
| `/formations` et `/formations/chatgpt` | `app/formations/*` | Présentes, contenu réel |
| Fil d'Ariane visible + `BreadcrumbList` | `components/page-header.tsx` | Présent, propagé sur toutes les pages internes |
| `FAQPage` uniquement sur `/tarifs` | `app/tarifs/page.tsx` | Confirmé, pas de duplication du schema sur les 2 autres pages affichant le même FAQ |
| Sitemap sans les pages noindex | `app/sitemap.ts` | Confirmé |
| Navigation avec « Formations » | `lib/site.ts` | Confirmé |
| Domaine réel (`xn--acadmie-ia-e7a.com`) | `lib/site.ts` | Confirmé |

**Rien de tout cela n'a été refait.** Le travail de cette phase s'est construit dessus.

---

## 2. Ce qui a été amélioré (pages existantes)

| Page | Amélioration |
|---|---|
| `/entreprises` | Subtitle élargi pour cibler explicitement dirigeants/RH/managers (intention B2B plus large). Les 6 cartes « cas d'usage par secteur » sont devenues des liens cliquables vers les nouvelles pages sectorielles dédiées (architecture pilier → cluster). Ajout d'un lien contextuel vers l'article de blog B2B. |
| `/particuliers` | Ajout d'un lien contextuel vers l'article de blog « débutant ». |
| `/formations/chatgpt` | Nouvelle section « Les erreurs les plus fréquentes avec ChatGPT » (4 items) pour couvrir l'intention « conseils/erreurs à éviter » sans diluer l'intention principale de la page. Lien vers l'article de blog associé. |
| `/formations` | Nouvelle section « Ressources » pointant vers `/blog`. |
| `lib/content.ts` | Ajout d'un champ `slug` à chaque `sectorUseCase`, réutilisé pour générer les liens vers les pages sectorielles sans dupliquer la donnée. |
| `lib/site.ts` | Ajout de `/formations` (déjà présent) et `/blog` à la navigation principale. |
| `app/sitemap.ts` | 10 nouvelles URLs ajoutées, avec des priorités cohérentes avec leur profondeur dans l'architecture. |

Aucune fonctionnalité existante n'a été retirée. Aucun design modifié en dehors de l'ajout de
liens et d'une section supplémentaire sur `/formations/chatgpt`.

---

## 3. Nouvelles pages créées (10)

### Pages sectorielles B2B (pilier `/entreprises`)
| URL | Title |
|---|---|
| `/entreprises/immobilier` | Formation IA immobilier : annonces, visites et diagnostics |
| `/entreprises/restauration` | Formation IA pour la restauration : cartes, avis clients, achats |
| `/entreprises/btp` | Formation IA BTP : devis, comptes-rendus et appels d'offres |
| `/entreprises/artisans` | Formation IA artisans : devis, factures et relation client |
| `/entreprises/commerce` | Formation IA commerce : fiches produits, campagnes et service client |
| `/entreprises/professions-liberales` | Formation IA professions libérales : dossiers, courriers et veille |

Chacune contient : un H1 unique, 3 « défis du secteur » développés à partir des cas d'usage
réels déjà publiés sur `/entreprises` (pas de simple recopie, un vrai développement du
problème concret), 4 « ce que vous apprendrez », une FAQ spécifique au métier (3 questions),
un lien vers `/formations/chatgpt` quand pertinent, un lien retour vers `/entreprises`, la
formule réelle `formation-equipe` (via `getOffer()`, jamais de prix inventé), un `Course`
JSON-LD et un `BreadcrumbList` cohérent avec l'URL.

### Blog (nouveau pilier informationnel)
| URL | Title |
|---|---|
| `/blog` | Index, liste les 3 articles |
| `/blog/comment-utiliser-chatgpt-au-travail` | Guide B2C/B2B généraliste |
| `/blog/apprendre-intelligence-artificielle-debutant` | Guide grand public débutant |
| `/blog/former-salaries-intelligence-artificielle` | Guide B2B dirigeants/RH/managers |

Chaque article : introduction, 3 à 5 sections avec H2, contenu concret et vérifiable (pas de
statistique inventée), un renvoi naturel vers les pages commerciales pertinentes en fin
d'article, une donnée structurée `Article` (headline, description, dates, auteur/éditeur =
Académie IA), et un fil d'Ariane `Accueil > Blog > [Titre]`.

**Méthode de création** : les 6 pages sectorielles et les 3 articles ont été rédigés par des
agents indépendants travaillant en parallèle, chacun avec pour instruction stricte de ne
jamais inventer de chiffre, de témoignage, de client, de certification ou d'offre commerciale,
et de produire un contenu réellement différenciant (pas un gabarit avec le nom du secteur
changé). Une passe de vérification adversariale indépendante a ensuite relu les 10 fichiers
(voir §11). Un point mineur a été trouvé et corrigé (voir §12).

---

## 4. Mots-clés ciblés

### Transactionnelles
`formation IA`, `formation intelligence artificielle`, `formation ChatGPT`,
`formation IA entreprise`, `formation ChatGPT entreprise`, `formation IA professionnelle` →
`/`, `/entreprises`, `/particuliers`, `/formations/chatgpt`.

### Commerciales (comparaison / décision)
`formation IA en ligne`, `formation ChatGPT en ligne`, `prix formation IA`,
`formation IA pour débutants` → `/tarifs`, `/formations/chatgpt`, `/particuliers`.

### Informationnelles
`comment utiliser ChatGPT`, `comment utiliser l'IA au travail`, `apprendre ChatGPT`,
`comment apprendre l'intelligence artificielle`, `comment former ses salariés à l'IA` →
les 3 articles de `/blog`.

### B2B sectoriel (nouveau)
`formation IA immobilier`, `IA agence immobilière`, `formation IA restauration`,
`formation IA BTP`, `IA devis chantier`, `formation IA artisan`, `formation IA commerce`,
`formation IA profession libérale` → les 6 pages `/entreprises/[secteur]`.

### Longue traîne
`formation ChatGPT pour débutants`, `apprendre ChatGPT pour travailler`,
`formation IA pour salariés`, `formation IA pour dirigeants`, `utiliser ChatGPT en
entreprise`, `formation IA à domicile Gironde` → couvertes naturellement par le contenu
existant et nouveau, sans page dédiée artificielle pour chacune.

Chaque page conserve une **intention principale unique** — voir l'analyse anti-cannibalisation
au §12.

---

## 5. Architecture SEO

```
/
├── entreprises/                          (pilier B2B)
│   ├── immobilier/                       ← NOUVEAU
│   ├── restauration/                     ← NOUVEAU
│   ├── btp/                              ← NOUVEAU
│   ├── artisans/                         ← NOUVEAU
│   ├── commerce/                         ← NOUVEAU
│   └── professions-liberales/            ← NOUVEAU
├── particuliers/                         (pilier B2C)
├── formations/                           (hub outils)
│   └── chatgpt/                          (renforcée : + erreurs fréquentes)
├── blog/                                 ← NOUVEAU (pilier informationnel)
│   ├── comment-utiliser-chatgpt-au-travail/       ← NOUVEAU
│   ├── apprendre-intelligence-artificielle-debutant/ ← NOUVEAU
│   └── former-salaries-intelligence-artificielle/    ← NOUVEAU
├── tarifs/
├── avis/
├── a-propos/
├── contact/
├── reservation/
├── cgv/                                  (noindex, inchangé)
└── mentions-legales/                     (noindex, inchangé)
```

Je n'ai pas créé de pages `/formations/claude`, `/formations/gemini` etc. : Académie IA ne
vend pas ces formations comme des produits séparés (elles sont couvertes dans le programme
général), donc une page dédiée par outil aurait été artificielle. `/formations/chatgpt` reste
la seule page « outil » dédiée, parce que c'est la seule requête outil explicitement demandée
et à fort volume.

---

## 6. Maillage interne

Graphe simplifié des nouveaux liens (les liens déjà existants en Phase 1 restent en place) :

```
Accueil (hero, badge "ChatGPT")
  → /formations/chatgpt
      → /blog/comment-utiliser-chatgpt-au-travail
      → /particuliers#offres · /entreprises#offres

/entreprises
  → 6× /entreprises/[secteur]           (cartes cliquables, ancre "Voir la page [Secteur]")
  → /formations/chatgpt                 (ancre "ChatGPT")
  → /blog/former-salaries-intelligence-artificielle

/particuliers
  → /formations/chatgpt                 (ancre "apprendre ChatGPT")
  → /blog/apprendre-intelligence-artificielle-debutant

/formations
  → /formations/chatgpt
  → /entreprises, /particuliers
  → /blog

Chaque page /entreprises/[secteur]
  → /entreprises                        (retour, ancre "secteurs d'intervention")
  → /formations/chatgpt                 (quand pertinent pour le métier)
  → /contact

Chaque article /blog/[slug]
  → /blog (via fil d'Ariane)
  → 1-2 pages commerciales pertinentes selon le sujet de l'article
  → /contact
```

Toutes les ancres sont descriptives (« Voir la page Immobilier », « comment former ses
salariés à l'intelligence artificielle »…) — aucune ancre générique répétée à l'identique
partout, aucune ancre « cliquez ici ». Aucune page orpheline : les 10 nouvelles pages sont
toutes atteignables depuis le footer (via `navLinks`), la page `/entreprises` ou `/blog`, et
souvent un lien contextuel supplémentaire.

---

## 7. Contenu

- **10 nouvelles pages**, ~7 300 mots de contenu original au total (estimation basée sur la
  taille des fichiers créés), tous vérifiés sans fabrication (voir §12).
- **Style éditorial** : cohérent avec l'existant (phrases courtes, direct, pas de tiret
  cadratin au milieu des phrases, pas de superlatifs non justifiés).
- **Pas de production de masse** : sur les 5 sujets de blog suggérés dans le brief, seuls 3
  ont été écrits (les plus stratégiques, un par grand cluster : informationnel généraliste,
  débutant B2C, B2B dirigeants). Les 2 restants sont documentés comme opportunité au §14, pas
  fabriqués pour combler un quota.
- **Sur les 6 secteurs déjà présents dans le code** (`lib/content.ts`), les 6 ont reçu une
  page dédiée : chacun avait une matière réelle suffisante (3 cas d'usage vérifiés) pour
  justifier un développement, et le brief demandait explicitement de couvrir les secteurs
  ayant assez de matière plutôt que d'en sélectionner arbitrairement une partie.

---

## 8. Données structurées

| Type | Où (nouveau) | Détail |
|---|---|---|
| `BreadcrumbList` | 10 nouvelles pages | Généré depuis le fil d'Ariane réel de chaque page, cohérent avec la hiérarchie d'URL |
| `Course` | 6 pages sectorielles | Une entrée par page, dérivée de `getOffer("formation-equipe")` — jamais de prix fabriqué |
| `Article` | 3 articles de blog | headline/description cohérents avec le contenu visible, dates réelles (16 août 2026, date de rédaction), auteur/éditeur = Académie IA |

**Aucun nouveau type inventé.** Toujours pas de `Review`/`AggregateRating` (même raison
qu'en Phase 1 : risque de sanction Google sur les avis auto-publiés). Toujours pas de
`LocalBusiness` (toujours aucune adresse physique publique).

---

## 9. Indexation

- Sitemap : 10 → **20 URLs**, toutes réellement indexables (vérifié : aucune page noindex
  n'y figure).
- Robots.txt : inchangé, toujours correct (`disallow: /api/` uniquement).
- Canonicals : vérifiés sur un échantillon de nouvelles pages (`/entreprises/immobilier`,
  `/blog/comment-utiliser-chatgpt-au-travail`) — corrects, propres à chaque URL.
- Pas de nouvelle page noindex nécessaire (les 10 nouvelles pages sont toutes destinées à
  être indexées).
- Pas de nouveau paramètre d'URL ni de route dynamique introduits : toutes les nouvelles
  routes sont des dossiers statiques (`app/entreprises/immobilier/page.tsx`, etc.), cohérent
  avec le choix architectural déjà en place sur tout le reste du site (aucune route
  `[slug]` dynamique nulle part dans le projet).

---

## 10. Performance

- Poids des nouvelles pages : entre 504 B et 507 B de JS propre à la page (quasiment nul,
  tout le contenu est du HTML/texte statique généré au build). First Load JS partagé
  inchangé (≈ 87 kB).
- Toutes les 29 routes sont générées **statiquement** (`○ Static`) sauf les routes déjà
  dynamiques en Phase 1 (`/avis`, `/api/*`) — aucune nouvelle route rendue dynamiquement,
  donc aucun coût serveur additionnel par visite.
- Aucune image ajoutée (le constat de la Phase 1 reste vrai : le site n'utilise aucune image
  raster). Aucun script tiers ajouté. Aucune animation supplémentaire lourde : les nouvelles
  pages réutilisent les mêmes composants `Reveal`/`Section` déjà utilisés partout ailleurs.
- Design non modifié : mêmes composants, mêmes classes Tailwind, même palette.

---

## 11. Tests

| Test | Résultat |
|---|---|
| `npm run build` (build de production complet) | ✅ Succès, 29 routes générées, 0 erreur |
| `npm run lint` (ESLint) | ✅ Aucun avertissement, aucune erreur |
| `npx tsc --noEmit` (exécuté par l'agent de vérification pendant la revue adversariale) | ✅ Succès |
| Vérification adversariale indépendante des 10 nouveaux fichiers (fabrication, offres inventées, cannibalisation, contenu dupliqué, erreurs techniques) | ✅ 0 problème critique, 1 problème mineur trouvé et corrigé (voir §12) |
| Sitemap servi (`/sitemap.xml`) | ✅ 20 URLs, toutes correctes |
| Robots.txt servi (`/robots.txt`) | ✅ Inchangé, correct |
| Canonical sur un échantillon de nouvelles pages | ✅ Corrects |
| `BreadcrumbList` / `Article` / `Course` JSON-LD présents et cohérents | ✅ Vérifiés en sortie HTML réelle (curl) |
| Formulaire de contact (`/api/contact`) | ✅ Toujours fonctionnel (200) |
| Formulaire d'avis (`/api/reviews`) | ✅ Toujours fonctionnel |
| Page 404 | ✅ Toujours HTTP 404 |
| Navigation (« Formations », « Blog » visibles) | ✅ Vérifié en sortie HTML réelle |

---

## 12. Risques

### Trouvé et corrigé pendant cette phase
`app/entreprises/immobilier/page.tsx` recodait manuellement sa carte d'offre au lieu
d'utiliser le composant partagé `<OfferCard/>` utilisé par les 5 autres pages sectorielles,
ce qui faisait disparaître le badge « Le plus demandé » pourtant défini sur l'offre dans
`lib/offers.ts`. **Corrigé** : la page utilise maintenant `<OfferCard offer={formationEquipe} />`,
comme ses 5 pages sœurs. Ni les données ni le prix n'étaient affectés, seule la présentation
différait — mais c'est corrigé pour la cohérence visuelle du site.

### Hérité de la Phase 1, toujours d'actualité
Le domaine `NEXT_PUBLIC_SITE_URL` doit être vérifié sur Vercel (voir §13) — cette phase ne
change rien à ce risque, elle en dépend toujours entièrement (toutes les nouvelles URLs de
sitemap/canonical/JSON-LD utilisent la même variable).

### Nouveau, mineur
- Les 3 articles affichent une date de publication fixe (16 août 2026, la date réelle de
  rédaction). Si les articles ne sont jamais mis à jour, le signal de fraîcheur s'estompera
  avec le temps — normal pour du contenu evergreen, mais à garder en tête si vous voulez
  maintenir un signal de fraîcheur actif (voir §14).
- 6 nouvelles pages sectorielles + 3 articles + 1 index blog = 10 nouvelles URLs d'un coup à
  soumettre à l'indexation. Google peut mettre du temps à toutes les crawler ; voir §13 pour
  la marche à suivre.

### Aucun risque de régression
Build, lint et tests fonctionnels tous verts. Aucune fonctionnalité (formulaires,
réservation, avis, navigation, animations, responsive) modifiée ou cassée.

---

## 13. Actions manuelles restantes (je ne peux pas les faire moi-même)

- [ ] **Vérifier `NEXT_PUBLIC_SITE_URL` sur Vercel** (rappel critique de la Phase 1, toujours
      valable) : doit correspondre exactement au domaine réel de production.
- [ ] **Soumettre le sitemap mis à jour** dans Google Search Console (`/sitemap.xml`, 20 URLs
      désormais).
- [ ] **Demander l'indexation manuelle** des 10 nouvelles pages dans Search Console (outil
      d'inspection d'URL), pour accélérer leur découverte plutôt que d'attendre le crawl
      naturel.
- [ ] **Vérifier le rendu réel** des nouvelles pages sur mobile (le code est responsive par
      construction — mêmes composants que le reste du site déjà validé en Phase 1 — mais un
      contrôle visuel réel reste utile, notamment sur les pages avec beaucoup de contenu
      texte comme les articles de blog).
- [ ] **Surveiller les impressions/clics** dans Search Console sur les nouveaux clusters
      (secteurs, blog) après quelques semaines, pour identifier lesquels méritent d'être
      approfondis en priorité.

---

## 14. Opportunités SEO futures

Classées par potentiel, sans rien fabriquer ni promettre un contenu que je ne peux pas
garantir sans validation de votre part :

1. **Les 2 articles de blog restants du brief** : « Comment utiliser l'IA en entreprise » et
   « Les meilleurs usages de ChatGPT pour les professionnels ». Non écrits maintenant pour
   éviter la sur-production — à activer si les 3 premiers articles montrent une traction
   réelle en Search Console.
2. **Pages `/formations/claude`, `/formations/gemini`** : uniquement si vous confirmez que ces
   outils ont une place suffisamment distincte dans votre programme pour justifier une page à
   part (voir §5 — je ne les ai pas créées faute de certitude sur ce point).
3. **Mise à jour périodique des articles de blog** : republier avec une date `dateModified`
   à jour et un ajout de contenu réel entretient un signal de fraîcheur pour Google, plus
   efficace qu'une date figée.
4. **Backlinks** : le champ `NEXT_PUBLIC_LINKEDIN_URL` (déjà dans `.env.example`) alimente
   automatiquement le `sameAs` du schema `Organization` dès qu'il est renseigné — un profil
   LinkedIn actif partageant les nouveaux articles serait un signal d'autorité gratuit.
5. **Logo raster (PNG/JPEG)** : toujours recommandé (voir Phase 1, §11) pour l'éligibilité
   complète aux résultats enrichis « Logo » de Google.
6. **Une 7ᵉ page sectorielle** si un nouveau secteur avec une matière réelle (cas d'usage
   vérifiés) apparaît dans votre activité.

---

## Annexe — Fichiers modifiés ou créés dans cette phase

**Créés (10 nouvelles pages)**
- `app/entreprises/immobilier/page.tsx`
- `app/entreprises/restauration/page.tsx`
- `app/entreprises/btp/page.tsx`
- `app/entreprises/artisans/page.tsx`
- `app/entreprises/commerce/page.tsx`
- `app/entreprises/professions-liberales/page.tsx`
- `app/blog/page.tsx`
- `app/blog/comment-utiliser-chatgpt-au-travail/page.tsx`
- `app/blog/apprendre-intelligence-artificielle-debutant/page.tsx`
- `app/blog/former-salaries-intelligence-artificielle/page.tsx`
- `SEO-AUDIT-V2.md` (ce rapport)

**Modifiés**
- `app/entreprises/page.tsx` — cartes secteurs cliquables, subtitle élargi, lien blog
- `app/particuliers/page.tsx` — lien vers l'article débutant
- `app/formations/page.tsx` — section Ressources vers `/blog`
- `app/formations/chatgpt/page.tsx` — section « Erreurs fréquentes », lien blog
- `app/sitemap.ts` — 10 nouvelles URLs
- `lib/content.ts` — champ `slug` ajouté à `sectorUseCases`
- `lib/site.ts` — `/blog` ajouté à la navigation
