import type { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";
import flagFr from "../assets/flags/fr.png";
import flagPt from "../assets/flags/pt.png";
import flagUk from "../assets/flags/uk.png";

/** Languages used across Nogup apps (meal planner i18n). */
export type NogupLanguage = "en" | "pt" | "fr";

export const nogupLanguageOrder: readonly NogupLanguage[] = ["en", "pt", "fr"];

export const nogupLanguageFlags: Record<NogupLanguage, string> = {
  en: flagUk,
  pt: flagPt,
  fr: flagFr,
};

export function cycleNogupLanguage(language: NogupLanguage): NogupLanguage {
  const index = nogupLanguageOrder.indexOf(language);
  const nextIndex =
    index === -1 ? 0 : (index + 1) % nogupLanguageOrder.length;
  return nogupLanguageOrder[nextIndex] ?? "en";
}

export interface LanguageToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  language: NogupLanguage;
  /** Tooltip and accessible name (e.g. “Change language”). */
  ariaLabel: string;
  onLanguageChange: (language: NogupLanguage) => void;
  /**
   * When set, the next language is written to `localStorage` under this key.
   * Defaults to `app.language` (meal planner convention). Pass `null` to disable.
   */
  storageKey?: string | null;
  flags?: Record<NogupLanguage, string>;
  languageOrder?: readonly NogupLanguage[];
}

function nextInOrder<T extends string>(
  current: T,
  order: readonly T[],
): T {
  const index = order.indexOf(current);
  const nextIndex = index === -1 ? 0 : (index + 1) % order.length;
  return order[nextIndex] ?? order[0];
}

export function LanguageToggle({
  language,
  ariaLabel,
  onLanguageChange,
  storageKey = "app.language",
  flags = nogupLanguageFlags,
  languageOrder = nogupLanguageOrder,
  className,
  type = "button",
  ...props
}: LanguageToggleProps) {
  const flagSrc = flags[language];

  function handleClick() {
    const nextLanguage = nextInOrder(language, languageOrder);
    if (storageKey) {
      localStorage.setItem(storageKey, nextLanguage);
    }
    onLanguageChange(nextLanguage);
  }

  return (
    <button
      type={type}
      className={cn("btn ghost lang-btn", className)}
      title={ariaLabel}
      aria-label={ariaLabel}
      onClick={handleClick}
      {...props}
    >
      <img src={flagSrc} alt="" aria-hidden />
    </button>
  );
}
