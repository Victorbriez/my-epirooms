"use client";

import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";
import FloorPlanSVG0 from "@/components/floor-plan-svg-0";
import FloorPlanSVG1 from "@/components/floor-plan-svg-1";
import FloorPlanSVG2 from "@/components/floor-plan-svg-2";

interface FloorPlanProps {
  currentFloor: number;
  isLoading: boolean;
  error: Error | null;
}

export function FloorPlan({ currentFloor, isLoading, error }: FloorPlanProps) {
  const { theme } = useTheme();
  const lineColor = theme === "dark" ? "#ffffff" : "#1a1a1a";

  if (isLoading || error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-background">
        <Skeleton className="h-full w-full" />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-background">
      {currentFloor === 0 && <FloorPlanSVG0 Color={lineColor} />}
      {currentFloor === 1 && <FloorPlanSVG1 Color={lineColor} />}
      {currentFloor === 2 && <FloorPlanSVG2 Color={lineColor} />}
    </div>
  );
}
