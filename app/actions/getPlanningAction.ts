"use server";

import { ActivityInterface } from "@/types/ActivityInterface";

export async function fetchPlanningData(
  date: string
): Promise<ActivityInterface[]> {
  const url = `https://lille-epirooms.epitest.eu/?date=${date}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching planning:", error);
    throw new Error("Failed to fetch planning");
  }
}
