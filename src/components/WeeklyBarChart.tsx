import { useState, type HTMLAttributes } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { nogupChartTheme } from "../charts/theme";
import type { WeeklyChartPoint } from "../utils/week";
import { classNames } from "../utils/classNames";

interface DayAxisTickProps {
  x?: number;
  y?: number;
  payload?: { value: string };
}

function DayAxisTick({ x = 0, y = 0, payload }: DayAxisTickProps) {
  const [weekday = "", day = ""] = payload?.value.split(" ") ?? [];

  return (
    <g transform={`translate(${x},${y})`}>
      <text textAnchor="middle" fill={nogupChartTheme.axisTickFill} fontSize={11}>
        <tspan x={0} dy={14}>
          {weekday}
        </tspan>
        <tspan x={0} dy={14}>
          {day}
        </tspan>
      </text>
    </g>
  );
}

function ChartTooltip({
  active,
  payload,
  label,
  valueFormatter,
}: {
  active?: boolean;
  payload?: ReadonlyArray<{ value?: unknown }>;
  label?: unknown;
  valueFormatter: (value: number) => string;
}) {
  if (!active || !payload?.length) {
    return null;
  }

  const raw = payload[0]?.value;
  const value = typeof raw === "number" ? raw : Number(raw);

  return (
    <div className="nogup-chart-tooltip">
      <p className="nogup-chart-tooltip-label">{String(label ?? "")}</p>
      <p className="nogup-chart-tooltip-value">{valueFormatter(value)}</p>
    </div>
  );
}

function barFillForIndex(index: number, selectedIndex: number | null): string {
  if (selectedIndex !== index) {
    return nogupChartTheme.barFill;
  }
  return nogupChartTheme.barSelectedFill;
}

function barStrokeForIndex(index: number, selectedIndex: number | null): string {
  if (selectedIndex !== index) {
    return "none";
  }
  return nogupChartTheme.barSelectedStroke;
}

export interface WeeklyBarChartProps extends HTMLAttributes<HTMLDivElement> {
  data: WeeklyChartPoint[];
  height?: number;
  regionLabel?: string;
  valueFormatter?: (value: number) => string;
  /** @deprecated Tooltip shows the formatted value only; kept for API compatibility. */
  tooltipValueLabel?: string;
}

export function WeeklyBarChart({
  data,
  height = 280,
  regionLabel = "Weekly chart",
  valueFormatter = (value) => value.toLocaleString(),
  className,
  ...props
}: WeeklyBarChartProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div
      className={classNames("chart-scroll", className)}
      role="img"
      aria-label={regionLabel}
      {...props}
    >
      <div className="weekly-chart">
        <ResponsiveContainer width="100%" height={height}>
          <BarChart
            data={data}
            margin={{ top: 12, right: 12, left: -12, bottom: 0 }}
            barCategoryGap="4%"
          >
            <CartesianGrid
              stroke={nogupChartTheme.gridStroke}
              vertical={false}
            />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              interval={0}
              height={40}
              tick={<DayAxisTick />}
            />
            <YAxis
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: nogupChartTheme.axisTickFill,
                fontSize: 12,
              }}
            />
            <Tooltip
              isAnimationActive={false}
              cursor={false}
              trigger="click"
              allowEscapeViewBox={{ x: true, y: true }}
              content={({ active, payload, label }) => (
                <ChartTooltip
                  active={active}
                  payload={payload}
                  label={label}
                  valueFormatter={valueFormatter}
                />
              )}
            />
            <Bar
              dataKey="value"
              radius={nogupChartTheme.barRadius}
              maxBarSize={nogupChartTheme.maxBarSize}
              isAnimationActive={false}
              onClick={(_entry, index) => {
                if (typeof index === "number") {
                  setSelectedIndex(index);
                }
              }}
            >
              {data.map((point, index) => (
                <Cell
                  key={point.date}
                  fill={barFillForIndex(index, selectedIndex)}
                  stroke={barStrokeForIndex(index, selectedIndex)}
                  strokeWidth={selectedIndex === index ? 2 : 0}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
