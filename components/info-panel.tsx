"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import locations from "@/location.json";
import { useMemo } from "react";

interface InfoPanelProps {
  currentFloor: number;
}

export function InfoPanel({ currentFloor }: InfoPanelProps) {
  const filteredRooms = useMemo(() => {
    return locations.filter(
      (location) => location.floor === currentFloor.toString()
    );
  }, [currentFloor]);

  return (
    <ScrollArea className="h-full rounded-lg">
      <div className="space-y-4 p-4">
        <Card className="mb-4">
          <CardHeader className="p-4">
            <CardTitle className="text-lg font-medium">
              Salles disponibles
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0 px-4 pb-4">
            <p className="text-muted-foreground">
              {filteredRooms.length} salles
            </p>
          </CardContent>
        </Card>

        {filteredRooms.map((room) => (
          <Card key={room.key}>
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-medium">
                {room.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 px-4 pb-4">
              <p className="text-muted-foreground">Étage {room.floor}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}
