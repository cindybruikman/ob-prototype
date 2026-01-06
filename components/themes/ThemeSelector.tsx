"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ThemeKey } from "@/lib/preferences";

const THEMES: { key: ThemeKey; emoji: string }[] = [
  { key: "Nieuws & maatschappij", emoji: "🗞️" },
  { key: "Sport", emoji: "⚽" },
  { key: "Brabantse cultuur", emoji: "🎭" },
  { key: "Natuur & milieu", emoji: "🌿" },
  { key: "Bedrijven & innovatie", emoji: "💡" },
  { key: "Vrije tijd & entertainment", emoji: "🎉" },
  { key: "Verkeer", emoji: "🚗" },
  { key: "112", emoji: "🚨" },
];

const ALL_THEME_KEYS = THEMES.map((t) => t.key);

export function ThemeSelector({
  selected,
  onToggle,
  onSetSelected,
}: {
  selected: ThemeKey[];
  onToggle: (t: ThemeKey) => void;
  onSetSelected: (next: ThemeKey[]) => void;
}) {
  const allSelected = selected.length === ALL_THEME_KEYS.length;
  const noneSelected = selected.length === 0;

  const handleToggleAll = () => {
    if (allSelected) onSetSelected([]); // deselect all
    else onSetSelected(ALL_THEME_KEYS); // select all
  };

  return (
    <div className="space-y-3">
      {/* ✅ Select all / Deselect all */}
      <button
        type="button"
        onClick={handleToggleAll}
        className={cn(
          "w-full rounded-xl px-4 py-3 border text-left transition",
          allSelected
            ? "bg-card border-white/10"
            : "bg-transparent border-white/20 hover:bg-white/5"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg">{allSelected ? "✅" : "🧩"}</span>
            <span className="font-medium text-white">
              {allSelected
                ? "Deselecteer alle thema’s"
                : "Selecteer alle thema’s"}
            </span>
          </div>

          {allSelected ? (
            <span className="text-primary">
              <Check className="h-5 w-5" />
            </span>
          ) : (
            <span className="h-5 w-5" />
          )}
        </div>

        {!noneSelected && !allSelected ? (
          <div className="mt-1 text-xs text-white/70">
            {selected.length} van {ALL_THEME_KEYS.length} geselecteerd
          </div>
        ) : null}
      </button>

      {/* Themalijst */}
      {THEMES.map((t) => {
        const active = selected.includes(t.key);

        return (
          <button
            key={t.key}
            type="button"
            onClick={() => onToggle(t.key)}
            className={cn(
              "w-full rounded-xl px-4 py-3 border text-left transition",
              active
                ? "bg-card border-white/10"
                : "bg-transparent border-white/20 hover:bg-white/5"
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg">{t.emoji}</span>
                <span className="font-medium text-white">{t.key}</span>
              </div>

              {active ? (
                <span className="text-primary">
                  <Check className="h-5 w-5" />
                </span>
              ) : (
                <span className="h-5 w-5" />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
