# Formator AI — Site vitrine

> L'intelligence artificielle, enfin utile à votre métier.

Site vitrine moderne pour **Formator AI**, organisme de formation à l'IA pour
**entreprises** et **particuliers**. Design haut de gamme (inspiration
Stripe / Linear / Notion), animations soignées, 100 % responsive, SEO complet.

## 🧱 Stack technique

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (palette noir `#0a0a0a` / blanc / bleu `#2563eb`)
- **Framer Motion** (animations) · **lucide-react** (icônes)
- Polices Google : **Inter** (texte) + **Fraunces** (titres)
- **Resend** (emails de contact) · **Calendly** (prise de rendez-vous)
- Prêt pour **Vercel** (zéro configuration)
- **Sans paiement en ligne** : les réservations passent par la prise de
  rendez-vous puis le devis.

## 🚀 Démarrage local

```bash
npm install
cp .env.example .env.local   # puis renseignez vos clés (facultatif)
npm run dev                  # http://localhost:3000
```

Build de production :

```bash
npm run build
npm run start
```

> ✅ Le site **build et fonctionne sans aucune clé**. Les fonctionnalités qui
> dépendent de services externes (email, agenda) s'affichent alors dans un
> état neutre et proposent une alternative (contact direct).

## 🔐 Variables d'environnement

Toutes facultatives — voir [`.env.example`](./.env.example).

| Variable | Rôle | Sans la variable |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique (SEO / Open Graph / sitemap) | Valeur par défaut `https://formator-ai.fr` |
| `RESEND_API_KEY` | Envoi des emails du formulaire de contact | Messages journalisés côté serveur + succès affiché |
| `CONTACT_FROM_EMAIL` | Adresse expéditrice (vérifiée chez Resend) | `onboarding@resend.dev` |
| `CONTACT_TO_EMAIL` | Adresse de réception des demandes | `juanrobin89@gmail.com` |
| `NEXT_PUBLIC_CALENDLY_URL` | Intègre votre calendrier Calendly | Encart proposant le contact direct |

## ☁️ Déploiement sur Vercel

1. Poussez le dépôt sur GitHub (déjà fait).
2. Sur [vercel.com](https://vercel.com) → **Add New → Project** → importez le dépôt.
3. Framework détecté automatiquement : **Next.js** (aucune config à modifier).
4. Onglet **Settings → Environment Variables** : ajoutez les variables
   souhaitées (voir tableau ci-dessus).
5. **Deploy**. C'est en ligne 🎉

## 🗂️ Structure

```
app/
  layout.tsx            # SEO global, polices, navbar + footer
  page.tsx              # Accueil (hero, offres, témoignages, FAQ…)
  entreprises/          # Page dédiée entreprises
  particuliers/         # Page dédiée particuliers
  tarifs/               # Toutes les offres
  a-propos/             # Formateur, mission, valeurs
  contact/              # Formulaire → /api/contact
  reservation/          # Prise de rendez-vous Calendly (sans paiement)
  mentions-legales/     # Gabarit légal FR
  cgv/                  # Gabarit CGV FR
  api/contact/          # Envoi email (Resend) ou log
  sitemap.ts, robots.ts # SEO
components/             # Composants réutilisables (UI, sections…)
lib/                    # site.ts, offers.ts, content.ts (contenu centralisé)
```

## ✅ Checklist des `[À REMPLACER]`

Avant la mise en ligne, complétez les éléments suivants :

**Coordonnées & identité** (`lib/site.ts`)
- [ ] Ville
- [ ] URL LinkedIn
- [ ] Raison sociale, SIRET, adresse, responsable de publication (mentions légales)

**Contenu** (`lib/content.ts`)
- [ ] 4 chiffres clés (valeurs réelles)
- [ ] 3 témoignages (nom, rôle, entreprise, citation)

**À propos** (`app/a-propos/page.tsx`)
- [ ] Photo du formateur
- [ ] Prénom / Nom et présentation

**Pages légales** (`app/mentions-legales`, `app/cgv`)
- [ ] Faire valider et compléter les gabarits (annulation, juridiction…)

**Variables d'environnement** (sur Vercel)
- [ ] `RESEND_API_KEY` + `CONTACT_FROM_EMAIL` + `CONTACT_TO_EMAIL`
- [ ] `NEXT_PUBLIC_CALENDLY_URL`
- [ ] `NEXT_PUBLIC_SITE_URL` (votre domaine final)

> ℹ️ L'email `juanrobin89@gmail.com` et le téléphone `06.24.95.63.08` sont
> déjà pré-remplis comme demandé.
