import { ActivityInterface } from "@/types/ActivityInterface";

export class Activity {
  readonly id: number;
  readonly start: Date;
  readonly end: Date;
  readonly title: string;
  readonly roomCode: string;

  constructor(props: ActivityInterface) {
    this.id = props.event_id;
    this.start = new Date(props.start * 1000); // Timestamp Unix en UTC
    this.end = new Date(props.end * 1000); // Timestamp Unix en UTC
    this.title = props.title ?? "N/A";
    this.roomCode = props.room ?? "N/A";
  }

  /** Retourne la durée en minutes */
  getDurationInMinutes(): number {
    return (this.end.getTime() - this.start.getTime()) / 60000;
  }

  /** Vérifie si l'activité est en cours à une date donnée */
  isOngoing(date: Date = new Date()): boolean {
    return date >= this.start && date < this.end;
  }

  /** Calcule le temps restant jusqu'au début en minutes */
  getTimeUntilStart(currentTime: Date): number {
    return (this.start.getTime() - currentTime.getTime()) / 60000;
  }

  /** Calcule le temps restant jusqu'à la fin en minutes */
  getTimeUntilEnd(currentTime: Date): number {
    return (this.end.getTime() - currentTime.getTime()) / 60000;
  }

  /** Formate une date pour l'affichage en heure française */
  formatTime(): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Paris",
    };
    return `${this.start.toLocaleTimeString(
      "fr-FR",
      options
    )} - ${this.end.toLocaleTimeString("fr-FR", options)}`;
  }

  /** Retourne une représentation textuelle avec fuseau horaire français */
  toString(): string {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Europe/Paris",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return `Activité: ${this.title} (ID: ${this.id}) - Salle: ${
      this.roomCode
    } - Début: ${this.start.toLocaleString(
      "fr-FR",
      options
    )} - Fin: ${this.end.toLocaleString("fr-FR", options)}`;
  }
}
