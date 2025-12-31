"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { RecapCard } from "@/components/weekly/RecapCard";
import { BottomNav } from "@/components/layout/BottomNav";

import { backendMockArticles } from "@/lib/mockDataBackend";
import { mapBackendToUI } from "@/lib/mapBackendToUI";
import {
  getPreferences,
  filterArticlesByPreferences,
  type UserPreferences,
} from "@/lib/preferences";

export default function WeeklyPage() {
  const router = useRouter();
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);

  const containerClass = "mx-auto w-full max-w-[808px] px-4";

  // localStorage -> alleen client
  useEffect(() => {
    const prefs = getPreferences();
    setPreferences(prefs);

    if (!prefs.hasSeenIntro) {
      router.replace("/voor-mij/setup");
      return;
    }

    if (!prefs.hasCompletedSetup) {
      router.replace("/location");
      return;
    }
  }, [router]);

  const articles = useMemo(() => backendMockArticles.map(mapBackendToUI), []);

  const filteredArticles = useMemo(() => {
    if (!preferences) return [];
    return filterArticlesByPreferences(articles, preferences);
  }, [articles, preferences]);

  const recapSections = useMemo(() => {
    const grouped = new Map<string, typeof filteredArticles>();

    for (const a of filteredArticles) {
      const key = a.category || "Overig";
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key)!.push(a);
    }

    return Array.from(grouped.entries()).map(([category, arts]) => ({
      category,
      icon: category.toLowerCase().includes("sport")
        ? ("sport" as const)
        : category.toLowerCase().includes("innovatie") ||
          category.toLowerCase().includes("bedrijven")
        ? ("business" as const)
        : ("news" as const),
      articles: arts.slice(0, 4).map((a) => ({
        id: a.id,
        region: a.location,
        title: a.title,
        subtitle: a.summary,
        isNew: a.isNew,
        isTrending: a.isTrending,
      })),
    }));
  }, [filteredArticles]);

  // labels uit savedLocations
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
      <div className="min-h-screen pb-20 bg-background">
        <header className="sticky top-0 z-40 border-b border-border bg-card">
          <div className={containerClass + " flex items-center py-3"}>
            <button onClick={() => router.back()} className="p-2 -ml-2">
              <ArrowLeft className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </header>

        <div className={containerClass + " py-4 text-sm text-muted-foreground"}>
          Laden…
        </div>

        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card">
        <div className={containerClass + " flex items-center py-3"}>
          <button onClick={() => router.back()} className="p-2 -ml-2">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </header>

      {/* Content */}
      <div className={containerClass + " space-y-4 py-4"}>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Jouw weekly recap
          </h1>
          <p className="text-muted-foreground mt-1">
            Het belangrijkste nieuws van jouw locaties en thema&apos;s.
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            Gebaseerd op {locationLabel}
            {radiusLabel ? ` (${radiusLabel})` : ""}
          </p>
        </div>

        <div className="space-y-4">
          {recapSections.length > 0 ? (
            recapSections.map((section, idx) => (
              <RecapCard
                key={idx}
                category={section.category}
                icon={section.icon}
                articles={section.articles}
              />
            ))
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              Geen artikelen gevonden voor deze week in je geselecteerde
              locaties.
              <div className="mt-3">
                <Link href="/location" className="text-primary hover:underline">
                  Pas je locatie-instellingen aan
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
