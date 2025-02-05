"use client";

import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";
import FloorPlanSVG0 from "@/components/svg/floor-plan-svg-0";
import FloorPlanSVG1 from "@/components/svg/floor-plan-svg-1";
import FloorPlanSVG2 from "@/components/svg/floor-plan-svg-2";
import type { Activity } from "@/models/Activity";
import type { LocationInterface } from "@/types/LocationInterface";
import { getBadgeVariant } from "@/lib/utils";

interface FloorPlanProps {
  currentFloor: number;
  isLoading: boolean;
  error: Error | null;
  activities: (LocationInterface & {
    availability: {
      currentActivity?: Activity;
      nextActivity?: Activity[];
    };
  })[];
  onRoomClick?: (roomKey: string) => void;
  currentTime: Date;
}

export function FloorPlan({
  currentFloor,
  isLoading,
  error,
  activities,
  onRoomClick,
  currentTime,
}: FloorPlanProps) {
  const { theme } = useTheme();
  const lineColor = theme === "dark" ? "#ffffff" : "#1a1a1a";

  if (error || isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-background">
        <Skeleton className="h-full w-full" />
      </div>
    );
  }

  const getRoomColor = (roomKey: string) => {
    const room = activities.find((room) => room.key === roomKey);
    if (!room) return "transparent";

    const variant = getBadgeVariant(room.availability, currentTime);

    switch (variant) {
      case "red":
        return "rgb(254, 202, 202)";
      case "yellow":
        return "rgb(254, 240, 138)";
      case "green":
        return "rgb(187, 247, 208)";
      default:
        return "transparent";
    }
  };

  const svgProps = {
    Color: lineColor,
    getRoomColor,
    onRoomClick,
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-background">
      {currentFloor === 0 && <FloorPlanSVG0 {...svgProps} />}
      {currentFloor === 1 && <FloorPlanSVG1 {...svgProps} />}
      {currentFloor === 2 && <FloorPlanSVG2 {...svgProps} />}
    </div>
  );
}
