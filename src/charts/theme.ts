/** Recharts styling aligned with Nogup tokens. */
export const nogupChartTheme = {
  barFill: "#f97316",
  /** Selected day — solid fill + stroke (no Recharts activeBar overlay). */
  barSelectedFill: "#ea580c",
  barSelectedStroke: "#fdba74",
  gridStroke: "rgba(148, 163, 184, 0.12)",
  axisTickFill: "#94a3b8",
  tooltipBackground: "#111827",
  tooltipBorder: "1px solid rgba(148, 163, 184, 0.2)",
  tooltipBorderRadius: 8,
  barRadius: [4, 4, 0, 0] as [number, number, number, number],
  maxBarSize: 42,
} as const;
