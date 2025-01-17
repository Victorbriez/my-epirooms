"use client";

import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Activity } from "@/models/Activity";
import { LocationInterface } from "@/types/LocationInterface";

interface ActivityPanelProps {
  currentFloor: number;
  activities: Activity[];
  isLoading: boolean;
  error: Error | null;
}

export function ActivityPanel({
  currentFloor,
  activities,
  isLoading,
  error,
}: ActivityPanelProps) {
  const roomsWithAvailability = useMemo(() => {
    return roomList
      .filter((room) => room.floor === currentFloor.toString())
      .map((room) => {
        const events = getRoomEvents(room);
        const now = new Date();
        const currentActivity = events.find(
          (e) => now >= e.start && now < e.end
        );
        const nextActivity = events.find((e) => now < e.start);
        return {
          ...room,
          availability: {
            currentActivity,
            nextActivity,
          },
        };
      });
  }, [currentFloor, roomList, getRoomEvents]);

  if (roomsWithAvailability.length === 0) {
    return (
      <div className="h-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-muted-foreground">
            Aucune salle disponible à cet étage.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ScrollArea className="h-full rounded-lg">
      <div className="space-y-4 px-4">
        {roomsWithAvailability.map((room) => (
          <Card key={room.key}>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium">
                  {room.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 px-4 pb-4 space-y-2">
              <p className="text-muted-foreground">Étage {room.floor}</p>

              {room.availability.currentActivity && (
                <div className="text-sm">
                  <p className="font-medium">Activité en cours:</p>
                  <p>{room.availability.currentActivity.title}</p>
                  <p className="text-muted-foreground">
                    Jusqu&apos;à{" "}
                    {room.availability.currentActivity.end.toLocaleTimeString(
                      "fr-FR",
                      { hour: "2-digit", minute: "2-digit" }
                    )}
                  </p>
                </div>
              )}

              {room.availability.nextActivity && (
                <div className="text-sm">
                  <p className="font-medium">Prochaine activité:</p>
                  <p>{room.availability.nextActivity.title}</p>
                  <p className="text-muted-foreground">
                    De{" "}
                    {room.availability.nextActivity.start.toLocaleTimeString(
                      "fr-FR",
                      { hour: "2-digit", minute: "2-digit" }
                    )}{" "}
                    à{" "}
                    {room.availability.nextActivity.end.toLocaleTimeString(
                      "fr-FR",
                      { hour: "2-digit", minute: "2-digit" }
                    )}
                  </p>
                </div>
              )}

              {!room.availability.currentActivity &&
                !room.availability.nextActivity && (
                  <p className="text-sm text-green-600 font-medium">
                    Libre pour le reste de la journée
                  </p>
                )}
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}
