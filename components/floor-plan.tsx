"use client";

import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";
import FloorPlanSVG0 from "@/components/floor-plan-svg-0";
import FloorPlanSVG1 from "@/components/floor-plan-svg-1";
import FloorPlanSVG2 from "@/components/floor-plan-svg-2";

interface FloorPlanProps {
  currentFloor: number;
  isLoading: boolean;
}

export function FloorPlan({ currentFloor, isLoading }: FloorPlanProps) {
  const { theme } = useTheme();
  const lineColor = theme === "dark" ? "#ffffff" : "#1a1a1a";

  return (
    <div className="w-full h-full flex items-center justify-center bg-background">
      {isLoading ? (
        <Skeleton className="w-full h-full" />
      ) : (
        <>
          {currentFloor === 0 && <FloorPlanSVG0 Color={lineColor} />}
          {currentFloor === 1 && <FloorPlanSVG1 Color={lineColor} />}
          {currentFloor === 2 && <FloorPlanSVG2 Color={lineColor} />}
        </>
      )}
    </div>
  );
}
