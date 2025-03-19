import { ActivityInterface } from "@/types/ActivityInterface";

export class Activity {
  readonly id: number;
  readonly start: Date;
  readonly end: Date;
  readonly title: string;
  readonly roomCode: string;

  constructor(props: ActivityInterface) {
    this.id = props.event_id;
    this.start = new Date(props.start * 1000);
    this.end = new Date(props.end * 1000);
    this.title = props.title ?? "N/A";
    this.roomCode = props.room ?? "N/A";
  }

  getDurationInMinutes(): number {
    return (this.end.getTime() - this.start.getTime()) / 60000;
  }

  isOngoing(date: Date = new Date()): boolean {
    return date >= this.start && date <= this.end;
  }

  toString(): string {
    return `Activité: ${this.title} (ID: ${this.id}) - Salle: ${
      this.roomCode
    } - Début: ${this.start.toLocaleString()} - Fin: ${this.end.toLocaleString()}`;
  }
}
