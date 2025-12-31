"use client";

import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { LocationSelector } from "@/components/location/LocationSelector";
import { BottomNav } from "@/components/layout/BottomNav";
import { getPreferences, savePreferences } from "@/lib/preferences";
import { Button } from "@/components/ui/button";
import { StickyFooterCTA } from "@/components/onboarding/StickyFooterCTA";

export default function LocationPage() {
  const router = useRouter();
  const containerClass = "mx-auto w-full max-w-[808px] px-4";

  const handleContinue = () => {
    const prefs = getPreferences();

    savePreferences({
      ...prefs,
      hasCompletedSetup: true,
    });

    router.push("/themes");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader
        title="Selecteer jouw locatie(s)"
        subtitle="Deze instellingen bepalen welke artikelen je op de Voor Mij-pagina ziet."
        showBack
      />

      <main className="py-4">
        <div className={containerClass}>
          <LocationSelector />
        </div>
      </main>

      <div className="min-h-screen bg-background pb-24">
        {/* ... PageHeader + content ... */}

        <StickyFooterCTA
          step={2}
          totalSteps={3}
          onContinue={handleContinue}
          buttonText="Ga verder"
        />

        {/* als je BottomNav gebruikt, laat hem staan */}
        {/* <BottomNav /> */}
      </div>

      {/* <BottomNav /> */}
    </div>
  );
}
