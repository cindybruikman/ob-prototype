// lib/preferences.ts

export type LocationLabel = "Woonplaats" | "Werk" | "Anders";

export interface SavedLocation {
  id: string; // "current" of bijv. "tilburg"
  name: string; // "Huidige locatie" / "Tilburg"
  radius: number;
  label: LocationLabel;
  source: "current" | "region";
}

export type ThemeKey =
  | "Nieuws & maatschappij"
  | "Sport"
  | "Brabantse cultuur"
  | "Natuur & milieu"
  | "Bedrijven & innovatie"
  | "Vrije tijd & entertainment"
  | "Verkeer"
  | "112";

export type LatLng = { lat: number; lng: number };

export interface UserPreferences {
  savedLocations: SavedLocation[];
  useCurrentLocation: boolean;

  // ✅ nieuw: voor live GPS
  currentCoords?: LatLng;

  // flow flags
  hasSeenIntro: boolean;
  hasCompletedSetup: boolean;

  // optioneel
  useReadingBehavior: boolean;
  selectedThemes: ThemeKey[];
}

const STORAGE_KEY = "news-app-preferences";

const defaultPreferences: UserPreferences = {
  savedLocations: [],
  useCurrentLocation: false,
  currentCoords: undefined,

  hasSeenIntro: false,
  hasCompletedSetup: false,

  useReadingBehavior: false,
  selectedThemes: [],
};

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getPreferences(): UserPreferences {
  if (!isBrowser()) return defaultPreferences;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Partial<UserPreferences>;

      // ✅ sanitize savedLocations: label altijd aanwezig
      const sanitizedSavedLocations: SavedLocation[] = (
        parsed.savedLocations ?? []
      ).map((l: any) => ({
        id: String(l.id),
        name: String(l.name),
        radius: Number(l.radius ?? 15),
        source: l.source === "current" ? "current" : "region",
        label:
          l.label === "Woonplaats" || l.label === "Werk" || l.label === "Anders"
            ? l.label
            : "Anders",
      }));

      return {
        ...defaultPreferences,
        ...parsed,
        savedLocations: sanitizedSavedLocations,
      };
    }
  } catch (e) {
    console.error("Error reading preferences:", e);
  }

  return defaultPreferences;
}

export function savePreferences(prefs: UserPreferences): void {
  if (!isBrowser()) return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch (e) {
    console.error("Error saving preferences:", e);
  }
}

export function resetPreferences() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(STORAGE_KEY);
}

/**
 * Filter op basis van gekozen locaties (region).
 * - Als er geen savedLocations zijn: alles tonen.
 */
function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function filterArticlesByPreferences<T extends { location: string }>(
  articles: T[],
  prefs: UserPreferences
): T[] {
  const saved = prefs.savedLocations ?? [];

  // ✅ active = alle regio's + current (alleen als live aan staat)
  const active = saved.filter(
    (l) =>
      l.source === "region" ||
      (l.source === "current" && prefs.useCurrentLocation)
  );

  // niets gekozen => alles tonen (prototype)
  if (active.length === 0) return articles;

  const needles = active.map((l) => normalize(l.name));

  return articles.filter((article) => {
    const hay = normalize(article.location);
    return needles.some((n) => hay.includes(n));
  });
}
