"use client";

import { useState, useEffect, useMemo } from "react";
import { MapPin, Plus, X, Navigation } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { availableLocations, radiusOptions } from "@/lib/mockData";
import {
  UserPreferences,
  getPreferences,
  savePreferences,
} from "@/lib/preferences";
import { useRouter } from "next/navigation";

export function LocationSelector() {
  const [preferences, setPreferences] = useState<UserPreferences>(
    getPreferences()
  );
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  const router = useRouter();
  useEffect(() => {
    savePreferences(preferences);
  }, [preferences]);

  const radiusPixelSize = useMemo(() => {
    // 5km = 120px, 50km = 240px (prototype schaal)
    const min = 120;
    const max = 240;
    const t = (preferences.radius - 5) / (50 - 5);
    const clamped = Math.max(0, Math.min(1, t));
    return Math.round(min + (max - min) * clamped);
  }, [preferences.radius]);

  const handleToggleLocation = () => {
    setPreferences((prev) => ({
      ...prev,
      useCurrentLocation: !prev.useCurrentLocation,
    }));

    if (!preferences.useCurrentLocation) {
      toast("Locatie geactiveerd", {
        description:
          "Artikelen worden nu gefilterd op basis van je huidige locatie.",
      });
    }
  };

  const handleRadiusChange = (radius: number) => {
    setPreferences((prev) => ({ ...prev, radius }));
  };

  const handleAddLocation = (location: string) => {
    if (!preferences.locations.includes(location)) {
      setPreferences((prev) => ({
        ...prev,
        locations: [...prev.locations, location],
      }));
      toast("Locatie toegevoegd", { description: location });
    }
    setShowLocationPicker(false);
  };

  const handleRemoveLocation = (location: string) => {
    setPreferences((prev) => ({
      ...prev,
      locations: prev.locations.filter((l) => l !== location),
    }));
  };

  const handleContinue = () => {
    savePreferences({
      ...preferences,
      hasCompletedSetup: true,
    });

    router.push("/voor-mij");
  };

  return (
    <div className="space-y-6">
      {/* Use Current Location */}
      <div className="bg-card rounded-lg p-4 border border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Navigation className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium text-foreground">
              Gebruik mijn locatie
            </span>
          </div>
          <Switch
            checked={preferences.useCurrentLocation}
            onCheckedChange={handleToggleLocation}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Alleen aanzetten als je lokaal nieuws automatisch wilt filteren.
        </p>
      </div>

      {/* Map Placeholder */}
      <div className="relative aspect-square bg-card rounded-lg border border-border overflow-hidden">
        <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
          <div className="relative">
            <div
              className="absolute rounded-full bg-primary/15 border border-primary/40"
              style={{
                width: `${radiusPixelSize}px`,
                height: `${radiusPixelSize}px`,
                transform: "translate(-50%, -50%)",
                left: "50%",
                top: "50%",
              }}
            />
            <MapPin className="w-8 h-8 text-primary relative z-10" />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 bg-background/70 backdrop-blur rounded-lg p-3 border border-border">
          <p className="text-sm text-muted-foreground text-center">
            Kaart visualisatie (prototype)
          </p>
        </div>
      </div>

      {/* Radius Selection */}
      <div className="space-y-3">
        <label className="text-sm text-muted-foreground">
          Radius instellen:
        </label>
        <div className="flex gap-2 flex-wrap">
          {radiusOptions.map((radius) => (
            <Button
              key={radius}
              variant={preferences.radius === radius ? "pillActive" : "pill"}
              size="pill"
              onClick={() => handleRadiusChange(radius)}
            >
              {radius} km
            </Button>
          ))}
        </div>
      </div>

      {/* Selected Locations */}
      <div className="space-y-3">
        <label className="text-sm text-muted-foreground">
          Geselecteerde locaties:
        </label>
        <div className="flex gap-2 flex-wrap">
          {preferences.locations.map((location) => (
            <div
              key={location}
              className="flex items-center gap-2 bg-card border border-border rounded-full px-3 py-1.5"
            >
              <span className="text-sm text-foreground">{location}</span>
              <button
                type="button"
                onClick={() => handleRemoveLocation(location)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Verwijder ${location}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add Location */}
      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full justify-start gap-2"
          onClick={() => setShowLocationPicker(!showLocationPicker)}
        >
          <Plus className="w-4 h-4" />
          Extra locatie toevoegen
        </Button>

        {showLocationPicker && (
          <div className="bg-card border border-border rounded-lg p-3 max-h-56 overflow-y-auto">
            <div className="grid grid-cols-2 gap-2">
              {availableLocations
                .filter((loc) => !preferences.locations.includes(loc))
                .map((location) => (
                  <button
                    key={location}
                    type="button"
                    onClick={() => handleAddLocation(location)}
                    className="text-left px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors"
                  >
                    {location}
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Continue Button (sticky in page, niet fixed op hele viewport) */}
      <div className="pt-2 pb-24">
        <Button className="w-full" size="lg" onClick={handleContinue}>
          Ga verder
        </Button>
        <p className="text-xs text-muted-foreground text-center mt-2">
          Je kunt deze instellingen later altijd aanpassen.
        </p>
      </div>
    </div>
  );
}
