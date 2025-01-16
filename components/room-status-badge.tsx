import { cn } from "@/lib/utils";
import { RoomStatus } from "@/utils/roomAvailability";

const statusConfig: Record<RoomStatus, { label: string; className: string }> = {
  available: {
    label: "Libre",
    className: "bg-green-100 text-green-800",
  },
  occupied: {
    label: "Occupée",
    className: "bg-red-100 text-red-800",
  },
  "ending-soon": {
    label: "Se libère bientôt",
    className: "bg-yellow-100 text-yellow-800",
  },
  "starting-soon": {
    label: "Occupée bientôt",
    className: "bg-orange-100 text-orange-800",
  },
};

export function RoomStatusBadge({ status }: { status: RoomStatus }) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        config.className
      )}
    >
      {config.label}
    </span>
  );
}
