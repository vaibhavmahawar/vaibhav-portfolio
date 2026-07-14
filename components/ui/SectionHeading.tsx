import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  kicker,
  title,
  align = "left",
  className,
}: {
  kicker: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      <div
        className={cn(
          "font-mono text-label-caps uppercase tracking-[0.3em] text-primary-fixed-dim",
          align === "center" && "flex items-center justify-center gap-3"
        )}
      >
        {align === "center" && <span className="h-px w-8 bg-primary-fixed-dim/50" />}
        {kicker}
        {align === "center" && <span className="h-px w-8 bg-primary-fixed-dim/50" />}
      </div>
      <h2 className="mt-3 font-headline text-headline-lg text-on-surface">{title}</h2>
    </Reveal>
  );
}
