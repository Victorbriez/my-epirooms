"use server";

import { RawActivity } from "@/types/RawActivity";

export async function fetchPlanningData(date: string): Promise<RawActivity[]> {
  const url = `https://lille-epirooms.epitest.eu/?date=2025-01-17`;

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
