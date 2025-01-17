"use client";

import { useState, useMemo } from "react";
import { FloorSelector } from "@/components/floor-selector";
import { ActivityPanel } from "@/components/activity-panel";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Page() {
  const [currentFloor, setCurrentFloor] = useState(0);

  const floorPlans = useMemo(
    () => [
      { src: "/Z0-Floor.svg", alt: "Plan du rez-de-chaussée" },
      { src: "/Z1-Floor.svg", alt: "Plan du premier étage" },
      { src: "/Z2-Floor.svg", alt: "Plan du deuxième étage" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 h-screen">
        <div className="lg:col-span-4 flex flex-col gap-6 min-h-0">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start">
              <div className="text-2xl font-bold text-primary">
                {new Date().toLocaleTimeString("fr-FR")}
              </div>
              <div className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString("fr-FR")}
              </div>
            </div>
            <h1 className="text-3xl font-semibold">My_EpiRooms</h1>
          </div>
          <Separator className="w-full" />
          <ActivityPanel currentFloor={currentFloor} />
          <FloorSelector
            currentFloor={currentFloor}
            onFloorChange={setCurrentFloor}
          />
        </div>
        <div className="hidden lg:block lg:col-span-8 bg-background rounded-lg shadow-sm overflow-hidden relative">
          <Separator
            className="absolute left-0 top-0 h-full"
            orientation="vertical"
          />
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={floorPlans[currentFloor].src || "/placeholder.svg"}
              alt={floorPlans[currentFloor].alt}
              width={800}
              height={600}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
