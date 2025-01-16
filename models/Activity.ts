import { RawActivity } from "@/types/RawActivity";

export class Activity {
  readonly capacity?: number;
  readonly end: Date;
  readonly moduleCode?: string;
  readonly roomCode: string;
  readonly start: Date;
  readonly title: string;

  constructor(data: RawActivity) {
    this.capacity = data.room?.capacity;
    this.end = new Date(data.end);
    this.moduleCode = data.moduleCode;
    this.roomCode = data.room?.code ?? "N/A";
    this.start = new Date(data.start);
    this.title = data.activityTitle ?? data.title ?? "N/A";
  }

  getDurationInMinutes(): number {
    return Math.round((this.end.getTime() - this.start.getTime()) / 60000);
  }

  isOngoing(currentDate: Date = new Date()): boolean {
    return currentDate >= this.start && currentDate <= this.end;
  }
}
