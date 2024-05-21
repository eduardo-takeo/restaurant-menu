export function numberToHour(number: number): string {
  const hours: number = Math.floor(number / 60);
  const minutes: number = number % 60;

  const formattedHours: string = (hours < 10 ? "0" : "") + hours;
  const formattedMinutes: string = (minutes < 10 ? "0" : "") + minutes;

  return `${formattedHours}:${formattedMinutes}`;
}
