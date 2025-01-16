export interface Room {
  code?: string;
  type: string;
  capacity: number;
}

export interface RawActivity {
  start: string;
  end: string;
  moduleCode?: string;
  title?: string;
  activityTitle?: string;
  moduleTitle?: string;
  room?: Room;
}
