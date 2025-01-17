"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { RefreshCcw } from "lucide-react";

interface FloorSelectorProps {
  currentFloor: number;
  onFloorChange: (floor: number) => void;
  refresh: () => void;
}

export function FloorSelector({
  currentFloor,
  onFloorChange,
  refresh,
}: FloorSelectorProps) {
  const floors = [
    { id: 0, label: "RDC" },
    { id: 1, label: "1er" },
    { id: 2, label: "2ème" },
  ];

  return (
    <Card className="flex gap-4 p-4 rounded-lg">
      {floors.map((floor) => (
        <Button
          key={floor.id}
          variant={currentFloor === floor.id ? "default" : "outline"}
          className={cn(
            "flex-1",
            currentFloor === floor.id && "bg-primary text-primary-foreground"
          )}
          onClick={() => onFloorChange(floor.id)}
        >
          {floor.label}
        </Button>
      ))}
      <ModeToggle />
      <Button variant="outline" size="sm" onClick={refresh}>
        <RefreshCcw className="h-4 w-4 mr-2" />
        Retry
      </Button>
    </Card>
  );
}
