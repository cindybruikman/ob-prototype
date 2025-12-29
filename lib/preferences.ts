export type LocationLabel = "Woonplaats" | "Werk" | "Anders";

export interface SavedLocation {
  id: string; // "current" of bijv. "tilburg"
  name: string; // "Huidige locatie" / "Tilburg"
  radius: number;
  label: LocationLabel;
  source: "current" | "region";
}

export interface UserPreferences {
  savedLocations: SavedLocation[];
  useCurrentLocation: boolean;
  hasCompletedSetup: boolean;
}

const STORAGE_KEY = "news-app-preferences";

const defaultPreferences: UserPreferences = {
  savedLocations: [],
  useCurrentLocation: false,
  hasCompletedSetup: false,
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
 * Filter op basis van gekozen locaties.
 * - Als er geen savedLocations zijn: alles tonen.
 * - Anders: match op artikel.location (zoals "Tilburg", "Eindhoven", etc.)
 */
export function filterArticlesByPreferences<T extends { location: string }>(
  articles: T[],
  prefs: UserPreferences
): T[] {
  const picked = prefs.savedLocations
    .filter((l) => l.source === "region")
    .map((l) => l.name);

  if (picked.length === 0) return articles;

  return articles.filter((article) =>
    picked.some((loc) =>
      article.location.toLowerCase().includes(loc.toLowerCase())
    )
  );
}
