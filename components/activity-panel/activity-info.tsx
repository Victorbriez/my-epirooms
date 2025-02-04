import { Clock, Calendar } from "lucide-react";
import type { Activity } from "@/models/Activity";

interface ActivityInfoProps {
  activities: {
    currentActivity?: Activity;
    nextActivity?: Activity[];
  };
}

export function ActivityInfo({ activities }: ActivityInfoProps) {
  const { currentActivity, nextActivity } = activities;

  return (
    <div className="space-y-3">
      {currentActivity ? (
        <div className="bg-red-100 p-3 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-red-800">
              {currentActivity.title}
            </h3>
            <div className="flex items-center gap-1 text-red-800">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">
                Jusqu&apos;à{" "}
                <time
                  dateTime={currentActivity.end.toISOString()}
                  className="font-semibold"
                >
                  {currentActivity.end.toLocaleTimeString("fr-FR", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </time>
              </p>
            </div>
          </div>
        </div>
      ) : nextActivity && nextActivity.length > 0 ? (
        <div className="flex items-center gap-2 bg-yellow-100 p-3 rounded-lg shadow-sm">
          <Clock className="w-4 h-4 flex-shrink-0 text-yellow-800" />
          <p className="text-sm font-medium text-yellow-800">
            Prochaine activité à{" "}
            <time
              dateTime={nextActivity[0].start.toISOString()}
              className="font-semibold"
            >
              {nextActivity[0].start.toLocaleTimeString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </time>
          </p>
        </div>
      ) : (
        <div className="flex items-center gap-2 bg-green-100 p-3 rounded-lg shadow-sm">
          <Calendar className="w-4 h-4 flex-shrink-0 text-green-800" />
          <p className="text-sm font-medium text-green-800">
            Libre pour le reste de la journée
          </p>
        </div>
      )}
    </div>
  );
}
