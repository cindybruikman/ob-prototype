"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MapPin } from "lucide-react";

import { NewsCard } from "@/components/news/NewsCard";
import { BottomNav } from "@/components/layout/BottomNav";

import { backendMockArticles } from "@/lib/mockDataBackend";
import { mapBackendToUI } from "@/lib/mapBackendToUI";
import { getPreferences, type UserPreferences } from "@/lib/preferences";

export default function VoorMijPage() {
  const router = useRouter();

  const [preferences, setPreferences] = useState<UserPreferences | null>(null);

  // 1) pas op: localStorage => alleen client
  useEffect(() => {
    const prefs = getPreferences();
    setPreferences(prefs);

    if (!prefs.hasCompletedSetup) {
      router.replace("/location");
    }
  }, [router]);

  // 2) articles uit "backend mock" -> UI model
  const articles = useMemo(() => {
    return backendMockArticles.map(mapBackendToUI);
  }, []);

  // 3) filter op savedLocations
  const filteredArticles = useMemo(() => {
    if (!preferences) return [];

    // als niets gekozen is: laat alles zien (of kies jouw gewenste gedrag)
    if (
      !preferences.savedLocations ||
      preferences.savedLocations.length === 0
    ) {
      return articles;
    }

    const selectedNames = preferences.savedLocations
      .filter((l) => l.source === "region") // regio’s
      .map((l) => l.name.toLowerCase());

    // als live locatie aan staat maar nog geen regio’s: toon alles (prototype)
    if (selectedNames.length === 0) return articles;

    return articles.filter((a) =>
      selectedNames.some((name) => a.location.toLowerCase().includes(name))
    );
  }, [articles, preferences]);

  // 4) label in header
  const locationLabel = useMemo(() => {
    if (!preferences) return "Laden…";

    if (
      !preferences.savedLocations ||
      preferences.savedLocations.length === 0
    ) {
      return "Alle locaties";
    }

    // toon bijv: "Woonplaats: Tilburg (15km), Werk: Eindhoven (25km)"
    return preferences.savedLocations
      .map((l) => `${l.label}: ${l.name} (${l.radius} km)`)
      .join(" • ");
  }, [preferences]);

  if (!preferences) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
          <div className="px-4 py-4">
            <h1 className="text-2xl font-bold text-foreground">Voor jou</h1>
            <div className="text-sm text-muted-foreground mt-1">Laden…</div>
          </div>
        </header>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">Voor jou</h1>

          <Link
            href="/location"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mt-1"
          >
            <MapPin className="w-4 h-4" />
            {locationLabel}
          </Link>
        </div>
      </header>

      <main className="px-4 py-4 space-y-4">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              variant="compact"
              showLocation={false}
              showSummary={false}
              showDate={false}
            />
          ))
        ) : (
          <div className="text-center py-12 space-y-4">
            <p className="text-muted-foreground">
              Geen artikelen gevonden voor je geselecteerde locaties.
            </p>
            <Link href="/location" className="text-primary hover:underline">
              Pas je locatie-instellingen aan
            </Link>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
