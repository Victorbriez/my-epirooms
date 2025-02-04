import { Badge } from "@/components/ui/badge";
import type { Activity } from "@/models/Activity";
import { getBadgeVariant, getStatusText } from "@/lib/utils";

interface StatusBadgeProps {
  availability: {
    currentActivity?: Activity;
    nextActivity?: Activity[];
  };
  currentTime: Date;
}

export function StatusBadge({ availability, currentTime }: StatusBadgeProps) {
  const variant = getBadgeVariant(availability, currentTime);
  const text = getStatusText(availability, currentTime);

  return <Badge variant={variant}>{text}</Badge>;
}
