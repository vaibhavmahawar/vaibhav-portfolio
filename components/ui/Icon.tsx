import {
  BrainCircuit,
  ScanEye,
  Bot,
  Server,
  Radar,
  Sparkles,
  Lightbulb,
  Code2,
  Database,
  Cloud,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  BrainCircuit,
  ScanEye,
  Bot,
  Server,
  Radar,
  Sparkles,
  Lightbulb,
  Code2,
  Database,
  Cloud,
  Workflow,
};

export default function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
