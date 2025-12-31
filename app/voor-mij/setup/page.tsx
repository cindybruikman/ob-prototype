"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { StickyFooterCTA } from "@/components/onboarding/StickyFooterCTA";

import {
  getPreferences,
  savePreferences,
  type UserPreferences,
} from "@/lib/preferences";

export default function VoorMijSetupIntroPage() {
  const router = useRouter();
  const [prefs, setPrefs] = useState<UserPreferences | null>(null);

  useEffect(() => {
    const p = getPreferences();
    setPrefs(p);

    // als je deze intro al eens hebt gezien, ga direct door naar locatie setup
    if (p.hasSeenIntro) {
      router.replace("/location");
    }
  }, [router]);

  if (!prefs) return null;

  const containerClass = "mx-auto w-full max-w-[808px] px-4";

  const toggleReading = () => {
    setPrefs((prev) =>
      prev ? { ...prev, useReadingBehavior: !prev.useReadingBehavior } : prev
    );
  };

  const handleContinue = () => {
    const next = { ...prefs, hasSeenIntro: true };
    savePreferences(next);
    router.push("/location");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className={containerClass + " pt-6"}>
        {/* Visual */}
        <div className="flex items-center justify-center py-6">
          <img
            src="https://www.omroepbrabant.nl/static/images/visual.png"
            alt="Voor Mij setup visual"
            className="w-[220px] max-w-full h-auto"
          />
        </div>

        {/* Copy */}
        <div className="text-center space-y-3">
          <p className="text-sm text-muted-foreground">Vernieuwd!</p>
          <h1 className="text-2xl font-bold text-foreground">
            Ontdek nieuws dat écht bij je past
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            De Voor Mij-pagina is vernieuwd! Door de stappen op deze pagina te
            doorlopen bieden we je artikelen op basis van je interesses aan. Zo
            mis je nooit meer nieuws dat voor jou belangrijk is.
          </p>
        </div>

        {/* Toggle card */}
        <div className="mt-6 bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-foreground">
              Ik wil aanbevolen artikelen op basis van mijn leesgedrag.
            </p>

            <Switch
              checked={prefs.useReadingBehavior}
              onCheckedChange={toggleReading}
            />
          </div>
        </div>

        {/* Dots + CTA */}
        <div className="min-h-screen bg-background pb-24">
          {/* ... PageHeader + content ... */}

          <StickyFooterCTA
            step={1}
            totalSteps={3}
            onContinue={handleContinue}
            buttonText="Ga verder"
          />

          {/* als je BottomNav gebruikt, laat hem staan */}
          {/* <BottomNav /> */}
        </div>
      </div>
    </div>
  );
}
