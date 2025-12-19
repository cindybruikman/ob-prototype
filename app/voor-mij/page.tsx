"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

import { NewsCard } from "@/components/news/NewsCard";
import { BottomNav } from "@/components/layout/BottomNav";
import { mockArticles } from "@/lib/mockData";
import { getPreferences, filterArticlesByPreferences } from "@/lib/preferences";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function VoorMijPage() {
  const router = useRouter();
  const preferences = getPreferences();

  useEffect(() => {
    if (!preferences.hasCompletedSetup) {
      router.replace("/location");
    }
  }, [router, preferences.hasCompletedSetup]);

  const filteredArticles = useMemo(() => {
    return filterArticlesByPreferences(mockArticles, preferences);
  }, [preferences]);

  const locationLabel =
    preferences.locations.length > 0
      ? preferences.locations.join(", ")
      : "Alle locaties";

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
            {locationLabel} • {preferences.radius} km
          </Link>
        </div>
      </header>

      <main className="px-4 py-4 space-y-4">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
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
