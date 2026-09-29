import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../components/Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    tone: { control: "select", options: ["warn", "error"] },
    children: { control: "text" },
  },
  args: {
    tone: "warn",
    children: "Notifications are blocked in this browser.",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {
  args: { tone: "warn" },
};

export const Error: Story = {
  args: {
    tone: "error",
    children: "Could not save your session. Try again.",
  },
};
