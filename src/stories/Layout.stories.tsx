import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AppShell } from "../components/AppShell";
import { DashboardLayout } from "../components/DashboardLayout";
import { PageHeader } from "../components/PageHeader";
import { Button } from "../components/Button";
import {
  LanguageToggle,
  type NogupLanguage,
} from "../components/LanguageToggle";

const meta = {
  title: "Layout/Shell",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const AppShellWithDashboard: Story = {
  render: function AppShellWithDashboardStory() {
    const [language, setLanguage] = useState<NogupLanguage>("en");
    return (
      <AppShell>
        <DashboardLayout>
          <PageHeader
            eyebrow="Welcome back"
            title="Jordan"
            actions={
              <>
                <LanguageToggle
                  language={language}
                  onLanguageChange={setLanguage}
                  ariaLabel="Change language"
                  storageKey={null}
                />
                <Button variant="ghost" type="button">
                  Sign out
                </Button>
              </>
            }
          />
          <p className="muted">Main content lives inside `.dashboard`.</p>
        </DashboardLayout>
      </AppShell>
    );
  },
};
