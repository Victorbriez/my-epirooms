"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Activity } from "@/models/Activity";
import { Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LocationInterface } from "@/types/LocationInterface";
import { Skeleton } from "@/components/ui/skeleton";

interface ActivityPanelProps {
  activities: (LocationInterface & {
    availability: {
      currentActivity?: Activity;
      nextActivity?: Activity;
    };
  })[];
  isLoading: boolean;
  error: Error | null;
}

export function ActivityPanel({
  activities,
  isLoading,
  error,
}: ActivityPanelProps) {
  if (isLoading) {
    return (
      <ScrollArea className="h-full rounded-lg">
        <div className="space-y-4 p-4">
          {[...Array(8)].map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-4 bg-muted">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-5 w-16" />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-muted-foreground">
          Une erreur est survenue lors du chargement des activités.
        </p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-full rounded-lg">
      <div className="space-y-4 p-4">
        {activities.map((room) => (
          <Card key={room.key} className="overflow-hidden">
            <CardHeader className="p-4 bg-muted">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium">
                  {room.title}
                </CardTitle>
                <Badge variant={getBadgeVariant(room.availability)}>
                  {getStatusText(room.availability)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              {room.availability.currentActivity ? (
                <ActivityInfo
                  activity={room.availability.currentActivity}
                  type="current"
                />
              ) : room.availability.nextActivity ? (
                <ActivityInfo
                  activity={room.availability.nextActivity}
                  type="next"
                />
              ) : (
                <p className="text-sm text-muted-foreground flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
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

function ActivityInfo({
  activity,
  type,
}: {
  activity: Activity;
  type: "current" | "next";
}) {
  return (
    <div className="text-sm space-y-1">
      <p className="font-medium">
        {type === "current" ? "Activité en cours:" : "Prochaine activité:"}
      </p>
      <p>{activity.title}</p>
      <p className="text-muted-foreground flex items-center">
        <Clock className="w-4 h-4 mr-2" />
        {type === "current" ? (
          <>
            Jusqu&apos;à{" "}
            {activity.end.toLocaleTimeString("fr-FR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </>
        ) : (
          <>
            De{" "}
            {activity.start.toLocaleTimeString("fr-FR", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            à{" "}
            {activity.end.toLocaleTimeString("fr-FR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </>
        )}
      </p>
    </div>
  );
}

function getBadgeVariant(availability: {
  currentActivity?: Activity;
  nextActivity?: Activity;
}) {
  if (availability.currentActivity) return "destructive";
  if (availability.nextActivity) return "secondary";
  return "default";
}

function getStatusText(availability: {
  currentActivity?: Activity;
  nextActivity?: Activity;
}) {
  if (availability.currentActivity) return "Occupé";
  if (availability.nextActivity) return "Libre jusqu'à";
  return "Libre";
}
