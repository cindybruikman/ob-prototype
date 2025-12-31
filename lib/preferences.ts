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

export interface UserPreferences {
  savedLocations: SavedLocation[];
  useCurrentLocation: boolean;

  // onboarding states
  hasSeenIntro: boolean;
  hasCompletedSetup: boolean;

  // intro toggle
  useReadingBehavior: boolean;

  // themes
  selectedThemes: ThemeKey[];
}

const STORAGE_KEY = "news-app-preferences";

const defaultPreferences: UserPreferences = {
  savedLocations: [],
  useCurrentLocation: false,

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
 * Filter op basis van gekozen locaties + thema's.
 * - Geen locaties gekozen? => alles (locatie)
 * - Geen thema's gekozen? => alles (thema)
 */
export function filterArticlesByPreferences<
  T extends { location: string; category?: string }
>(articles: T[], prefs: UserPreferences): T[] {
  // 1) locatie filter (zoals je al had)
  const pickedRegions = (prefs.savedLocations ?? [])
    .filter((l) => l.source === "region")
    .map((l) => l.name.toLowerCase());

  let result = articles;

  if (pickedRegions.length > 0) {
    result = result.filter((a) =>
      pickedRegions.some((loc) => a.location.toLowerCase().includes(loc))
    );
  }

  // 2) thema filter (nieuw)
  const themes = (prefs.selectedThemes ?? []).map((t) => t.toLowerCase());

  if (themes.length > 0) {
    result = result.filter((a) =>
      themes.some((t) => (a.category ?? "").toLowerCase().includes(t))
    );
  }

  return result;
}
