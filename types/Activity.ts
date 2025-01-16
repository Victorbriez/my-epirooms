export interface Activity {
  capacity?: number;
  end: Date;
  id: number;
  moduleCode?: string;
  roomCode?: string;
  start: Date;
  title: string;
}

export type ActivityStatus =
  | "ended"
  | "ending-soon"
  | "ongoing"
  | "starting-soon"
  | "upcoming";
