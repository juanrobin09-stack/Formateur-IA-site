import { NextResponse } from "next/server";
import { getOffer } from "@/lib/offers";
import { site } from "@/lib/site";

/**
 * Route API de création d'une session Stripe Checkout (mode test).
 *
 * - Utilise STRIPE_SECRET_KEY. Si la clé est absente, renvoie 503 :
 *   le bouton côté client est de toute façon désactivé (« bientôt disponible »).
 * - Le paiement correspond à un ACOMPTE (depositEUR de l'offre choisie).
 */

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  // Sans clé : fonctionnalité indisponible, mais le site reste opérationnel.
  if (!secretKey) {
    return NextResponse.json(
      {
        error:
          "Le paiement en ligne n'est pas encore activé. Contactez-nous pour réserver.",
      },
      { status: 503 }
    );
  }

  let offerId: string | undefined;
  try {
    const body = await request.json();
    offerId = body.offerId;
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const offer = offerId ? getOffer(offerId) : undefined;
  if (!offer || offer.depositEUR <= 0) {
    return NextResponse.json(
      { error: "Offre invalide pour un paiement en ligne." },
      { status: 400 }
    );
  }

  try {
    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(secretKey);

    const origin =
      request.headers.get("origin") || site.url.replace(/\/$/, "");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: offer.depositEUR * 100, // en centimes
            product_data: {
              name: `Acompte — ${offer.name}`,
              description: `${offer.duration} · ${offer.price}`,
            },
          },
        },
      ],
      metadata: { offerId: offer.id, offerName: offer.name },
      success_url: `${origin}/reservation?status=success&offer=${offer.id}`,
      cancel_url: `${origin}/reservation?status=cancel&offer=${offer.id}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] Erreur Stripe :", err);
    return NextResponse.json(
      { error: "La création du paiement a échoué. Réessayez plus tard." },
      { status: 502 }
    );
  }
}
