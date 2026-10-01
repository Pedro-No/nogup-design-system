import type { Meta, StoryObj } from "@storybook/react";
import { WeeklyBarChart } from "../components/WeeklyBarChart";
import type { WeeklyChartPoint } from "../utils/week";

const sampleWeek: WeeklyChartPoint[] = [
  { date: "2026-09-22", label: "Mon 22nd", value: 45 },
  { date: "2026-09-23", label: "Tue 23rd", value: 60 },
  { date: "2026-09-24", label: "Wed 24th", value: 30 },
  { date: "2026-09-25", label: "Thu 25th", value: 80 },
  { date: "2026-09-26", label: "Fri 26th", value: 55 },
  { date: "2026-09-27", label: "Sat 27th", value: 20 },
  { date: "2026-09-28", label: "Sun 28th", value: 40 },
];

const meta = {
  title: "Charts/WeeklyBarChart",
  component: WeeklyBarChart,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof WeeklyBarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: sampleWeek,
    valueFormatter: (n) => `${n.toLocaleString()} pushups`,
    tooltipValueLabel: "Total",
    regionLabel: "Weekly pushup history",
  },
};
