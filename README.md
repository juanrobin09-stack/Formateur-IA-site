# Académie IA — Site vitrine

> L'intelligence artificielle, enfin utile à votre métier.

Site vitrine moderne pour **Académie IA**, organisme de formation à l'IA pour
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
| `NEXT_PUBLIC_SITE_URL` | URL publique (SEO / Open Graph / sitemap) | Valeur par défaut `https://academie-ia.fr` |
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

## ✅ Personnalisation (optionnelle)

Le site est **entièrement rempli et prêt** : email et téléphone réels,
témoignages clients, aucun texte « à remplacer ». Pour aller plus loin, ces
variables d'environnement (toutes facultatives) enrichissent le site :

| Variable | Effet |
| --- | --- |
| `NEXT_PUBLIC_LINKEDIN_URL` | Affiche le lien LinkedIn dans le pied de page |
| `NEXT_PUBLIC_SIRET` | Ajoute le SIRET aux mentions légales |
| `NEXT_PUBLIC_ADDRESS` | Ajoute l'adresse aux mentions légales |
| `RESEND_API_KEY` + `CONTACT_FROM_EMAIL` + `CONTACT_TO_EMAIL` | Active l'envoi des emails du formulaire |
| `NEXT_PUBLIC_CALENDLY_URL` | Intègre le calendrier de réservation |
| `NEXT_PUBLIC_SITE_URL` | Votre domaine final (SEO) |
