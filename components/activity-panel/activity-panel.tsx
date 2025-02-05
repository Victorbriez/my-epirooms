"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import type { Activity } from "@/models/Activity";
import type { LocationInterface } from "@/types/LocationInterface";
import { cn } from "@/lib/utils";
import { ActivityInfo } from "@/components/activity-panel/activity-info";
import { DailyActivities } from "@/components/activity-panel/daily-activities";
import { StatusBadge } from "@/components/activity-panel/status-badge";
import { StatusIcon } from "@/components/activity-panel/status-icon";
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
            ref={(el) => {
              roomRefs.current[room.key] = el;
            }}
            className={cn(
              "overflow-hidden border-2 cursor-pointer",
              "hover:bg-gray-100 dark:hover:bg-gray-800",
              selectedRoom === room.key
                ? room.availability.currentActivity
                  ? "border-red-200 dark:border-red-200"
                  : room.availability.nextActivity &&
                    room.availability.nextActivity.length > 0 &&
                    room.availability.nextActivity[0].start.getTime() -
                      currentTime.getTime() <=
                      3600000
                  ? "border-yellow-200 dark:border-yellow-200"
                  : "border-green-200 dark:border-green-200"
                : "border-border"
            )}
            onClick={() => onRoomClick(room.key)}
          >
            <CardHeader className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <StatusIcon
                    availability={room.availability}
                    currentTime={currentTime}
                  />
                  <CardTitle className="text-base font-medium line-clamp-1">
                    {room.title}
                  </CardTitle>
                </div>
                <StatusBadge
                  availability={room.availability}
                  currentTime={currentTime}
                />
              </div>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <Collapsible open={selectedRoom === room.key}>
                <ActivityInfo
                  activities={room.availability}
                  currentTime={currentTime}
                />
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
