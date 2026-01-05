function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // accents weg
    .replace(/['’]/g, "") // apostrof varianten weg
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function matchToAvailableLocation(
  rawPlace: string,
  available: string[]
): string | null {
  const n = normalize(rawPlace);

  // 1) exact match
  const exact = available.find((loc) => normalize(loc) === n);
  if (exact) return exact;

  // 2) contains match (bijv. "Gemeente Tilburg" → "Tilburg")
  const contains = available.find((loc) => n.includes(normalize(loc)));
  if (contains) return contains;

  // 3) reverse contains (bijv. article location "Tilburg, Reeshof" etc.)
  const reverseContains = available.find((loc) => normalize(loc).includes(n));
  if (reverseContains) return reverseContains;

  return null;
}
