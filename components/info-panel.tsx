import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface InfoItem {
  title: string;
  content: string;
}

const mockInfoData: InfoItem[] = [
  {
    title: "Capacité totale",
    content: "150 places",
  },
  {
    title: "Salles disponibles",
    content: "8 salles",
  },
  {
    title: "Occupation actuelle",
    content: "65%",
  },
  {
    title: "Prochaine disponibilité",
    content: "14:30",
  },
  {
    title: "Température moyenne",
    content: "21°C",
  },
  {
    title: "Consommation énergétique",
    content: "75 kWh",
  },
  {
    title: "Taux d'occupation mensuel",
    content: "82%",
  },
  {
    title: "Réservations en attente",
    content: "3 demandes",
  },
  {
    title: "Maintenance prévue",
    content: "15/02/2024",
  },
  {
    title: "Dernier nettoyage",
    content: "Il y a 2h",
  },
  {
    title: "Qualité de l'air",
    content: "Excellente",
  },
  {
    title: "Luminosité moyenne",
    content: "450 lux",
  },
];

export function InfoPanel() {
  return (
    <ScrollArea className="h-full rounded-lg">
      <div className="space-y-4 p-4">
        {mockInfoData.map((item, index) => (
          <Card key={index}>
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-medium">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 px-4 pb-4">
              <p className="text-muted-foreground">{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}
