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

/** ---------- Helpers ---------- */
function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchToAvailableLocation(rawPlace: string, available: string[]) {
  const n = normalize(rawPlace);

  const exact = available.find((loc) => normalize(loc) === n);
  if (exact) return exact;

  const contains = available.find((loc) => n.includes(normalize(loc)));
  if (contains) return contains;

  const reverseContains = available.find((loc) => normalize(loc).includes(n));
  if (reverseContains) return reverseContains;

  return null;
}

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

type DraftKind = "region" | "current";

/**
 * Nieuwe UX:
 * - Je stelt 1 locatie in (type + naam + radius + label) en slaat op
 * - Knop "+ Nog een locatie" opent opnieuw het formulier
 * - Per saved location kun je radius + label nog aanpassen
 */
export function LocationSelector({ onContinue }: Props) {
  const [preferences, setPreferences] = useState<UserPreferences>(() =>
    getPreferences()
  );

  useEffect(() => {
    savePreferences(preferences);
  }, [preferences]);

  const DEFAULT_LABEL: LocationLabel = "Woonplaats";

  // --- Draft state (1 locatie instellen) ---
  const [isAdding, setIsAdding] = useState(false);
  const [draftKind, setDraftKind] = useState<DraftKind>("region");
  const [draftName, setDraftName] = useState("");
  const [draftRadius, setDraftRadius] = useState<number>(15);
  const [draftLabel, setDraftLabel] = useState<LocationLabel>(DEFAULT_LABEL);

  const [detectedCurrentName, setDetectedCurrentName] = useState<string | null>(
    null
  );

  // Search list (voor regio)
  const [search, setSearch] = useState("");

  const filteredAvailable = useMemo(() => {
    const already = new Set(
      (preferences.savedLocations ?? [])
        .filter((l) => l.source === "region")
        .map((l) => normalize(l.name))
    );

    const q = normalize(search);

    return availableLocations
      .filter((loc) => !already.has(normalize(loc)))
      .filter((loc) => (q ? normalize(loc).includes(q) : true));
  }, [preferences.savedLocations, search]);

  // --- Helpers to update existing saved locations ---
  const updateLocationRadius = (id: string, radius: number) => {
    setPreferences((prev) => ({
      ...prev,
      savedLocations: (prev.savedLocations ?? []).map((l) =>
        l.id === id ? { ...l, radius } : l
      ),
    }));
  };

  const updateLocationLabel = (id: string, label: LocationLabel) => {
    setPreferences((prev) => ({
      ...prev,
      savedLocations: (prev.savedLocations ?? []).map((l) =>
        l.id === id ? { ...l, label } : l
      ),
    }));
  };

  const removeLocation = (id: string) => {
    setPreferences((prev) => ({
      ...prev,
      savedLocations: (prev.savedLocations ?? []).filter((l) => l.id !== id),
      // als je current verwijdert → ook toggle uit
      useCurrentLocation: id === "current" ? false : prev.useCurrentLocation,
      currentCoords: id === "current" ? undefined : prev.currentCoords,
    }));
  };

  const resetDraft = () => {
    setDraftKind("region");
    setDraftName("");
    setDraftRadius(15);
    setDraftLabel(DEFAULT_LABEL);
    setSearch("");
  };

  const startAdd = () => {
    setIsAdding(true);
    resetDraft();
  };

  const cancelAdd = () => {
    setIsAdding(false);
    resetDraft();
  };

  // --- Live toggle: alleen voor current GPS ophalen ---
  const handleToggleLive = () => {
    const next = !preferences.useCurrentLocation;

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

    // Zet UI flag aan
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

        setPreferences((prev) => ({
          ...prev,
          currentCoords: coords,
          useCurrentLocation: true,
        }));

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

          setDetectedCurrentName(matched);

          setPreferences((prev) => {
            const existing = prev.savedLocations.find(
              (l) => l.id === "current"
            );

            const nextCurrent: SavedLocation = {
              id: "current",
              name: matched,
              radius: existing?.radius ?? 15,
              label: existing?.label ?? DEFAULT_LABEL,
              source: "current",
            };

            const nextSaved = existing
              ? prev.savedLocations.map((l) =>
                  l.id === "current" ? nextCurrent : l
                )
              : [...prev.savedLocations, nextCurrent];

            return {
              ...prev,
              savedLocations: nextSaved,
              useCurrentLocation: true,
              currentCoords: coords,
            };
          });

          // Zet current als “draft” default als user daarna wil opslaan
          setDraftKind("current");
          setDraftName(matched);
          toast("Live locatie actief", {
            description: `Huidige plaats: ${matched}`,
          });
        } catch {
          toast("Live locatie actief", {
            description: "GPS is aan, plaatsnaam ophalen lukte niet.",
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

  // --- Save the draft location into savedLocations ---
  const saveDraftLocation = () => {
    const name = draftName.trim();
    if (!name) {
      toast("Kies een locatie", {
        description: "Selecteer of typ een plaatsnaam.",
      });
      return;
    }

    if (draftKind === "current") {
      const nextCurrent: SavedLocation = {
        id: "current",
        name,
        radius: draftRadius,
        label: draftLabel,
        source: "current",
      };

      setPreferences((prev) => {
        const exists = (prev.savedLocations ?? []).some(
          (l) => l.id === "current"
        );
        const nextSaved = exists
          ? prev.savedLocations.map((l) =>
              l.id === "current" ? nextCurrent : l
            )
          : [...prev.savedLocations, nextCurrent];

        return { ...prev, savedLocations: nextSaved, useCurrentLocation: true };
      });

      toast("Locatie opgeslagen", { description: `Huidige locatie: ${name}` });
      setIsAdding(false);
      return;
    }

    // region
    const id = normalize(name).replace(/\s+/g, "-");
    const exists = (preferences.savedLocations ?? []).some(
      (l) => l.source === "region" && l.id === id
    );
    if (exists) {
      toast("Bestaat al", { description: "Deze regio staat al in je lijst." });
      setIsAdding(false);
      return;
    }

    const regionLoc: SavedLocation = {
      id,
      name,
      radius: draftRadius,
      label: draftLabel,
      source: "region",
    };

    setPreferences((prev) => ({
      ...prev,
      savedLocations: [...(prev.savedLocations ?? []), regionLoc],
    }));

    toast("Locatie opgeslagen", { description: name });
    setIsAdding(false);
  };

  // --- UI: current info for display ---
  const currentSaved = useMemo(
    () => (preferences.savedLocations ?? []).find((l) => l.id === "current"),
    [preferences.savedLocations]
  );

  return (
    <div className="space-y-6">
      {/* Live location toggle */}
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
            onCheckedChange={handleToggleLive}
          />
        </div>

        <p className="text-xs text-muted-foreground mt-2">
          Als dit aan staat, kun je je huidige plaats als locatie opslaan.
        </p>

        {preferences.useCurrentLocation && currentSaved?.name ? (
          <p className="text-xs text-muted-foreground mt-2">
            Huidige plaats:{" "}
            <span className="text-foreground">{currentSaved.name}</span>
          </p>
        ) : null}
      </div>

      {/* Add flow */}
      {!isAdding ? (
        <Button
          className="w-full"
          variant="outline"
          type="button"
          onClick={startAdd}
        >
          <Plus className="w-4 h-4 mr-2" />
          Nog een locatie instellen
        </Button>
      ) : (
        <div className="bg-card rounded-lg p-4 border border-border space-y-4">
          <div className="flex items-center justify-between">
            <div className="font-medium text-foreground">Locatie instellen</div>
            <button
              type="button"
              onClick={cancelAdd}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Annuleer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Choose kind */}
          <div className="flex gap-2 flex-wrap">
            <Button
              type="button"
              variant={draftKind === "region" ? "pillActive" : "pill"}
              size="pill"
              onClick={() => setDraftKind("region")}
            >
              Regio
            </Button>
            <Button
              type="button"
              variant={draftKind === "current" ? "pillActive" : "pill"}
              size="pill"
              onClick={() => setDraftKind("current")}
              disabled={!preferences.useCurrentLocation}
            >
              Huidige locatie
            </Button>
          </div>

          {/* Name input / picker */}
          {draftKind === "region" ? (
            <div className="space-y-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Zoek regio…"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />

              <div className="bg-background border border-border rounded-lg p-2 max-h-56 overflow-y-auto">
                {filteredAvailable.slice(0, 40).map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setDraftName(loc)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      draftName === loc ? "bg-secondary" : "hover:bg-secondary"
                    }`}
                  >
                    {loc}
                  </button>
                ))}

                {filteredAvailable.length === 0 ? (
                  <div className="text-sm text-muted-foreground px-3 py-2">
                    Geen resultaten.
                  </div>
                ) : null}
              </div>

              {draftName ? (
                <div className="text-xs text-muted-foreground">
                  Geselecteerd:{" "}
                  <span className="text-foreground">{draftName}</span>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                Huidige plaats (via GPS):
              </div>
              <div className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground">
                {detectedCurrentName ||
                  "Nog geen plaatsnaam (zet GPS aan en wacht even)."}
              </div>
            </div>
          )}

          {/* Label */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Label</label>
            <select
              value={draftLabel}
              onChange={(e) => setDraftLabel(e.target.value as LocationLabel)}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
            >
              <option value="Woonplaats">Woonplaats</option>
              <option value="Werk">Werk</option>
              <option value="Anders">Anders</option>
            </select>
          </div>

          {/* Radius */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Radius</label>
            <div className="flex gap-2 flex-wrap">
              {radiusOptions.map((r) => (
                <Button
                  key={r}
                  type="button"
                  variant={draftRadius === r ? "pillActive" : "pill"}
                  size="pill"
                  onClick={() => setDraftRadius(r)}
                >
                  {r} km
                </Button>
              ))}
            </div>
          </div>

          <Button className="w-full" type="button" onClick={saveDraftLocation}>
            Locatie opslaan
          </Button>
        </div>
      )}

      {/* Saved locations: edit radius + label per location */}
      <div className="space-y-3">
        <label className="text-sm text-muted-foreground">
          Opgeslagen locaties:
        </label>

        <div className="space-y-3">
          {(preferences.savedLocations ?? []).length === 0 ? (
            <div className="text-sm text-muted-foreground">
              Nog geen locaties opgeslagen.
            </div>
          ) : null}

          {(preferences.savedLocations ?? []).map((loc) => (
            <div
              key={loc.id}
              className="bg-card border border-border rounded-lg p-3 space-y-2"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <div className="font-medium text-foreground truncate">
                      {loc.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ({loc.source})
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground mt-1">
                    {loc.label} • {loc.radius} km
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => removeLocation(loc.id)}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label={`Verwijder ${loc.name}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Label edit */}
              <div className="flex gap-2 items-center">
                <select
                  value={loc.label}
                  onChange={(e) =>
                    updateLocationLabel(loc.id, e.target.value as LocationLabel)
                  }
                  className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
                  aria-label={`Label voor ${loc.name}`}
                >
                  <option value="Woonplaats">Woonplaats</option>
                  <option value="Werk">Werk</option>
                  <option value="Anders">Anders</option>
                </select>
              </div>

              {/* Radius edit (per location!) */}
              <div className="flex gap-2 flex-wrap">
                {radiusOptions.map((r) => (
                  <Button
                    key={r}
                    type="button"
                    variant={loc.radius === r ? "pillActive" : "pill"}
                    size="pill"
                    onClick={() => updateLocationRadius(loc.id, r)}
                  >
                    {r} km
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continue */}
      {onContinue ? (
        <div className="pt-2 pb-24">
          <Button className="w-full" size="lg" onClick={onContinue}>
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
