import type { Meta, StoryObj } from "@storybook/react";

/**
 * Utility classes used directly in apps (no React wrapper yet).
 */
const meta = {
  title: "CSS/Patterns",
  parameters: {
    docs: {
      description: {
        component:
          "Class-based patterns from the stylesheets. Import `@nogup/design-system/styles` or a bundle (`core`, `pushups`, `meal-planner`).",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Typography: Story = {
  render: () => (
    <div style={{ maxWidth: 420 }}>
      <p className="eyebrow">Eyebrow</p>
      <h1>Heading level 1</h1>
      <h2 style={{ marginTop: "1rem" }}>Heading level 2</h2>
      <p className="subtitle">Subtitle copy with muted tone.</p>
      <p className="muted">Muted body text.</p>
      <p className="error">Error message (`.error`)</p>
    </div>
  ),
};

export const FormControls: Story = {
  render: () => (
    <form className="auth-form" style={{ maxWidth: 420 }}>
      <label>
        Email
        <input type="email" placeholder="you@example.com" />
      </label>
      <label>
        Notes
        <textarea placeholder="Optional details" rows={3} />
      </label>
    </form>
  ),
};

export const PhaseBadges: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      <span className="phase-badge phase-active">Active</span>
      <span className="phase-badge phase-waiting">Waiting</span>
      <span className="phase-badge phase-done">Done</span>
    </div>
  ),
};

export const InstallBanner: Story = {
  render: () => (
    <div className="install-banner" style={{ maxWidth: 520 }}>
      <p>Add this app to your home screen for reminders.</p>
      <div className="install-actions">
        <button type="button" className="btn small">
          Dismiss
        </button>
        <button type="button" className="btn primary">
          Install
        </button>
      </div>
    </div>
  ),
};

export const LadderRow: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <ul className="ladder-list" style={{ maxWidth: 420, padding: 0 }}>
      <li className="ladder-row">
        <span className="rank">1</span>
        <span className="name">Jordan</span>
        <span className="score">120</span>
      </li>
      <li className="ladder-row is-you">
        <span className="rank">2</span>
        <span className="name">You</span>
        <span className="score">98</span>
      </li>
    </ul>
  ),
};
