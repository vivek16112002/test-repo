export function isWeekend(date: Date): boolean {
  const day = date.getUTCDay();
  return day === 0 || day === 6;
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date.getTime());
  result.setUTCDate(result.getUTCDate() + days);
  return result;
}

export function rangesOverlap(startA: Date, endA: Date, startB: Date, endB: Date): boolean {
  if (startA > endA || startB > endB) {
    throw new Error("Invalid date range");
  }
  return startA <= endB && startB <= endA;
}
