import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import { Card, CardHeader } from "../components/Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  subcomponents: { CardHeader },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: "min(100%, 420px)" }}>
      <CardHeader>
        <div>
          <p className="eyebrow">Section</p>
          <h2>Card title</h2>
        </div>
        <Button variant="small">Action</Button>
      </CardHeader>
      <p className="muted">
        Glassy surface with border, shadow, and backdrop blur (`.card`).
      </p>
    </Card>
  ),
};
