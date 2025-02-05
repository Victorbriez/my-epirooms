import { Clock, Calendar } from "lucide-react";
import type { Activity } from "@/models/Activity";

interface ActivityInfoProps {
  activities: {
    currentActivity?: Activity;
    nextActivity?: Activity[];
  };
  currentTime: Date;
}

export function ActivityInfo({ activities, currentTime }: ActivityInfoProps) {
  const { currentActivity, nextActivity } = activities;

  const calculateTimeDifference = (start: Date) => {
    const diff = start.getTime() - currentTime.getTime();
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    return { hours, minutes };
  };

  const formatTimeDifference = (start: Date) => {
    const { hours, minutes } = calculateTimeDifference(start);
    if (hours === 0) return `${minutes}m`;
    return `${hours}h ${minutes}m`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-3">
      {currentActivity ? (
        <div className="bg-red-200 p-3 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-red-800">
                {currentActivity.title}
              </h3>
              <div className="flex items-center gap-1 mt-1">
                <Clock className="w-4 h-4 flex-shrink-0 text-red-700" />
                <p className="text-sm text-red-700">
                  {formatTime(currentActivity.start)} -{" "}
                  {formatTime(currentActivity.end)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-red-800">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">
                Encore{" "}
                <time
                  dateTime={currentActivity.end.toISOString()}
                  className="font-semibold"
                >
                  {formatTimeDifference(currentActivity.end)}
                </time>
              </p>
            </div>
          </div>
        </div>
      ) : nextActivity &&
        nextActivity.length > 0 &&
        nextActivity[0].start.getTime() - currentTime.getTime() <= 3600000 ? (
        <div className="bg-yellow-200 p-3 rounded-lg shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-yellow-800">
                {nextActivity[0].title}
              </h3>
              <div className="flex items-center gap-1 mt-1">
                <Clock className="w-4 h-4 flex-shrink-0 text-yellow-700" />
                <p className="text-sm text-yellow-700">
                  {formatTime(nextActivity[0].start)} -{" "}
                  {formatTime(nextActivity[0].end)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-yellow-800">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">
                Dans{" "}
                <time
                  dateTime={nextActivity[0].start.toISOString()}
                  className="font-semibold"
                >
                  {formatTimeDifference(nextActivity[0].start)}
                </time>
              </p>
            </div>
          </div>
        </div>
      ) : nextActivity && nextActivity.length > 0 ? (
        <div className="bg-green-200 p-3 rounded-lg shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-green-800">
                {nextActivity[0].title}
              </h3>
              <div className="flex items-center gap-1 mt-1">
                <Clock className="w-4 h-4 flex-shrink-0 text-green-700" />
                <p className="text-sm text-green-700">
                  {formatTime(nextActivity[0].start)} -{" "}
                  {formatTime(nextActivity[0].end)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-green-800">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">
                Jusqu&apos;à{" "}
                <time
                  dateTime={nextActivity[0].start.toISOString()}
                  className="font-semibold"
                >
                  {formatTimeDifference(nextActivity[0].start)}
                </time>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-green-200 p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 text-green-800">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <p className="text-sm font-semibold">
              Libre pour le reste de la journée
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
