import { Activity } from "@/models/Activity";
import { Room } from "@/types/Room";

export type RoomStatus =
  | "available"
  | "occupied"
  | "ending-soon"
  | "starting-soon";

export interface RoomAvailability {
  status: RoomStatus;
  nextActivity?: Activity;
  currentActivity?: Activity;
}

export function getRoomAvailability(
  room: Room,
  activities: Activity[],
  now: Date = new Date()
): RoomAvailability {
  const roomActivities = activities.filter(
    (activity) => activity.roomCode === room.key
  );

  const currentActivity = roomActivities.find((activity) =>
    activity.isOngoing(now)
  );
  const futureActivities = roomActivities
    .filter((activity) => activity.start > now)
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  const nextActivity = futureActivities[0];

  if (currentActivity) {
    const minutesUntilEnd = Math.round(
      (currentActivity.end.getTime() - now.getTime()) / 60000
    );
    return {
      status: minutesUntilEnd <= 15 ? "ending-soon" : "occupied",
      currentActivity,
      nextActivity,
    };
  }

  if (nextActivity) {
    const minutesUntilStart = Math.round(
      (nextActivity.start.getTime() - now.getTime()) / 60000
    );
    return {
      status: minutesUntilStart <= 15 ? "starting-soon" : "available",
      nextActivity,
    };
  }

  return { status: "available" };
}
