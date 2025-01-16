import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchPlanningData } from "@/app/actions/getPlanningAction";
import { Activity } from "@/models/Activity";
import { RawActivity } from "@/types/RawActivity";

export function usePlanning() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  const processActivities = useMemo(
    () =>
      (rawData: RawActivity[]): Activity[] => {
        const now = new Date();
        return rawData
          .map((item) => new Activity(item))
          .filter((activity) => now <= activity.end)
          .sort((a, b) => a.start.getTime() - b.start.getTime());
      },
    []
  );

  const fetchActivities = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const currentDate = new Date().toISOString().split("T")[0];
      const rawData = await fetchPlanningData(currentDate);
      setActivities(processActivities(rawData));
    } catch (e) {
      setError(e instanceof Error ? e : new Error("An unknown error occurred"));
    } finally {
      setLoading(false);
    }
  }, [processActivities]);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  return {
    activities,
    error,
    loading,
    refresh: fetchActivities,
  };
}
