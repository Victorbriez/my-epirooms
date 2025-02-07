import { Clock, Calendar } from "lucide-react";
import type { Activity } from "@/models/Activity";
import { Separator } from "@/components/ui/separator";

interface ActivityInfoProps {
  activities: {
    currentActivity?: Activity;
    nextActivity?: Activity[];
  };
  currentTime: Date;
}

export function ActivityInfo({ activities, currentTime }: ActivityInfoProps) {
  const { currentActivity, nextActivity } = activities;

  const calculateTimeDifference = (targetTime: Date) => {
    const diffMs = targetTime.getTime() - currentTime.getTime();
    return {
      hours: Math.floor(diffMs / 3600000),
      minutes: Math.floor((diffMs % 3600000) / 60000),
    };
  };

  const formatTimeDifference = (targetTime: Date) => {
    const { hours, minutes } = calculateTimeDifference(targetTime);
    return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  const formatTime = (() => {
    const formatter = new Intl.DateTimeFormat("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (date: Date) => formatter.format(date);
  })();

  return (
    <div className="space-y-3">
      {currentActivity ? (
        <div className="bg-red-200 p-3 rounded-lg shadow-sm">
          <h3 className="font-extrabold text-red-800">
            {currentActivity.title}
          </h3>
          <Separator className="my-2 bg-red-800" />
          <div className="flex items-center justify-between gap-2 mt-2">
            <div className="flex items-center gap-1 text-red-800">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">
                <span className="font-semibold">
                  {formatTime(currentActivity.start)}
                </span>{" "}
                -{" "}
                <span className="font-semibold">
                  {formatTime(currentActivity.end)}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-1 text-red-800">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">
                Encore{" "}
                <span className="font-semibold">
                  {formatTimeDifference(currentActivity.end)}
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : nextActivity &&
        nextActivity.length > 0 &&
        nextActivity[0].start.getTime() - currentTime.getTime() <= 3600000 ? (
        <div className="bg-yellow-200 p-3 rounded-lg shadow-sm">
          <h3 className="font-extrabold text-yellow-800">
            {nextActivity[0].title}
          </h3>
          <Separator className="my-2 bg-yellow-800" />
          <div className="flex items-center justify-between gap-2 mt-2">
            <div className="flex items-center gap-1 text-yellow-800">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">
                <span className="font-semibold">
                  {formatTime(nextActivity[0].start)}
                </span>{" "}
                -{" "}
                <span className="font-semibold">
                  {formatTime(nextActivity[0].end)}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-1 text-yellow-800">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">
                Encore{" "}
                <span className="font-semibold">
                  {formatTimeDifference(nextActivity[0].end)}
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : nextActivity && nextActivity.length > 0 ? (
        <div className="bg-green-200 p-3 rounded-lg shadow-sm">
          <h3 className="font-extrabold text-green-800">
            {nextActivity[0].title}
          </h3>
          <Separator className="my-2 bg-green-800" />
          <div className="flex items-center justify-between gap-2 mt-2">
            <div className="flex items-center gap-1 text-green-800">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">
                <span className="font-semibold">
                  {formatTime(nextActivity[0].start)}
                </span>{" "}
                -{" "}
                <span className="font-semibold">
                  {formatTime(nextActivity[0].end)}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-1 text-green-800">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm">
                Encore{" "}
                <span className="font-semibold">
                  {formatTimeDifference(nextActivity[0].end)}
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-green-200 p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 text-green-800">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <p className="font-extrabold">Libre pour le reste de la journée</p>
          </div>
        </div>
      )}
    </div>
  );
}
