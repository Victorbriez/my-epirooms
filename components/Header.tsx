"use client";

import { useState, useEffect } from "react";

export function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col items-start">
        <div className="text-2xl font-bold text-primary">
          {time.toLocaleTimeString("fr-FR")}
        </div>
        <div className="text-sm text-muted-foreground">
          {time.toLocaleDateString("fr-FR")}
        </div>
      </div>
      <h1 className="text-3xl font-semibold">My_EpiRooms</h1>
    </div>
  );
}
