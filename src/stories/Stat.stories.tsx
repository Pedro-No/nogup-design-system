import type { Meta, StoryObj } from "@storybook/react";
import { Stat } from "../components/Stat";

const meta = {
  title: "Components/Stat",
  component: Stat,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
  },
  args: {
    label: "Today",
    value: "42",
  },
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Row: Story = {
  render: () => (
    <div className="stats-row" style={{ width: "min(100%, 420px)" }}>
      <Stat label="Today" value="42" />
      <Stat label="Total" value="1,204" />
    </div>
  ),
};
