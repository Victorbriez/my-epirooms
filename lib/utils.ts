import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Activity } from "@/models/Activity";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBadgeVariant(
  availability: {
    currentActivity?: Activity;
    nextActivity?: Activity[];
  },
  currentTime: Date
): "red" | "yellow" | "green" {
  if (availability.currentActivity) return "red";
  if (
    availability.nextActivity &&
    availability.nextActivity.length > 0 &&
    availability.nextActivity[0].start.getTime() - currentTime.getTime() <=
      3600000
  )
    return "yellow";
  return "green";
}

export function getStatusText(
  availability: { currentActivity?: Activity; nextActivity?: Activity[] },
  currentTime: Date
): string {
  if (availability.currentActivity) return "Occupé";
  if (
    availability.nextActivity &&
    availability.nextActivity.length > 0 &&
    availability.nextActivity[0].start.getTime() - currentTime.getTime() <=
      3600000
  ) {
    const nextActivity = availability.nextActivity[0];
    const minutesUntilNext = Math.round(
      (nextActivity.start.getTime() - currentTime.getTime()) / 60000
    );
    return `Libre encore ${minutesUntilNext} minute${
      minutesUntilNext > 1 ? "s" : ""
    }`;
  }
  return "Libre";
}
