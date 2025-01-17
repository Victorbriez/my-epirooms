import { LocationInterface } from "@/types/LocationInterface";
import { Activity } from "@/models/Activity";

export function getRoomEvents(
  room: LocationInterface,
  eventList: Activity[]
): Activity[] {
  return eventList.filter((e) => e.roomCode === room.key);
}
