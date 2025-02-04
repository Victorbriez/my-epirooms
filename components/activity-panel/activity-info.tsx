import { Clock } from "lucide-react";
import type { Activity } from "@/models/Activity";

interface ActivityInfoProps {
  activity: Activity;
  type: "current" | "next";
}

export function ActivityInfo({ activity, type }: ActivityInfoProps) {
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
