"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { RefreshCcw } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface FloorSelectorProps {
  currentFloor: number;
  onFloorChange: (floor: number) => void;
  refresh: () => void;
  isLoading: boolean;
}

export function FloorSelector({
  currentFloor,
  onFloorChange,
  refresh,
  isLoading,
}: FloorSelectorProps) {
  const floors = [
    { id: 0, label: "RDC" },
    { id: 1, label: "1er" },
    { id: 2, label: "2ème" },
  ];

  return (
    <Card className="p-2 sm:p-4 rounded-lg">
      <div className="flex flex-wrap gap-4 sm:gap-4">
        <div className="flex flex-grow gap-1 sm:gap-2">
          {floors.map((floor) => (
            <Button
              key={floor.id}
              variant={currentFloor === floor.id ? "default" : "outline"}
              className={cn(
                "flex-1 px-2 sm:px-4",
                currentFloor === floor.id &&
                  "bg-foreground text-primary-foreground"
              )}
              onClick={() => onFloorChange(floor.id)}
              disabled={isLoading}
            >
              {floor.label}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Separator orientation="vertical" className="hidden sm:block" />
          <ModeToggle />
          <Button
            variant="outline"
            onClick={refresh}
            size="icon"
            disabled={isLoading}
          >
            <RefreshCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
