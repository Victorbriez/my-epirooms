"use client";

import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";
import FloorPlanSVG0 from "@/components/svg/floor-plan-svg-0";
import FloorPlanSVG1 from "@/components/svg/floor-plan-svg-1";
import FloorPlanSVG2 from "@/components/svg/floor-plan-svg-2";
import { Activity } from "@/models/Activity";
import { LocationInterface } from "@/types/LocationInterface";

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
}

export function FloorPlan({
  currentFloor,
  isLoading,
  error,
  activities,
  onRoomClick,
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

    if (room.availability?.currentActivity) {
      return "rgb(239, 68, 68)";
    }
    if (room.availability?.nextActivity) {
      return "rgb(234, 179, 8)";
    }
    return "rgb(34, 197, 94)";
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
