const DAY_MS = 24 * 60 * 60 * 1000;

export function weekStartFor(dateString: string): Date {
  const date = new Date(`${dateString}T00:00:00Z`);
  const daysSinceMonday = (date.getUTCDay() + 6) % 7;
  date.setUTCDate(date.getUTCDate() - daysSinceMonday);
  return date;
}

export function dateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function shiftWeek(weekStart: Date, weeks: number): Date {
  return new Date(weekStart.getTime() + weeks * 7 * DAY_MS);
}

function ordinalDay(day: number): string {
  const teen = day % 100;
  if (teen >= 11 && teen <= 13) return `${day}th`;

  const suffix =
    day % 10 === 1
      ? "st"
      : day % 10 === 2
        ? "nd"
        : day % 10 === 3
          ? "rd"
          : "th";
  return `${day}${suffix}`;
}

export function dayChartLabel(date: Date): string {
  const weekday = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    timeZone: "UTC",
  }).format(date);
  return `${weekday} ${ordinalDay(date.getUTCDate())}`;
}

export function weekRangeLabel(weekStart: Date): string {
  const weekEnd = new Date(weekStart.getTime() + 6 * DAY_MS);
  const start = new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(weekStart);
  const end = new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(weekEnd);
  return `${start} – ${end}`;
}

export interface DailyCountRow {
  date: string;
  count: number;
}

export interface WeeklyChartPoint {
  date: string;
  label: string;
  value: number;
}

/** Build seven daily points (Mon–Sun) for a UTC week from sparse daily counts. */
export function buildWeekChartSeries(
  rows: DailyCountRow[],
  weekStart: Date,
): WeeklyChartPoint[] {
  const counts = new Map(rows.map((row) => [row.date, row.count]));

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(weekStart.getTime() + index * DAY_MS);
    const key = dateKey(date);
    return {
      date: key,
      label: dayChartLabel(date),
      value: counts.get(key) ?? 0,
    };
  });
}
