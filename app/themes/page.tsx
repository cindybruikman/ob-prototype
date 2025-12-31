"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { StickyFooterCTA } from "@/components/onboarding/StickyFooterCTA";
import {
  getPreferences,
  savePreferences,
  type UserPreferences,
  type ThemeKey,
} from "@/lib/preferences";
import { ThemeSelector } from "@/components/themes/ThemeSelector";

export default function ThemesPage() {
  const router = useRouter();
  const [prefs, setPrefs] = useState<UserPreferences | null>(null);

  useEffect(() => {
    const p = getPreferences();
    setPrefs(p);

    if (!p.hasSeenIntro) router.replace("/voor-mij/setup");
    else if (!p.hasCompletedSetup) router.replace("/location");
  }, [router]);

  const toggleTheme = (theme: ThemeKey) => {
    if (!prefs) return;

    const exists = prefs.selectedThemes.includes(theme);
    const next: UserPreferences = {
      ...prefs,
      selectedThemes: exists
        ? prefs.selectedThemes.filter((t) => t !== theme)
        : [...prefs.selectedThemes, theme],
    };

    setPrefs(next);
    savePreferences(next);
  };

  const handleContinue = () => {
    router.push("/voor-mij");
  };

  if (!prefs) return null;

  return (
    <div className="min-h-screen bg-background pb-40">
      <PageHeader
        title="Kies jouw favoriete thema’s"
        subtitle="Door thema’s te kiezen krijg je straks meer nieuws dat bij jou past."
        showBack
      />

      <main className="mx-auto w-full max-w-[808px] px-4 py-4 space-y-3">
        <ThemeSelector selected={prefs.selectedThemes} onToggle={toggleTheme} />
      </main>

      <StickyFooterCTA
        step={3}
        totalSteps={3}
        onContinue={handleContinue}
        buttonText="Ga verder"
        helperText="Je kunt deze instellingen later altijd aanpassen."
      />
    </div>
  );
}
