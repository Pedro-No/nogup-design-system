import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CalendarDays, UserRound } from "lucide-react";
import { ViewTabs } from "../components/ViewTabs";

const meta = {
  title: "Components/ViewTabs",
  component: ViewTabs,
  tags: ["autodocs"],
} satisfies Meta<typeof ViewTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    id: "game",
    label: (
      <>
        <CalendarDays aria-hidden size={18} /> Game
      </>
    ),
  },
  {
    id: "profile",
    label: (
      <>
        <UserRound aria-hidden size={18} /> Profile
      </>
    ),
  },
];

export const Interactive: Story = {
  args: {
    items,
    activeId: "game",
    onChange: () => undefined,
  },
  render: function InteractiveTabs() {
    const [activeId, setActiveId] = useState("game");
    return (
      <ViewTabs items={items} activeId={activeId} onChange={setActiveId} />
    );
  },
};
