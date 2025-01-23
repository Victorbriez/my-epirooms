"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import type { Activity } from "@/models/Activity";
import {
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { LocationInterface } from "@/types/LocationInterface";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";

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
  currentTime: Date;
}

export function ActivityPanel({
  activities,
  isLoading,
  error,
  refresh,
  selectedRoom,
  onRoomClick,
  currentTime,
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
            aria-label={`Salle ${room.title}`}
            ref={(el) => {
              if (el && selectedRoom === room.key) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
            className={cn(
              "overflow-hidden border-2 transition-colors cursor-pointer",
              "hover:bg-gray-100 dark:hover:bg-gray-800",
              selectedRoom === room.key
                ? "border-blue-500 dark:border-blue-400"
                : "border-gray-200 dark:border-gray-700"
            )}
            onClick={() => onRoomClick(room.key)}
          >
            <CardHeader className="p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {getBadgeVariant(room.availability, currentTime) ===
                  "green" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : getBadgeVariant(room.availability, currentTime) ===
                    "yellow" ? (
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <CardTitle className="text-lg font-medium line-clamp-1">
                    {room.title}
                  </CardTitle>
                </div>
                <StatusBadge
                  availability={room.availability}
                  currentTime={currentTime}
                />
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
                  ) : room.availability.nextActivity &&
                    room.availability.nextActivity.length > 0 ? (
                    <ActivityInfo
                      activity={room.availability.nextActivity[0]}
                      type="next"
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground font-medium flex items-center">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Libre pour le reste de la journée</span>
                    </p>
                  )}
                </div>
                <CollapsibleContent className="transition-all duration-300 ease-in-out">
                  {selectedRoom === room.key && (
                    <DailyActivities
                      activities={room.availability.nextActivity || []}
                    />
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
  currentTime,
}: {
  availability: {
    currentActivity?: Activity;
    nextActivity?: Activity[];
  };
  currentTime: Date;
}) {
  const variant = getBadgeVariant(availability, currentTime);
  const text = getStatusText(availability, currentTime);

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
    <div className="space-y-3">
      <p className="font-medium text-sm text-primary">
        {type === "current" ? "Activité en cours:" : "Prochaine activité:"}
      </p>
      <div className="text-sm space-y-1 bg-primary/5 p-2 rounded-md">
        <h3 className="font-medium leading-none text-lg">{activity.title}</h3>
        <p className="text-sm text-muted-foreground font-medium flex items-center">
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
    </div>
  );
}

function getBadgeVariant(
  availability: {
    currentActivity?: Activity;
    nextActivity?: Activity[];
  },
  currentTime: Date
): "red" | "yellow" | "green" {
  if (availability.currentActivity) return "red";
  if (
    availability.nextActivity &&
    availability.nextActivity.length > 0 &&
    availability.nextActivity[0].start.getTime() - currentTime.getTime() <=
      3600000
  )
    return "yellow";
  return "green";
}

function getStatusText(
  availability: { currentActivity?: Activity; nextActivity?: Activity[] },
  currentTime: Date
): string {
  if (availability.currentActivity) return "Occupé";
  if (
    availability.nextActivity &&
    availability.nextActivity.length > 0 &&
    availability.nextActivity[0].start.getTime() - currentTime.getTime() <=
      3600000
  ) {
    const nextActivity = availability.nextActivity[0];
    const minutesUntilNext = Math.round(
      (nextActivity.start.getTime() - currentTime.getTime()) / 60000
    );
    return `Libre encore ${minutesUntilNext} minute${
      minutesUntilNext > 1 ? "s" : ""
    }`;
  }
  return "Libre";
}

function DailyActivities({ activities }: { activities: Activity[] }) {
  const displayedActivities = activities.slice(1);

  return (
    <div className="mt-4 space-y-3">
      <h4 className="font-medium text-sm text-primary">
        Activités de la journée:
      </h4>
      {displayedActivities.length > 0 ? (
        <div className="space-y-2">
          {displayedActivities.map((activity, index) => (
            <div
              key={index}
              className="text-sm space-y-1 bg-secondary/10 p-2 rounded-md transition-colors hover:bg-secondary/20"
            >
              <p className="font-medium">{activity.title}</p>
              <p className="text-sm text-muted-foreground font-medium flex items-center">
                <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>
                  <time
                    dateTime={activity.start.toISOString()}
                    className="tabular-nums font-medium"
                  >
                    {activity.start.toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>{" "}
                  -{" "}
                  <time
                    dateTime={activity.end.toISOString()}
                    className="tabular-nums font-medium"
                  >
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
        <p className="text-sm text-muted-foreground font-medium bg-secondary/10 p-2 rounded-md">
          Aucune activité prévue pour le reste de la journée.
        </p>
      )}
    </div>
  );
}
