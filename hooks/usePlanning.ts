import { useState, useEffect, useCallback, useMemo } from "react";
import { ActivityInterface } from "@/types/ActivityInterface";
import { Activity } from "@/models/Activity";
import { fetchPlanningData } from "@/app/actions/fetchPlanningData";

export function usePlanning() {
  const [eventList, setEventList] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const processActivities = useMemo(
    () =>
      (data: ActivityInterface[]): Activity[] => {
        const now = new Date();
        return data
          .map((item) => new Activity(item))
          .filter((activity) => now <= activity.end)
          .sort((a, b) => a.start.getTime() - b.start.getTime());
      },
    [],
  );

  const fetchActivities = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const currentDate = new Date().toISOString().split("T")[0];
      const data = await fetchPlanningData(currentDate);
      const processedData = processActivities(data);
      setEventList(processedData);
    } catch (e) {
      setError(e instanceof Error ? e : new Error("An unknown error occurred"));
    } finally {
      setIsLoading(false);
    }
  }, [processActivities]);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  return { eventList, isLoading, error, refresh: fetchActivities };
}
