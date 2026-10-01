import type { Meta, StoryObj } from "@storybook/react";
import {
  ChartSkeleton,
  LadderCardSkeleton,
  PromptCardSkeleton,
  StatSkeleton,
} from "../components/Skeleton";
import { StatsRow } from "../components/StatsRow";

const meta = {
  title: "Components/Skeleton",
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Stats: Story = {
  render: () => (
    <StatsRow style={{ maxWidth: 420 }}>
      <StatSkeleton />
      <StatSkeleton />
    </StatsRow>
  ),
};

export const PromptCard: Story = {
  render: () => <PromptCardSkeleton style={{ maxWidth: 420 }} />,
};

export const LadderCard: Story = {
  render: () => <LadderCardSkeleton style={{ maxWidth: 420 }} />,
};

export const Chart: Story = {
  render: () => <ChartSkeleton style={{ maxWidth: 420 }} />,
};
