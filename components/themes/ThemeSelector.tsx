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

export function ThemeSelector({
  selected,
  onToggle,
}: {
  selected: ThemeKey[];
  onToggle: (t: ThemeKey) => void;
}) {
  return (
    <div className="space-y-3">
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
