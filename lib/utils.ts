export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Full literal class strings only — Tailwind's JIT scanner cannot see
 * interpolated/partial class names, so every utility here is complete.
 */
export const accentMap = {
  cyan: {
    text: "text-primary-fixed-dim",
    borderL: "border-l-primary-fixed-dim",
    iconWrap: "border-primary-fixed-dim/30 bg-primary-fixed-dim/10",
    hoverShadow: "hover:shadow-[0_0_18px_rgba(0,220,229,0.25)]",
  },
  emerald: {
    text: "text-tertiary-fixed-dim",
    borderL: "border-l-tertiary-fixed-dim",
    iconWrap: "border-tertiary-fixed-dim/30 bg-tertiary-fixed-dim/10",
    hoverShadow: "hover:shadow-[0_0_18px_rgba(102,221,139,0.22)]",
  },
  blue: {
    text: "text-secondary-fixed-dim",
    borderL: "border-l-secondary-fixed-dim",
    iconWrap: "border-secondary-fixed-dim/30 bg-secondary-fixed-dim/10",
    hoverShadow: "hover:shadow-[0_0_18px_rgba(184,195,255,0.22)]",
  },
} as const;

export type Accent = keyof typeof accentMap;
