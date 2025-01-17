"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RoomStatusBadge } from "./room-status-badge";
import locations from "@/location.json";
import { usePlanning } from "@/hooks/usePlanning";
import { useMemo } from "react";
import { getRoomAvailability } from "@/utils/roomAvailability";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface ActivityPanelProps {
  currentFloor: number;
}

export function ActivityPanel({ currentFloor }: ActivityPanelProps) {
  const { activities, loading } = usePlanning();

  const filteredRooms = useMemo(() => {
    return locations.filter(
      (location) => location.floor === currentFloor.toString()
    );
  }, [currentFloor]);

  const roomsWithAvailability = useMemo(() => {
    const now = new Date();
    return filteredRooms.map((room) => ({
      ...room,
      availability: getRoomAvailability(room, activities, now),
    }));
  }, [filteredRooms, activities]);

  if (loading) {
    return (
      <div className="h-full">
        <div className="flex items-center justify-center h-full">
          <p>Chargement des données...</p>
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
                <RoomStatusBadge status={room.availability.status} />
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
                    {format(room.availability.currentActivity.end, "HH:mm", {
                      locale: fr,
                    })}
                  </p>
                </div>
              )}

              {room.availability.nextActivity && (
                <div className="text-sm">
                  <p className="font-medium">Prochaine activité:</p>
                  <p>{room.availability.nextActivity.title}</p>
                  <p className="text-muted-foreground">
                    De{" "}
                    {format(room.availability.nextActivity.start, "HH:mm", {
                      locale: fr,
                    })}{" "}
                    à{" "}
                    {format(room.availability.nextActivity.end, "HH:mm", {
                      locale: fr,
                    })}
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
