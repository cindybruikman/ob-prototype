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

  const containerClass = "mx-auto w-full max-w-[808px] px-4";

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
        <div className={containerClass + " py-4"}>
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

      {/* ✅ 1 container voor ALLES */}
      <div className={containerClass}>
        {/* Weekly recap CTA */}
        <div className="pt-3">
          <Link
            href="/weekly"
            className="block rounded-xl border border-white/20 bg-card p-4 hover:bg-white/5 transition"
          >
            <h3 className="font-semibold text-white">Jouw weekly recap</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Het belangrijkste nieuws van jouw regio’s, in één overzicht.
            </p>
            <span className="inline-block mt-2 text-sm text-primary font-medium">
              Bekijk overzicht →
            </span>
          </Link>
        </div>

        {/* Compact cards */}
        {/* Artikelen */}
        <main className="py-4 space-y-3">
          {filteredArticles.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              variant="compact"
              showLocation={false}
              showSummary={false}
              showDate={false}
            />
          ))}
        </main>
      </div>

      <BottomNav />
    </div>
  );
}
