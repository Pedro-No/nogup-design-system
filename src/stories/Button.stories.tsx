import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "ghost", "small", "link"],
      description: "Visual style mapped to `.btn` utility classes",
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Button label",
    variant: "primary",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary", children: "Save changes" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Sign out" },
};

export const Small: Story = {
  args: { variant: "small", children: "Refresh" },
};

export const Link: Story = {
  args: { variant: "link", children: "Switch to sign up" },
};

export const Disabled: Story = {
  args: { variant: "primary", disabled: true, children: "Working…" },
};
