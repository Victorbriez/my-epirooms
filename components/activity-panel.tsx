"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Activity } from "@/models/Activity";
import { Calendar, Clock } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { LocationInterface } from "@/types/LocationInterface";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
} from "@/components/ui/collapsible";

interface ActivityPanelProps {
  activities: (LocationInterface & {
    availability: {
      currentActivity?: Activity;
      nextActivity?: Activity[];
    };
  })[];
  isLoading: boolean;
  error: Error | null;
  refresh: () => void;
  selectedRoom: string | null;
  onRoomClick: (roomKey: string) => void;
}

export function ActivityPanel({
  activities,
  isLoading,
  error,
  refresh,
  selectedRoom,
  onRoomClick,
}: ActivityPanelProps) {
  const { toast } = useToast();

  if (error || isLoading) {
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

  return (
    <ScrollArea className="h-full rounded-lg">
      <div className="space-y-4 p-4">
        {activities.map((room) => (
          <Card
            key={room.key}
            ref={(el) => {
              if (el && selectedRoom === room.key) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
            className={cn(
              "overflow-hidden border-2 transition-colors hover:bg-muted/50 cursor-pointer",
              selectedRoom === room.key ? "bg-muted/50" : "border-muted"
            )}
            onClick={() => onRoomClick(room.key)}
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
              <Collapsible open={selectedRoom === room.key}>
                <div className="w-full">
                  {room.availability.currentActivity ? (
                    <ActivityInfo
                      activity={room.availability.currentActivity}
                      type="current"
                    />
                  ) : room.availability.nextActivity && room.availability.nextActivity.length > 0 ? (
                    <ActivityInfo
                      activity={room.availability.nextActivity[0]}
                      type="next"
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Libre pour le reste de la journée</span>
                    </p>
                  )}
                </div>
                <CollapsibleContent>
                  {selectedRoom === room.key && (
                    <DailyActivities activities={room.availability.nextActivity || []} />
                  )}
                </CollapsibleContent>
              </Collapsible>
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
    nextActivity?: Activity[];
  };
}) {
  const variant = getBadgeVariant(availability);
  const text = getStatusText(availability);

  return <Badge variant={variant}>{text}</Badge>;
}

function ActivityInfo({
  activity,
  type,
}: {
  activity: Activity;
  type: "current" | "next";
}) {
  return (
    <div className="space-y-3 bg-primary/5 p-3 rounded-md">
      <div className="space-y-1">
        <p className="text-sm font-medium text-primary">
          {type === "current" ? "Activité en cours:" : "Prochaine activité:"}
        </p>
        <p className="font-medium leading-none text-lg">{activity.title}</p>
      </div>
      <p className="text-sm text-muted-foreground flex items-center">
        <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
        <span>
          {type === "current" ? (
            <>
              Jusqu&apos;à{" "}
              <time
                dateTime={activity.end.toISOString()}
                className="tabular-nums font-medium"
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
                className="tabular-nums font-medium"
              >
                {activity.start.toLocaleTimeString("fr-FR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </time>{" "}
              à{" "}
              <time
                dateTime={activity.end.toISOString()}
                className="tabular-nums font-medium"
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
  nextActivity?: Activity[];
}): "red" | "yellow" | "green" {
  if (availability.currentActivity) return "red";
  if (availability.nextActivity && availability.nextActivity.length > 0) return "yellow";
  return "green";
}

function getStatusText(availability: {
  currentActivity?: Activity;
  nextActivity?: Activity[];
}): string {
  if (availability.currentActivity) return "Occupé";
  if (availability.nextActivity && availability.nextActivity.length > 0) {
    const nextActivity = availability.nextActivity[0];
    return `Libre jusqu'à ${nextActivity.start.toLocaleTimeString(
      "fr-FR",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    )}`;
  }
  return "Libre";
}

function DailyActivities({ activities }: { activities: Activity[] }) {
  return (
    <div className="mt-4 space-y-3">
      <h4 className="font-medium text-sm text-primary">Activités de la journée:</h4>
      {activities.length > 0 ? (
        <div className="space-y-2">
          {activities.map((activity, index) => (
            <div key={index} className="text-sm space-y-1 bg-secondary/10 p-2 rounded-md">
              <p className="font-medium">{activity.title}</p>
              <p className="text-muted-foreground flex items-center">
                <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>
                  <time dateTime={activity.start.toISOString()} className="tabular-nums font-medium">
                    {activity.start.toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>{" "}
                  -{" "}
                  <time dateTime={activity.end.toISOString()} className="tabular-nums font-medium">
                    {activity.end.toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground bg-secondary/10 p-2 rounded-md">
          Aucune activité prévue pour le reste de la journée.
        </p>
      )}
    </div>
  );
}

