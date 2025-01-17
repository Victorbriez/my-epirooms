"use client";

import { useState, useMemo } from "react";
import { FloorSelector } from "@/components/floor-selector";
import { ActivityPanel } from "@/components/activity-panel";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { usePlanning } from "@/hooks/usePlanning";
import { LocationInterface } from "@/types/LocationInterface";
import Location from "@/location.json";
import { Header } from "@/components/Header";

import { floorPlans } from "@/utils/floor-plans";
import { getRoomEvents } from "@/utils/room-events";

export default function Page() {
  const [currentFloor, setCurrentFloor] = useState(0);

  const { eventList, isLoading, error, refresh } = usePlanning();
  const roomList = useMemo(() => Location as LocationInterface[], []);

  return (
    <div className="min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 h-screen">
        <div className="lg:col-span-4 flex flex-col gap-6 min-h-0">
          <Header />
          <Separator className="w-full" />
          <ActivityPanel
            currentFloor={currentFloor}
            activities={getRoomEvents(roomList, eventList)}
            isLoading={isLoading}
            error={error}
          />
          <FloorSelector
            currentFloor={currentFloor}
            onFloorChange={setCurrentFloor}
            refresh={refresh}
          />
        </div>
        <div className="hidden lg:block lg:col-span-8 bg-background rounded-lg shadow-sm overflow-hidden relative">
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
