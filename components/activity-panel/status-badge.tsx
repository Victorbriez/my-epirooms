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
        "px-2 py-1 rounded-full text-xs font-semibold",
        variant === "green" && "bg-green-200 text-green-800",
        variant === "yellow" && "bg-yellow-200 text-yellow-800",
        variant === "red" && "bg-red-200 text-red-800"
      )}
    >
      {variant === "green" && "Disponible"}
      {variant === "yellow" && "Bientôt occupé"}
      {variant === "red" && "Occupé"}
    </span>
  );
}
