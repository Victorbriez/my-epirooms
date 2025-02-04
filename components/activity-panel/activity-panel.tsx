"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import type { Activity } from "@/models/Activity";
import { Calendar, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import type { LocationInterface } from "@/types/LocationInterface";
import { cn, getBadgeVariant } from "@/lib/utils";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { StatusBadge } from "@/components/activity-panel/status-badge";
import { DailyActivities } from "@/components/activity-panel/daily-activities";
import { ActivityInfo } from "@/components/activity-panel/activity-info";
import { ActivityPanelSkeleton } from "@/components/activity-panel/activity-panel-skeleton";

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
  const roomRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (selectedRoom && roomRefs.current[selectedRoom]) {
      roomRefs.current[selectedRoom]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedRoom]);

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
    return <ActivityPanelSkeleton />;
  }

  return (
    <ScrollArea className="h-full rounded-lg">
      <div className="space-y-4 p-4">
        {activities.map((room) => (
          <Card
            key={room.key}
            aria-label={`Salle ${room.title}`}
            ref={(el) => {
              roomRefs.current[room.key] = el;
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
