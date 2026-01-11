"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SwitchSize = "sm" | "md" | "lg";

type SwitchProps = {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  size?: SwitchSize;
};

const sizeStyles: Record<
  SwitchSize,
  {
    track: string;
    thumb: string;
    // translate classes voor aan/uit
    on: string;
    off: string;
  }
> = {
  sm: {
    track: "h-5 w-9",
    thumb: "h-4 w-4",
    off: "translate-x-0.5",
    on: "translate-x-[18px]", // 9w (36px) - thumb (16px) - 2px padding ≈ 18px
  },
  md: {
    track: "h-6 w-11",
    thumb: "h-5 w-5",
    off: "translate-x-0.5",
    on: "translate-x-[22px]", // 44px - 20px - 2px ≈ 22px
  },
  lg: {
    track: "h-7 w-14",
    thumb: "h-6 w-6",
    off: "translate-x-0.5",
    on: "translate-x-[30px]", // 56px - 24px - 2px ≈ 30px
  },
};

export function Switch({
  checked = false,
  onCheckedChange,
  disabled = false,
  className,
  size = "md",
}: SwitchProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const s = sizeStyles[size];

  // ✅ voorkomt SSR/CSR mismatch als checked uit localStorage komt
  if (!mounted) {
    return (
      <span
        aria-hidden
        className={cn(
          "relative inline-flex items-center rounded-full bg-secondary opacity-60",
          s.track,
          className
        )}
      />
    );
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => {
        if (disabled) return;
        onCheckedChange?.(!checked);
      }}
      className={cn(
        "relative inline-flex items-center rounded-full transition-colors",
        // belangrijk: voorkom dat thumb buiten track kan “vallen”
        "overflow-hidden",
        s.track,
        checked ? "bg-primary" : "bg-secondary",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <span
        className={cn(
          "inline-block rounded-full bg-background transition-transform will-change-transform",
          s.thumb,
          checked ? s.on : s.off
        )}
      />
    </button>
  );
}
