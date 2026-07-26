/**
 * Stockage des avis clients.
 *
 * Si POSTGRES_URL (ou DATABASE_URL) est défini — une base Postgres attachée
 * au projet (Vercel Postgres/Neon, Supabase, ou toute base Postgres) — les
 * avis sont enregistrés en base et apparaissent immédiatement sur le site.
 *
 * Sans base configurée, un avis soumis est envoyé par email au propriétaire
 * du site (comme le formulaire de contact) pour ne rien perdre, et affiché
 * comme « en attente de publication » plutôt que publié à tort.
 */

import { Pool } from "pg";

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  message: string;
  createdAt: string;
}

export interface NewReviewInput {
  name: string;
  role: string;
  rating: number;
  message: string;
}

const SEED_REVIEWS: Review[] = [
  {
    id: "seed-frederic",
    name: "Frédéric",
    role: "Particulier",
    rating: 5,
    message:
      "Un grand merci ! J'étais complètement perdu avec l'IA, et en quelques séances j'ai appris à m'en servir au quotidien. Pédagogue, patient et très concret : je recommande les yeux fermés.",
    createdAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "seed-gino",
    name: "Gino",
    role: "Particulier",
    rating: 5,
    message:
      "Une formation claire, sans jargon et vraiment adaptée à mes besoins. J'ai gagné en autonomie et en confiance avec les outils IA. Top !",
    createdAt: "2025-01-01T00:00:00.000Z",
  },
];

function connectionString(): string | undefined {
  return process.env.POSTGRES_URL || process.env.DATABASE_URL;
}

// Un seul pool de connexions, réutilisé entre les requêtes (évite d'en
// ouvrir une nouvelle à chaque appel en environnement serverless).
declare global {
  // eslint-disable-next-line no-var
  var __reviewsPool: Pool | undefined;
}

function getPool(): Pool {
  const url = connectionString();
  if (!url) {
    throw new Error("Aucune base de données configurée.");
  }
  if (!global.__reviewsPool) {
    global.__reviewsPool = new Pool({
      connectionString: url,
      ssl: url.includes("localhost") ? false : { rejectUnauthorized: false },
    });
  }
  return global.__reviewsPool;
}

async function ensureTable(pool: Pool): Promise<void> {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS reviews (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      rating INTEGER NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `);
}

/** Récupère tous les avis, du plus récent au plus ancien. */
export async function getReviews(): Promise<Review[]> {
  if (!connectionString()) {
    return SEED_REVIEWS;
  }

  const pool = getPool();
  await ensureTable(pool);

  const { rows: countRows } = await pool.query<{ count: string }>(
    "SELECT COUNT(*) AS count FROM reviews"
  );
  if (Number(countRows[0]?.count ?? 0) === 0) {
    for (const seed of SEED_REVIEWS) {
      await pool.query(
        "INSERT INTO reviews (name, role, rating, message, created_at) VALUES ($1, $2, $3, $4, $5)",
        [seed.name, seed.role, seed.rating, seed.message, seed.createdAt]
      );
    }
  }

  const { rows } = await pool.query(
    `SELECT id, name, role, rating, message, created_at AS "createdAt"
     FROM reviews ORDER BY created_at DESC LIMIT 200`
  );

  return rows.map((r) => ({
    id: String(r.id),
    name: r.name,
    role: r.role,
    rating: r.rating,
    message: r.message,
    createdAt: new Date(r.createdAt).toISOString(),
  }));
}

/** Ajoute un avis : en base si possible, sinon par email de secours. */
export async function addReview(
  input: NewReviewInput
): Promise<{ persisted: boolean; review: Review }> {
  const fallbackReview: Review = {
    id: `pending-${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...input,
  };

  if (connectionString()) {
    const pool = getPool();
    await ensureTable(pool);
    const { rows } = await pool.query(
      `INSERT INTO reviews (name, role, rating, message)
       VALUES ($1, $2, $3, $4)
       RETURNING id, created_at AS "createdAt"`,
      [input.name, input.role, input.rating, input.message]
    );
    return {
      persisted: true,
      review: {
        ...fallbackReview,
        id: String(rows[0].id),
        createdAt: new Date(rows[0].createdAt).toISOString(),
      },
    };
  }

  // Pas de base configurée : on envoie l'avis par email pour ne rien perdre.
  const text = [
    `Nom : ${input.name}`,
    `Type : ${input.role}`,
    `Note : ${input.rating}/5`,
    "",
    "Avis :",
    input.message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info(
      "[reviews] Aucune base ni clé Resend configurée — avis journalisé uniquement :\n" +
        text
    );
    return { persisted: false, review: fallbackReview };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const to = process.env.CONTACT_TO_EMAIL || "juanrobin09@gmail.com";
    await resend.emails.send({
      from: `Académie IA <${from}>`,
      to: [to],
      subject: `Nouvel avis en attente — ${input.name} (${input.rating}/5)`,
      text,
    });
  } catch (err) {
    console.error("[reviews] Échec de l'envoi email de secours :", err);
  }

  return { persisted: false, review: fallbackReview };
}
