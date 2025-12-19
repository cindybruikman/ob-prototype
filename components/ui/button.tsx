import * as React from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "default"
  | "outline"
  | "ghost"
  | "secondary"
  | "pill"
  | "pillActive";

type Size = "default" | "sm" | "lg" | "icon" | "pill";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const variantClasses: Record<Variant, string> = {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    secondary: "bg-secondary text-foreground hover:opacity-90",
    outline:
      "border border-border bg-transparent text-foreground hover:bg-secondary/40",
    ghost: "bg-transparent text-foreground hover:bg-secondary/40",
    pill: "rounded-full border border-border bg-card text-foreground hover:bg-secondary/40",
    pillActive:
      "rounded-full bg-primary text-primary-foreground hover:opacity-90",
  };

  const sizeClasses: Record<Size, string> = {
    default: "h-10 px-4 py-2 rounded-md text-sm",
    sm: "h-9 px-3 rounded-md text-sm",
    lg: "h-11 px-6 rounded-md text-sm",
    icon: "h-10 w-10 rounded-md p-0",
    pill: "h-9 px-4 py-2 text-sm",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
