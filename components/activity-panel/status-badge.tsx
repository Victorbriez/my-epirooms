import { cn } from "@/lib/utils";
import { getBadgeVariant } from "@/lib/utils";
import type { Activity } from "@/models/Activity";

interface StatusBadgeProps {
  availability: {
    currentActivity?: Activity;
    nextActivity?: Activity[];
  };
  currentTime: Date;
}

export function StatusBadge({ availability, currentTime }: StatusBadgeProps) {
  const variant = getBadgeVariant(availability, currentTime);
  return (
    <span
      className={cn(
        "px-2 py-1 rounded-full text-xs font-medium",
        variant === "green" && "bg-green-100 text-green-800",
        variant === "yellow" && "bg-yellow-100 text-yellow-800",
        variant === "red" && "bg-red-100 text-red-800"
      )}
    >
      {variant === "green" && "Disponible"}
      {variant === "yellow" && "Bientôt occupé"}
      {variant === "red" && "Occupé"}
    </span>
  );
}
