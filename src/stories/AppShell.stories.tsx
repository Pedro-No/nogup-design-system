import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "../components/AppShell";
import { Card } from "../components/Card";

const meta = {
  title: "Layout/AppShell",
  component: AppShell,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  argTypes: {
    centered: {
      control: "boolean",
      description: "Adds `.loading-shell` for full-viewport centering",
    },
  },
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { centered: false },
  render: (args) => (
    <AppShell {...args}>
      <Card>
        <h2>Content inside shell</h2>
        <p className="subtitle">Max width 720px with safe-area padding.</p>
      </Card>
    </AppShell>
  ),
};

export const Loading: Story = {
  args: { centered: true },
  render: (args) => (
    <AppShell {...args}>
      <p className="muted">Loading…</p>
    </AppShell>
  ),
};
