import { RawActivity } from "@/types/RawActivity";

export class ActivityEntity {
  readonly start: Date;
  readonly end: Date;
  readonly title: string;
  readonly moduleCode?: string;
  readonly roomCode: string;
  readonly capacity?: number;

  constructor(data: RawActivity) {
    this.start = new Date(data.start);
    this.end = new Date(data.end);
    this.title = data.activityTitle ?? data.title ?? "N/A";
    this.moduleCode = data.moduleCode;
    this.roomCode = data.room?.code ?? "N/A";
    this.capacity = data.room?.capacity;
  }

  getDurationInMinutes(): number {
    return Math.round((this.end.getTime() - this.start.getTime()) / 60000);
  }

  isOngoing(currentDate: Date = new Date()): boolean {
    return currentDate >= this.start && currentDate <= this.end;
  }
}
