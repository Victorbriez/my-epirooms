import { Clock, Calendar } from "lucide-react";
import type { Activity } from "@/models/Activity";

interface DailyActivitiesProps {
  activities: Activity[];
}

export function DailyActivities({ activities }: DailyActivitiesProps) {
  return (
    <div className="mt-4 space-y-3">
      <h4 className="font-medium text-sm text-primary">Activités à venir:</h4>
      {activities.length > 0 ? (
        <div className="space-y-2">
          {activities.map((activity, index) => (
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
        <div className="flex items-center gap-2 text-md bg-secondary/10 p-2 rounded-md">
          <Calendar className="w-4 h-4 flex-shrink-0" />
          <p className="font-medium leading-tight flex-shrink min-w-0 truncate">
            Libre pour le reste de la journée
          </p>
        </div>
      )}
    </div>
  );
}
