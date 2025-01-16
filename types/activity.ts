export interface Activity {
  id: number;
  title: string;
  start: Date;
  end: Date;
  capacity?: number;
  moduleCode?: string;
  roomCode?: string;
}

export type ActivityStatus =
  | "upcoming"
  | "starting-soon"
  | "ongoing"
  | "ending-soon"
  | "ended";
