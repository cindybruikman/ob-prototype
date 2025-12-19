"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { PageHeader } from "@/components/layout/PageHeader";
import { WeeklyRecapSection } from "@/app/weekly/WeeklyRecapSection";
import { BottomNav } from "@/components/layout/BottomNav";
import { weeklyRecapCategories } from "@/lib/mockData";
import { getPreferences, filterArticlesByPreferences } from "@/lib/preferences";

export default function WeeklyRecapPage() {
  // ✅ ALLE HOOKS EERST
  const router = useRouter();
  const [preferences, setPreferences] = useState<ReturnType<
    typeof getPreferences
  > | null>(null);

  useEffect(() => {
    const prefs = getPreferences();

    // Als je "pas na setup" wil afdwingen:
    if (!prefs.hasCompletedSetup) {
      router.replace("/location");
      return;
    }

    setPreferences(prefs);
  }, [router]);

  const filteredCategories = useMemo(() => {
    if (!preferences) return [];

    return weeklyRecapCategories
      .map((category) => ({
        ...category,
        articles: filterArticlesByPreferences(category.articles, preferences),
      }))
      .filter((category) => category.articles.length > 0);
  }, [preferences]);

  // ✅ return pas NA hooks
  if (!preferences) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">
        Laden...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader
        title="Jouw weekly recap"
        subtitle="Het belangrijkste nieuws van jouw locaties en thema's."
        showBack
      />

      <main className="px-4 py-4 space-y-4">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <WeeklyRecapSection key={category.id} category={category} />
          ))
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            Geen artikelen gevonden voor deze week in je geselecteerde locaties.
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
