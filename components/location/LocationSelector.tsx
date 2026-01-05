"use client";

import { useEffect, useMemo, useState } from "react";
import { MapPin, Plus, X, Navigation } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { availableLocations, radiusOptions } from "@/lib/mockData";
import {
  getPreferences,
  savePreferences,
  type UserPreferences,
  type SavedLocation,
  type LocationLabel,
} from "@/lib/preferences";

/** ---------- Helpers: normalize + match ---------- */
function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // accents weg
    .replace(/['’]/g, "") // apostrof varianten weg
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchToAvailableLocation(rawPlace: string, available: string[]) {
  const n = normalize(rawPlace);

  // 1) exact match
  const exact = available.find((loc) => normalize(loc) === n);
  if (exact) return exact;

  // 2) contains match (bijv. "Gemeente Tilburg" → "Tilburg")
  const contains = available.find((loc) => n.includes(normalize(loc)));
  if (contains) return contains;

  // 3) reverse contains (bijv. "Tilburg Reeshof" vs "Tilburg")
  const reverseContains = available.find((loc) => normalize(loc).includes(n));
  if (reverseContains) return reverseContains;

  return null;
}

/** ---------- Reverse geocode (lat/lng → place) ---------- */
async function reverseGeocodeToPlaceName(coords: { lat: number; lng: number }) {
  const url =
    `https://nominatim.openstreetmap.org/reverse` +
    `?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}&zoom=12&addressdetails=1`;

  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "nl",
    },
  });

  if (!res.ok) throw new Error(`Reverse geocode failed (${res.status})`);
  const data = await res.json();

  const a = data?.address ?? {};
  return (a.city ||
    a.town ||
    a.village ||
    a.municipality ||
    a.hamlet ||
    a.suburb ||
    a.county ||
    null) as string | null;
}

type Props = {
  onContinue?: () => void;
};

