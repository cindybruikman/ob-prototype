"use client";

import { Button } from "@/components/ui/button";

type StickyFooterCTAProps = {
  /** welke “dot” is actief (1-based) */
  step: number;
  /** totaal aantal dots */
  totalSteps: number;

  /** knop */
  onContinue: () => void;
  buttonText?: string;

  /** optioneel tekstje onder knop */
  helperText?: string;

  /** zelfde max-width als home/voor-mij */
  containerClassName?: string;
};

export function StickyFooterCTA({
  step,
  totalSteps,
  onContinue,
  buttonText = "Ga verder",
  helperText = "Je kunt deze instellingen later altijd aanpassen.",
  containerClassName = "mx-auto w-full max-w-[808px] px-4",
}: StickyFooterCTAProps) {
  const safeTotal = Math.max(1, totalSteps);
  const safeStep = Math.min(Math.max(1, step), safeTotal);

  return (
    <div className="fixed bottom-[20px] left-0 right-0 z-40">
      <div className={containerClassName}>
        <div className="rounded-2xl border border-white/10 bg-card/95 backdrop-blur px-4 py-4 shadow-lg">
          {/* Dots */}
          <div className="flex justify-center gap-2 mb-3">
            {Array.from({ length: safeTotal }).map((_, i) => {
              const isActive = i + 1 === safeStep;
              return (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    isActive ? "bg-primary" : "bg-white/20"
                  }`}
                />
              );
            })}
          </div>

          {/* CTA */}
          <Button className="w-full" size="lg" onClick={onContinue}>
            {buttonText}
          </Button>

          {helperText && (
            <p className="text-xs text-muted-foreground text-center mt-2">
              {helperText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
