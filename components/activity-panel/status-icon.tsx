import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { getBadgeVariant } from "@/lib/utils";
import type { Activity } from "@/models/Activity";

interface StatusIconProps {
  availability: {
    currentActivity?: Activity;
    nextActivity?: Activity[];
  };
  currentTime: Date;
}

export function StatusIcon({ availability, currentTime }: StatusIconProps) {
  const variant = getBadgeVariant(availability, currentTime);
  return (
    <>
      {variant === "green" && (
        <CheckCircle className="w-4 h-4 text-green-500" />
      )}
      {variant === "yellow" && (
        <AlertCircle className="w-4 h-4 text-yellow-500" />
      )}
      {variant === "red" && <XCircle className="w-4 h-4 text-red-500" />}
    </>
  );
}
