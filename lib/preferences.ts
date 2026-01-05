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
  | "Vrije tijd & entertainment";

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
      return { ...defaultPreferences, ...parsed };
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
  // ✅ Live locatie aan → filter op current plaatsnaam
  if (prefs.useCurrentLocation) {
    const current = (prefs.savedLocations ?? []).find(
      (l) => l.id === "current"
    );
    const currentName = current?.name?.trim();
    if (!currentName) return articles;

    const target = normalize(currentName);

    return articles.filter((article) =>
      normalize(article.location).includes(target)
    );
  }

  // ✅ Anders: filter op gekozen regio's
  const picked = (prefs.savedLocations ?? [])
    .filter((l) => l.source === "region")
    .map((l) => l.name);

  if (picked.length === 0) return articles;

  const pickedNorm = picked.map(normalize);

  return articles.filter((article) => {
    const loc = normalize(article.location);
    return pickedNorm.some((p) => loc.includes(p));
  });
}
