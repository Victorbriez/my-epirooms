"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { FloorSelector } from "@/components/floor-selector";
import { ActivityPanel } from "@/components/activity-panel";
import { Separator } from "@/components/ui/separator";
import { usePlanning } from "@/hooks/usePlanning";
import type { LocationInterface } from "@/types/LocationInterface";
import Location from "@/location.json";
import { Header } from "@/components/Header";
import { FloorPlan } from "@/components/floor-plan";
import type { Activity } from "@/models/Activity";

export default function Page() {
  const [currentFloor, setCurrentFloor] = useState(1);
  const { eventList, isLoading, error, refresh } = usePlanning();
  const roomList = useMemo(() => Location as LocationInterface[], []);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRoomClick = useCallback((roomKey: string) => {
    setSelectedRoom((prevSelected) =>
      prevSelected === roomKey ? null : roomKey
    );
  }, []);

  const currentFloorRooms = useMemo(
    () => roomList.filter((room) => room.floor === currentFloor.toString()),
    [roomList, currentFloor]
  );

  const floorActivities = useMemo(
    () => getFloorActivity(currentFloorRooms, eventList, currentTime),
    [currentFloorRooms, eventList, currentTime]
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 h-screen">
        <div className="lg:col-span-4 flex flex-col gap-6 min-h-0">
          <Header currentTime={currentTime} />
          <Separator className="w-full" />
          <ActivityPanel
            activities={floorActivities}
            isLoading={isLoading}
            error={error}
            refresh={refresh}
            selectedRoom={selectedRoom}
            onRoomClick={handleRoomClick}
            currentTime={currentTime}
          />
          <FloorSelector
            currentFloor={currentFloor}
            onFloorChange={setCurrentFloor}
            refresh={refresh}
            isLoading={isLoading}
          />
        </div>
        <div className="hidden lg:flex items-center">
          <Separator orientation="vertical" className="h-full" />
        </div>
        <div className="hidden lg:block lg:col-span-7 bg-background rounded-lg shadow-sm overflow-hidden relative">
          <FloorPlan
            currentFloor={currentFloor}
            isLoading={isLoading}
            error={error}
            activities={floorActivities}
            onRoomClick={handleRoomClick}
            currentTime={currentTime}
          />
        </div>
      </div>
    </div>
  );
}

function getFloorActivity(
  roomList: LocationInterface[],
  activities: Activity[],
  currentTime: Date
): (LocationInterface & {
  availability: { currentActivity?: Activity; nextActivity?: Activity[] };
})[] {
  return roomList.map((room) => {
    const events = activities.filter(
      (activity) => activity.roomCode === room.key
    );
    const currentActivity = events.find(
      (e) => currentTime >= e.start && currentTime < e.end
    );
    const nextActivity = events
      .filter((e) => e.start > currentTime)
      .sort((a, b) => a.start.getTime() - b.start.getTime());
    return {
      ...room,
      availability: {
        currentActivity,
        nextActivity,
      },
    };
  });
}
