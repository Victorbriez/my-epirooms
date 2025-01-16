"use client";

import { useState } from "react";
import { FloorSelector } from "@/components/floor-selector";
import { InfoPanel } from "@/components/info-panel";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  const [currentFloor, setCurrentFloor] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 h-screen">
        <div className="hidden lg:block lg:col-span-8 bg-muted rounded-lg shadow-sm">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            Zone de la carte
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6 min-h-0">
          <FloorSelector
            currentFloor={currentFloor}
            onFloorChange={setCurrentFloor}
          />
          <Separator />
          <InfoPanel currentFloor={currentFloor} />
        </div>
      </div>
    </div>
  );
}
