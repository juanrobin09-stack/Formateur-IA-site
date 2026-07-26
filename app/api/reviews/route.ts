import { NextResponse } from "next/server";
import { addReview } from "@/lib/reviews";

/**
 * Route API du formulaire d'avis.
 *
 * Anti-spam : champ « honeypot » (website) qui doit rester vide.
 * Voir lib/reviews.ts pour le comportement de stockage (base ou email de secours).
 */

interface ReviewPayload {
  name?: string;
  role?: string;
  rating?: number | string;
  message?: string;
  website?: string; // honeypot
}

export async function POST(request: Request) {
  let body: ReviewPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { name, message, website } = body;
  const role = body.role === "entreprise" ? "Entreprise" : "Particulier";
  const rating = Number(body.rating);

  // 1) Piège à robots : si le honeypot est rempli, on simule un succès.
  if (website && website.trim() !== "") {
    return NextResponse.json({ ok: true, persisted: false });
  }

  // 2) Validation minimale
  if (!name?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Merci de renseigner votre nom et votre avis." },
      { status: 400 }
    );
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json(
      { error: "Merci de choisir une note entre 1 et 5." },
      { status: 400 }
    );
  }
  if (name.trim().length > 100 || message.trim().length > 2000) {
    return NextResponse.json(
      { error: "Votre nom ou votre avis est trop long." },
      { status: 400 }
    );
  }

  try {
    const { persisted, review } = await addReview({
      name: name.trim(),
      role,
      rating,
      message: message.trim(),
    });
    return NextResponse.json({ ok: true, persisted, review });
  } catch (err) {
    console.error("[reviews] Exception :", err);
    return NextResponse.json(
      { error: "Une erreur interne est survenue." },
      { status: 500 }
    );
  }
}
