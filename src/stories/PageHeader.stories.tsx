import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import { PageHeader } from "../components/PageHeader";

const meta = {
  title: "Layout/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  argTypes: {
    eyebrow: { control: "text" },
    title: { control: "text" },
  },
  args: {
    eyebrow: "Welcome back",
    title: "Alex",
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <PageHeader
      {...args}
      actions={<Button variant="ghost">Sign out</Button>}
    />
  ),
};
