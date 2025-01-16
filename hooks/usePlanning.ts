import { useState, useEffect, useCallback, useMemo } from "react";
import { getPlanningAction } from "@/app/actions/getPlanningAction";
import { RawActivity } from "@/types/RawActivity";
import { ActivityEntity } from "@/models/ActivityEntity";

export function usePlanning() {
  const [activities, setActivities] = useState<ActivityEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const processActivities = useMemo(
    () =>
      (rawData: RawActivity[]): ActivityEntity[] => {
        const now = new Date();
        return rawData
          .map((item) => new ActivityEntity(item))
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
      const rawData = await getPlanningAction(currentDate);
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

  return { activities, loading, error, refresh: fetchActivities };
}
