"use client";

import { useEffect, useMemo, useState } from "react";
import { MapPin, Navigation, Plus, X, Search } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { radiusOptions, availableLocations } from "@/lib/mockData";
import {
  getPreferences,
  savePreferences,
  type LocationLabel,
  type SavedLocation,
  type UserPreferences,
} from "@/lib/preferences";

const LABELS: LocationLabel[] = ["Woonplaats", "Werk", "Anders"];

function slugify(value: string) {
  return value.toLowerCase().trim().replace(/\s+/g, "-");
}

export function LocationSelector() {
  const router = useRouter();

  const [preferences, setPreferences] = useState<UserPreferences>(() =>
    getPreferences()
  );

  // UI state
  const [query, setQuery] = useState("");
  const [pendingType, setPendingType] = useState<"current" | "region" | null>(
    null
  );
  const [pendingName, setPendingName] = useState<string>("");
  const [pendingRadius, setPendingRadius] = useState<number>(15);
  const [pendingLabel, setPendingLabel] = useState<LocationLabel>("Woonplaats");
  const [showPicker, setShowPicker] = useState(false);

  // persist
  useEffect(() => {
    savePreferences(preferences);
  }, [preferences]);

  const hasAnySaved = preferences.savedLocations.length > 0;

  const radiusPixelSize = useMemo(() => {
    // 5km = 120px, 50km = 240px (prototype schaal)
    const min = 120;
    const max = 240;
    const t = (pendingRadius - 5) / (50 - 5);
    const clamped = Math.max(0, Math.min(1, t));
    return Math.round(min + (max - min) * clamped);
  }, [pendingRadius]);

  const selectedRegionNames = useMemo(() => {
    return new Set(
      preferences.savedLocations
        .filter((l) => l.source === "region")
        .map((l) => l.name.toLowerCase())
    );
  }, [preferences.savedLocations]);

  const filteredRegions = useMemo(() => {
    const q = query.trim().toLowerCase();
    return availableLocations
      .filter((r) => !selectedRegionNames.has(r.toLowerCase()))
      .filter((r) => (q ? r.toLowerCase().includes(q) : true));
  }, [query, selectedRegionNames]);

  function openPendingCurrent() {
    setPendingType("current");
    setPendingName("Huidige locatie");
    setPendingRadius(15);
    setPendingLabel("Woonplaats");
  }

  function openPendingRegion(name: string) {
    setPendingType("region");
    setPendingName(name);
    setPendingRadius(15);
    setPendingLabel("Woonplaats");
  }

  function closePending() {
    setPendingType(null);
    setPendingName("");
    setPendingRadius(15);
    setPendingLabel("Woonplaats");
  }

  function upsertSavedLocation(loc: SavedLocation) {
    setPreferences((prev) => {
      const idx = prev.savedLocations.findIndex(
        (x) => x.id === loc.id && x.source === loc.source
      );

      const next = [...prev.savedLocations];
      if (idx >= 0) next[idx] = loc;
      else next.push(loc);

      return { ...prev, savedLocations: next };
    });
  }

  function removeSavedLocation(id: string) {
    setPreferences((prev) => ({
      ...prev,
      savedLocations: prev.savedLocations.filter((l) => l.id !== id),
    }));
  }

  const handleToggleLive = (checked: boolean) => {
    setPreferences((prev) => ({ ...prev, useCurrentLocation: checked }));

    if (checked) {
      toast("Live locatie aan", {
        description: "Kies straks radius en sla op als woon/werk/anders.",
      });
      openPendingCurrent();
    } else {
      toast("Live locatie uit", {
        description: "Kies één of meer regio’s uit de lijst.",
      });
      // verwijder eventueel opgeslagen "current" locatie
      setPreferences((prev) => ({
        ...prev,
        savedLocations: prev.savedLocations.filter(
          (l) => l.source !== "current"
        ),
      }));
      closePending();
    }
  };

  const handleSavePending = () => {
    if (!pendingType) return;

    const id =
      pendingType === "current" ? "current" : slugify(pendingName || "regio");

    const newLoc: SavedLocation = {
      id,
      name: pendingName,
      radius: pendingRadius,
      label: pendingLabel,
      source: pendingType,
    };

    upsertSavedLocation(newLoc);

    toast("Opgeslagen", {
      description: `${newLoc.label}: ${newLoc.name} (${newLoc.radius} km)`,
    });

    // na opslaan: bij region -> picker open laten zodat je snel meer kan kiezen
    if (pendingType === "region") {
      closePending();
      setShowPicker(true);
    } else {
      closePending();
    }
  };

  const handleContinue = () => {
    if (!hasAnySaved && !preferences.useCurrentLocation) {
      toast("Kies eerst een locatie", {
        description: "Zet live locatie aan of voeg een regio toe.",
      });
      return;
    }

    savePreferences({ ...preferences, hasCompletedSetup: true });
    router.push("/voor-mij");
  };

  return (
    <div className="space-y-6 pb-24">
      {/* Live location toggle */}
      <div className="bg-card rounded-lg p-4 border border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Navigation className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium text-foreground">
              Gebruik mijn live locatie
            </span>
          </div>
          <Switch
            checked={preferences.useCurrentLocation}
            onCheckedChange={handleToggleLive}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Alleen aanzetten als je automatisch lokaal nieuws wilt filteren.
        </p>
      </div>

      {/* Map only when live location is enabled and pending current */}
      {preferences.useCurrentLocation && (
        <div className="space-y-3">
          <label className="text-sm text-muted-foreground">
            Live locatie radius:
          </label>

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
        </div>
      )}

      {/* Pending editor (for live or region) */}
      {pendingType && (
        <div className="bg-card rounded-lg border border-border p-4 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">
                {pendingType === "current" ? "Live locatie" : "Regio"}
              </p>
              <p className="font-semibold text-foreground truncate">
                {pendingName}
              </p>
            </div>

            <button
              type="button"
              onClick={closePending}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Sluiten"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Radius */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Radius instellen:</p>
            <div className="flex gap-2 flex-wrap">
              {radiusOptions.map((r) => (
                <Button
                  key={r}
                  type="button"
                  variant={pendingRadius === r ? "pillActive" : "pill"}
                  size="pill"
                  onClick={() => setPendingRadius(r)}
                >
                  {r} km
                </Button>
              ))}
            </div>
          </div>

          {/* Label */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Opslaan als:</p>
            <div className="flex gap-2 flex-wrap">
              {LABELS.map((l) => (
                <Button
                  key={l}
                  type="button"
                  variant={pendingLabel === l ? "pillActive" : "pill"}
                  size="pill"
                  onClick={() => setPendingLabel(l)}
                >
                  {l}
                </Button>
              ))}
            </div>
          </div>

          <Button type="button" className="w-full" onClick={handleSavePending}>
            Opslaan
          </Button>
        </div>
      )}

      {/* Saved locations chips */}
      <div className="space-y-3">
        <label className="text-sm text-muted-foreground">
          Opgeslagen locaties:
        </label>

        {preferences.savedLocations.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nog niets opgeslagen.</p>
        ) : (
          <div className="flex gap-2 flex-wrap">
            {preferences.savedLocations.map((loc) => (
              <div
                key={loc.id}
                className="flex items-center gap-2 bg-card border border-border rounded-full px-3 py-1.5"
              >
                <span className="text-sm text-foreground">
                  {loc.label}: {loc.name} • {loc.radius} km
                </span>
                <button
                  type="button"
                  onClick={() => removeSavedLocation(loc.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`Verwijder ${loc.name}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Region picker (when live location off) */}
      {!preferences.useCurrentLocation && (
        <div className="space-y-3">
          <Button
            type="button"
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => setShowPicker((v) => !v)}
          >
            <Plus className="w-4 h-4" />
            Regio toevoegen
          </Button>

          {showPicker && (
            <div className="bg-card border border-border rounded-lg p-3">
              <div className="relative mb-3">
                <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Zoek een regio…"
                  className="w-full pl-9 pr-3 py-2 rounded-md bg-background border border-border text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="max-h-56 overflow-y-auto">
                <div className="grid grid-cols-2 gap-2">
                  {filteredRegions.map((name) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => {
                        setShowPicker(false);
                        openPendingRegion(name);
                      }}
                      className="text-left px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors"
                    >
                      {name}
                    </button>
                  ))}
                </div>

                {filteredRegions.length === 0 && (
                  <p className="text-sm text-muted-foreground px-2 py-2">
                    Geen resultaten.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
