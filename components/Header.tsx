"use client";

export function Header({ currentTime }: { currentTime: Date }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col items-start">
        <div className="text-2xl font-bold text-foreground">
          {currentTime.toLocaleTimeString("fr-FR")}
        </div>
        <div className="text-sm text-muted-foreground">
          {currentTime.toLocaleDateString("fr-FR")}
        </div>
      </div>
      <h1 className="text-3xl font-semibold">My-EpiRooms</h1>
    </div>
  );
}
