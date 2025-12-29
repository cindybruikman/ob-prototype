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

  // 1) localStorage => alleen client
  useEffect(() => {
    const prefs = getPreferences();
    setPreferences(prefs);

    if (!prefs.hasCompletedSetup) {
      router.replace("/location");
    }
  }, [router]);

  // 2) backend mock -> UI model
  const articles = useMemo(() => backendMockArticles.map(mapBackendToUI), []);

  // 3) filter op savedLocations
  const filteredArticles = useMemo(() => {
    if (!preferences) return [];

    const selectedNames = (preferences.savedLocations ?? [])
      .filter((l) => l.source === "region")
      .map((l) => l.name.toLowerCase());

    // niets gekozen => alles tonen (prototype)
    if (selectedNames.length === 0) return articles;

    return articles.filter((a) =>
      selectedNames.some((name) => a.location.toLowerCase().includes(name))
    );
  }, [articles, preferences]);

  // 4) header labels: pas berekenen als preferences bestaat
  const regionLocations = useMemo(() => {
    if (!preferences) return [];
    return (preferences.savedLocations ?? []).filter(
      (l) => l.source === "region"
    );
  }, [preferences]);

  const locationLabel =
    regionLocations.length > 0
      ? regionLocations.map((l) => l.name).join(", ")
      : "Alle locaties";

  const radiusLabel =
    regionLocations.length === 1 ? `${regionLocations[0].radius} km` : "";

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
            {radiusLabel ? ` • ${radiusLabel}` : ""}
          </Link>
        </div>
      </header>

      {/* Weekly recap knop (netjes met padding/spacing) */}
      <div className="px-4 pt-3">
        <Link
          href="/weekly"
          className="inline-flex items-center justify-center rounded-full border border-white/30 px-4 py-2 text-sm text-white hover:bg-white/5 transition"
        >
          Bekijk weekly recap
        </Link>
      </div>

      {/* Compact cards, zelfde als Home */}
      <main className="">
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
