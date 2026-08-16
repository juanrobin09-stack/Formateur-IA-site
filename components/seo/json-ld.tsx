type JsonLdData = Record<string, unknown> | Record<string, unknown>[];

/** Injecte un bloc de données structurées Schema.org dans la page. */
export function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      // Sérialisation contrôlée côté serveur, aucune entrée utilisateur brute.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
