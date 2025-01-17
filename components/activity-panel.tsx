"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Activity } from "@/models/Activity";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LocationInterface } from "@/types/LocationInterface";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ActivityPanelProps {
  activities: (LocationInterface & {
    availability: {
      currentActivity?: Activity;
      nextActivity?: Activity;
    };
  })[];
  isLoading: boolean;
  error: Error | null;
  refresh: () => void;
}

export function ActivityPanel({
  activities,
  isLoading,
  error,
  refresh,
}: ActivityPanelProps) {
  const { toast } = useToast();

  if (isLoading || error) {
    if (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de charger les activités.",
        action: (
          <ToastAction onClick={refresh} altText="Réessayer">
            Réessayer
          </ToastAction>
        ),
      });
    }
    return (
      <ScrollArea className="h-full rounded-lg">
        <div className="space-y-4 p-4">
          {[...Array(5)].map((_, index) => (
            <Card key={index} className="overflow-hidden border-2 border-muted">
              <CardHeader className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    );
  }

  if (activities.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg text-muted-foreground">
          Aucune activité n&apos;est prévue pour le moment.
        </p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-full rounded-lg">
      <div className="space-y-4 p-4">
        {activities.map((room) => (
          <Card
            key={room.key}
            className={cn(
              "overflow-hidden border-2 transition-colors hover:bg-muted/50",
              room.availability.currentActivity
                ? "border-destructive/20"
                : room.availability.nextActivity
                ? "border-secondary/20"
                : "border-muted"
            )}
          >
            <CardHeader className="p-4">
              <div className="flex items-center justify-between gap-4">
                <CardTitle className="text-lg font-medium line-clamp-1">
                  {room.title}
                </CardTitle>
                <StatusBadge availability={room.availability} />
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
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
                  <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Libre pour le reste de la journée</span>
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}

function StatusBadge({
  availability,
}: {
  availability: {
    currentActivity?: Activity;
    nextActivity?: Activity;
  };
}) {
  const variant = getBadgeVariant(availability);
  const text = getStatusText(availability);

  return (
    <Badge
      variant={variant}
      className={cn(
        "transition-all",
        availability.currentActivity &&
          "animate-pulse bg-destructive/10 text-destructive hover:bg-destructive/20"
      )}
    >
      {text}
    </Badge>
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
    <div className="space-y-3">
      <div className="space-y-1">
        <p className="text-sm font-medium text-muted-foreground">
          {type === "current" ? "Activité en cours:" : "Prochaine activité:"}
        </p>
        <p className="font-medium leading-none">{activity.title}</p>
      </div>
      <p className="text-sm text-muted-foreground flex items-center">
        <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
        <span>
          {type === "current" ? (
            <>
              Jusqu&apos;à{" "}
              <time
                dateTime={activity.end.toISOString()}
                className="tabular-nums"
              >
                {activity.end.toLocaleTimeString("fr-FR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </time>
            </>
          ) : (
            <>
              De{" "}
              <time
                dateTime={activity.start.toISOString()}
                className="tabular-nums"
              >
                {activity.start.toLocaleTimeString("fr-FR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </time>{" "}
              à{" "}
              <time
                dateTime={activity.end.toISOString()}
                className="tabular-nums"
              >
                {activity.end.toLocaleTimeString("fr-FR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </time>
            </>
          )}
        </span>
      </p>
    </div>
  );
}

function getBadgeVariant(availability: {
  currentActivity?: Activity;
  nextActivity?: Activity;
}): "destructive" | "secondary" | "default" {
  if (availability.currentActivity) return "destructive";
  if (availability.nextActivity) return "secondary";
  return "default";
}

function getStatusText(availability: {
  currentActivity?: Activity;
  nextActivity?: Activity;
}): string {
  if (availability.currentActivity) return "Occupé";
  if (availability.nextActivity) return "Libre jusqu'à";
  return "Libre";
}
