import { Clock, Calendar } from "lucide-react";
import type { Activity } from "@/models/Activity";
import { Separator } from "@/components/ui/separator";

interface ActivityInfoProps {
  activities: {
    currentActivity?: Activity;
  };
}

export function ActivityInfo({ activities }: ActivityInfoProps) {
  const { currentActivity } = activities;

  return (
    <div className="space-y-3">
      <p className="font-medium text-sm text-primary">Activité en cours:</p>
      {currentActivity ? (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-md bg-primary/5 p-4 rounded-lg">
          <h3 className="font-medium leading-tight flex-shrink min-w-0 truncate">
            {currentActivity.title}
          </h3>
          <div className="flex items-center self-stretch">
            <Separator
              orientation="vertical"
              className="hidden sm:block h-6 mx-2"
            />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <p className="text-muted-foreground font-medium text-sm sm:text-base">
                <span className="tabular-nums">
                  Jusqu&apos;à{" "}
                  <time dateTime={currentActivity.end.toISOString()}>
                    {currentActivity.end.toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 text-md bg-primary/5 p-4 rounded-lg">
          <Calendar className="w-4 h-4 flex-shrink-0" />
          <p className="font-medium leading-tight flex-shrink min-w-0 truncate">
            Libre pour le reste de la journée
          </p>
        </div>
      )}
    </div>
  );
}
