export interface UserPreferences {
  locations: string[];
  radius: number;
  useCurrentLocation: boolean;
  hasCompletedSetup: boolean;
}

const STORAGE_KEY = "news-app-preferences";

const defaultPreferences: UserPreferences = {
  locations: [],
  radius: 15,
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

export function filterArticlesByPreferences<T extends { location: string }>(
  articles: T[],
  prefs: UserPreferences
): T[] {
  if (!prefs.locations || prefs.locations.length === 0) {
    return articles;
  }

  return articles.filter((article) =>
    prefs.locations.some((loc) =>
      article.location.toLowerCase().includes(loc.toLowerCase())
    )
  );
}
