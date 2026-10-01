import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  LanguageToggle,
  type NogupLanguage,
  nogupLanguageOrder,
} from "../components/LanguageToggle";

const meta = {
  title: "Components/LanguageToggle",
  component: LanguageToggle,
  tags: ["autodocs"],
  argTypes: {
    language: {
      control: "select",
      options: nogupLanguageOrder,
    },
    ariaLabel: { control: "text" },
    storageKey: {
      control: "text",
      description: "localStorage key; use empty string in docs to avoid persisting",
    },
  },
  args: {
    ariaLabel: "Change language",
    storageKey: null,
  },
} satisfies Meta<typeof LanguageToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: function InteractiveLanguageToggle() {
    const [language, setLanguage] = useState<NogupLanguage>("en");
    return (
      <LanguageToggle
        language={language}
        onLanguageChange={setLanguage}
        ariaLabel="Change language"
        storageKey={null}
      />
    );
  },
};