export function LocationSelector({ onContinue }: Props) {
  // ✅ nooit null nodig: getPreferences() geeft altijd defaultPreferences terug
  const [preferences, setPreferences] = useState<UserPreferences>(() =>
    getPreferences()
  );

  // ✅ 1 save effect is genoeg
  useEffect(() => {
    savePreferences(preferences);
  }, [preferences]);

  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [search, setSearch] = useState("");

  // ✅ Kies een label dat WEL in LocationLabel zit
  const DEFAULT_LABEL: LocationLabel = "Woonplaats";

  const currentSaved = useMemo(
    () => preferences.savedLocations.find((l) => l.id === "current"),
    [preferences.savedLocations]
  );

  const liveRadius = useMemo(() => {
    return currentSaved?.radius ?? 15;
  }, [currentSaved]);

  const radiusPixelSize = useMemo(() => {
    // 5km = 120px, 50km = 240px
    const min = 120;
    const max = 240;
    const t = (liveRadius - 5) / (50 - 5);
    const clamped = Math.max(0, Math.min(1, t));
    return Math.round(min + (max - min) * clamped);
  }, [liveRadius]);

  const filteredAvailable = useMemo(() => {
    const already = new Set(
      (preferences.savedLocations ?? [])
        .filter((l) => l.source === "region")
        .map((l) => l.name.toLowerCase())
    );

    const q = search.trim().toLowerCase();

    return availableLocations
      .filter((loc) => !already.has(loc.toLowerCase()))
      .filter((loc) => (q ? loc.toLowerCase().includes(q) : true));
  }, [preferences.savedLocations, search]);

  /** ---------- Actions ---------- */
  const setLiveRadius = (radius: number) => {
    setPreferences((prev) => {
      const existing = prev.savedLocations.find((l) => l.id === "current");

      const nextCurrent: SavedLocation = {
        id: "current",
        name: existing?.name ?? "Huidige locatie",
        radius,
        label: existing?.label ?? DEFAULT_LABEL,
        source: "current",
      };

      const nextSaved = existing
        ? prev.savedLocations.map((l) => (l.id === "current" ? nextCurrent : l))
        : [...prev.savedLocations, nextCurrent];

      return { ...prev, savedLocations: nextSaved };
    });
  };

  const handleToggleLocation = () => {
    const next = !preferences.useCurrentLocation;

    // UIT: direct terugzetten + coords weg
    if (!next) {
      setPreferences((prev) => ({
        ...prev,
        useCurrentLocation: false,
        currentCoords: undefined,
      }));

      toast("Live locatie uit", {
        description: "We gebruiken je GPS niet meer.",
      });
      return;
    }

    // AAN: alvast flag aan (voor UI), daarna GPS
    setPreferences((prev) => ({ ...prev, useCurrentLocation: true }));

    if (!navigator.geolocation) {
      toast("Locatie niet beschikbaar", {
        description: "Je browser ondersteunt geen GPS.",
      });
      setPreferences((prev) => ({
        ...prev,
        useCurrentLocation: false,
        currentCoords: undefined,
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };

        // 1) coords opslaan
        setPreferences((prev) => ({
          ...prev,
          currentCoords: coords,
          useCurrentLocation: true,
        }));

        // 2) reverse geocode → match naar jouw Brabant-lijst
        try {
          const place = await reverseGeocodeToPlaceName(coords);
          const matched = place
            ? matchToAvailableLocation(place, availableLocations)
            : null;

          if (!matched) {
            toast("Locatie opgehaald", {
              description: place
                ? `Plaatsnaam '${place}' matcht niet met jouw lijst.`
                : "Geen plaatsnaam gevonden.",
            });
            return;
          }

          setPreferences((prev) => {
            const existing = prev.savedLocations.find(
              (l) => l.id === "current"
            );
            const radius = existing?.radius ?? 15;

            const nextCurrent: SavedLocation = {
              id: "current",
              name: matched, // ✅ bv. Tilburg
              radius,
              label: DEFAULT_LABEL,
              source: "current",
            };

            const nextSaved = existing
              ? prev.savedLocations.map((l) =>
                  l.id === "current" ? nextCurrent : l
                )
              : [...prev.savedLocations, nextCurrent];

            return { ...prev, savedLocations: nextSaved };
          });

          toast("Locatie geactiveerd", {
            description: `We filteren nu rond ${matched}.`,
          });
        } catch {
          toast("Locatie geactiveerd", {
            description: "GPS is aan, maar plaatsnaam ophalen lukt niet.",
          });
        }
      },
      () => {
        toast("Locatie geweigerd", {
          description: "Geef toestemming om je huidige locatie te gebruiken.",
        });
        setPreferences((prev) => ({
          ...prev,
          useCurrentLocation: false,
          currentCoords: undefined,
        }));
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  const handleAddRegion = (name: string) => {
    const id = name.toLowerCase().replace(/\s+/g, "-");

    const exists = (preferences.savedLocations ?? []).some(
      (l) => l.source === "region" && l.id === id
    );
    if (exists) {
      setShowLocationPicker(false);
      return;
    }

    const regionLoc: SavedLocation = {
      id,
      name,
      radius: 15,
      label: DEFAULT_LABEL,
      source: "region",
    };

    setPreferences((prev) => ({
      ...prev,
      savedLocations: [...(prev.savedLocations ?? []), regionLoc],
    }));

    toast("Regio toegevoegd", { description: name });
    setShowLocationPicker(false);
    setSearch("");
  };

  const handleRemoveLocation = (id: string) => {
    setPreferences((prev) => ({
      ...prev,
      savedLocations: (prev.savedLocations ?? []).filter((l) => l.id !== id),
    }));
  };

  const handleContinueInternal = () => {
    onContinue?.();
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

      {/* Live locatie: map + radius */}
      {preferences.useCurrentLocation ? (
        <>
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

          <div className="space-y-3">
            <label className="text-sm text-muted-foreground">
              Live locatie radius:
            </label>
            <div className="flex gap-2 flex-wrap">
              {radiusOptions.map((radius) => (
                <Button
                  key={radius}
                  variant={liveRadius === radius ? "pillActive" : "pill"}
                  size="pill"
                  onClick={() => setLiveRadius(radius)}
                  type="button"
                >
                  {radius} km
                </Button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Live locatie UIT: regio lijst + zoek */}
          <div className="space-y-3">
            <label className="text-sm text-muted-foreground">
              Kies een regio:
            </label>

            <div className="space-y-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Zoek regio…"
                className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />

              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={() => setShowLocationPicker((s) => !s)}
                type="button"
              >
                <Plus className="w-4 h-4" />
                Regio toevoegen
              </Button>

              {showLocationPicker ? (
                <div className="bg-card border border-border rounded-lg p-3 max-h-64 overflow-y-auto">
                  <div className="grid grid-cols-2 gap-2">
                    {filteredAvailable.map((location) => (
                      <button
                        key={location}
                        type="button"
                        onClick={() => handleAddRegion(location)}
                        className="text-left px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors"
                      >
                        {location}
                      </button>
                    ))}

                    {filteredAvailable.length === 0 ? (
                      <div className="col-span-2 text-sm text-muted-foreground px-1 py-2">
                        Geen resultaten.
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </>
      )}

      {/* Saved locations */}
      <div className="space-y-3">
        <label className="text-sm text-muted-foreground">
          Opgeslagen locaties:
        </label>

        <div className="flex gap-2 flex-wrap">
          {(preferences.savedLocations ?? []).map((location) => (
            <div
              key={location.id}
              className="flex items-center gap-2 bg-card border border-border rounded-full px-3 py-1.5"
            >
              <span className="text-sm text-foreground">
                {location.name}
                <span className="text-muted-foreground">
                  {" "}
                  • {location.radius} km
                </span>
              </span>

              <button
                type="button"
                onClick={() => handleRemoveLocation(location.id)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Verwijder ${location.name}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}

          {(preferences.savedLocations ?? []).length === 0 ? (
            <div className="text-sm text-muted-foreground">
              Nog geen locaties opgeslagen.
            </div>
          ) : null}
        </div>
      </div>

      {/* Optional internal CTA */}
      {onContinue ? (
        <div className="pt-2 pb-24">
          <Button className="w-full" size="lg" onClick={handleContinueInternal}>
            Ga verder
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Je kunt deze instellingen later altijd aanpassen.
          </p>
        </div>
      ) : (
        <div className="pb-10" />
      )}
    </div>
  );
}
