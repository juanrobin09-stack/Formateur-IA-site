import { NextResponse } from "next/server";

/**
 * Route API du formulaire de contact.
 *
 * Comportement :
 * - Si RESEND_API_KEY est défini, l'email est envoyé via Resend.
 * - Sinon, la demande est simplement journalisée côté serveur et l'utilisateur
 *   reçoit malgré tout un message de succès (le site reste fonctionnel sans clé).
 *
 * Anti-spam : champ « honeypot » (website) qui doit rester vide.
 */

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  audience?: string;
  message?: string;
  website?: string; // honeypot
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Requête invalide." },
      { status: 400 }
    );
  }

  const { name, email, phone, audience, message, website } = body;

  // 1) Piège à robots : si le honeypot est rempli, on simule un succès.
  if (website && website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // 2) Validation minimale
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Merci de remplir tous les champs obligatoires." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Adresse email invalide." },
      { status: 400 }
    );
  }

  const audienceLabel =
    audience === "particulier" ? "Particulier" : "Entreprise";

  const subject = `Nouveau message Académie IA — ${audienceLabel} (${name})`;
  const text = [
    `Nom : ${name}`,
    `Email : ${email}`,
    `Téléphone : ${phone || "—"}`,
    `Type : ${audienceLabel}`,
    "",
    "Message :",
    message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;

  // 3) Sans clé Resend : on journalise et on renvoie un succès.
  if (!apiKey) {
    console.info(
      "[contact] RESEND_API_KEY absente — message journalisé uniquement :\n" +
        text
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  // 4) Avec clé Resend : on envoie l'email.
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const to = process.env.CONTACT_TO_EMAIL || "juanrobin09@gmail.com";

    const { error } = await resend.emails.send({
      from: `Académie IA <${from}>`,
      to: [to],
      reply_to: email,
      subject,
      text,
    });

    if (error) {
      console.error("[contact] Erreur Resend :", error);
      // On renvoie le détail de l'erreur pour faciliter le diagnostic.
      const detail =
        (error as { message?: string }).message || "Erreur inconnue";
      return NextResponse.json(
        {
          error: `L'envoi a échoué : ${detail}`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Exception :", err);
    return NextResponse.json(
      { error: "Une erreur interne est survenue." },
      { status: 500 }
    );
  }
}
