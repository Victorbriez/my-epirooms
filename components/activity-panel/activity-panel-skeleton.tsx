import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ActivityPanelSkeleton() {
  return (
    <ScrollArea className="h-full rounded-lg">
      <div className="space-y-4 p-4">
        {[...Array(5)].map((_, index) => (
          <Card key={index} className="overflow-hidden border-2 border-muted">
            <CardHeader className="p-3 space-y-3">
              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-4 w-16 rounded-full" />
              </div>
            </CardHeader>
            <CardContent className="p-3 space-y-3">
              <div className="space-y-2">
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}
