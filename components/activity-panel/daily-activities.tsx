import { Clock } from "lucide-react";
import type { Activity } from "@/models/Activity";

interface DailyActivitiesProps {
  activities: Activity[];
}

export function DailyActivities({ activities }: DailyActivitiesProps) {
  return (
    <div className="mt-5">
      <h4 className="font-semibold text-sm text-foreground">
        Activités à venir:
      </h4>
      {activities.length > 0 ? (
        <div className="space-y-2">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="text-sm bg-secondary/10 p-2 rounded-md transition-colors hover:bg-secondary/20"
            >
              <p className="font-medium mb-1">{activity.title}</p>
              <p className="text-xs text-muted-foreground font-medium flex items-center">
                <Clock className="w-3 h-3 mr-1 flex-shrink-0" />
                <span>
                  <time
                    dateTime={activity.start.toISOString()}
                    className="tabular-nums"
                  >
                    {activity.start.toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                      timeZone: "Europe/Paris",
                    })}
                  </time>{" "}
                  -{" "}
                  <time
                    dateTime={activity.end.toISOString()}
                    className="tabular-nums"
                  >
                    {activity.end.toLocaleTimeString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                      timeZone: "Europe/Paris",
                    })}
                  </time>
                </span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground font-medium p-2">
          Plus aucune activité prévue pour aujourd&apos;hui.
        </p>
      )}
    </div>
  );
}
