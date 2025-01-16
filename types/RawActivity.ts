import { Room } from "./Room";

export interface RawActivity {
  activityTitle?: string;
  end: string;
  moduleCode?: string;
  moduleTitle?: string;
  room?: Room;
  start: string;
  title?: string;
}
