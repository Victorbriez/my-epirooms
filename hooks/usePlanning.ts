import { useState, useEffect, useCallback } from "react";
import type { ActivityInterface } from "@/types/ActivityInterface";
import { Activity } from "@/models/Activity";
import { fetchPlanningData } from "@/app/actions/fetchPlanningData";

const SPECIAL_ROOMS = {
  "FR/LIL/Hopital-Militaire/S-21abc-Denis-MacAlistair-Ritchie": [
    { code: "FR/LIL/Hopital-Militaire/S-21a-Denis" },
    { code: "FR/LIL/Hopital-Militaire/S-21b-MacAlistair" },
    { code: "FR/LIL/Hopital-Militaire/S-21c-Ritchie" },
  ],
  "FR/LIL/Hopital-Militaire/S-25ab-Gwen-Barzey": [
    { code: "FR/LIL/Hopital-Militaire/S-25a-Gwen" },
    { code: "FR/LIL/Hopital-Militaire/S-25b-Barzey" },
  ],
};

export function usePlanning() {
  const [state, setState] = useState<{
    eventList: Activity[];
    isLoading: boolean;
    error: Error | null;
  }>({
    eventList: [],
    isLoading: true,
    error: null,
  });

  const processActivities = useCallback(
    (data: ActivityInterface[]): Activity[] => {
      const now = new Date();
      return data
        .flatMap((item) =>
          item.room?.code && item.room.code in SPECIAL_ROOMS
            ? SPECIAL_ROOMS[item.room.code as keyof typeof SPECIAL_ROOMS].map(
                (room) =>
                  new Activity({
                    ...item,
                    room: { ...item.room, code: room.code },
                  })
              )
            : new Activity(item)
        )
        .filter((activity) => now <= activity.end)
        .sort((a, b) => a.start.getTime() - b.start.getTime());
    },
    []
  );

  const fetchActivities = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const currentDate = new Date().toISOString().split("T")[0];
      const data = await fetchPlanningData(currentDate);
      const processedData = processActivities(data);
      setState((prev) => ({
        ...prev,
        eventList: processedData,
        isLoading: false,
      }));
    } catch (e) {
      setState((prev) => ({
        ...prev,
        error: e instanceof Error ? e : new Error("An unknown error occurred"),
        isLoading: false,
      }));
    }
  }, [processActivities]);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  return { ...state, refresh: fetchActivities };
}
