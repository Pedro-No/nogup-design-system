import { ButtonHTMLAttributes } from 'react';
import { HTMLAttributes } from 'react';
import { JSX } from 'react';
import { ReactNode } from 'react';

export declare function Alert({ tone, className, ...props }: AlertProps): JSX.Element;

export declare interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    tone: AlertTone;
}

export declare type AlertTone = "warn" | "error";

export declare function AppShell({ centered, className, ...props }: AppShellProps): JSX.Element;

export declare interface AppShellProps extends HTMLAttributes<HTMLDivElement> {
    centered?: boolean;
}

export declare function Badge({ className, ...props }: BadgeProps): JSX.Element;

export declare interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
}

export declare function Button({ variant, className, type, ...props }: ButtonProps): JSX.Element;

export declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

export declare type ButtonVariant = "primary" | "ghost" | "small" | "link";

export declare function Card({ className, ...props }: CardProps): JSX.Element;

export declare function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element;

export declare interface CardProps extends HTMLAttributes<HTMLDivElement> {
}

export declare function cn(...values: Array<string | false | null | undefined>): string;

export declare function cycleNogupLanguage(language: NogupLanguage): NogupLanguage;

export declare function LanguageToggle({ language, ariaLabel, onLanguageChange, storageKey, flags, languageOrder, className, type, ...props }: LanguageToggleProps): JSX.Element;

export declare interface LanguageToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
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

/** Languages used across Nogup apps (meal planner i18n). */
export declare type NogupLanguage = "en" | "pt" | "fr";

export declare const nogupLanguageFlags: Record<NogupLanguage, string>;

export declare const nogupLanguageOrder: readonly NogupLanguage[];

export declare type NogupTokens = typeof nogupTokens;

export declare const nogupTokens: {
    readonly colorScheme: "dark";
    readonly bg: "#0b1220";
    readonly bgElevated: "#111827";
    readonly card: "#162032";
    readonly border: "rgba(148, 163, 184, 0.16)";
    readonly text: "#f8fafc";
    readonly muted: "#94a3b8";
    readonly accent: "#f97316";
    readonly accentStrong: "#ea580c";
    readonly accentSoft: "#fdba74";
    readonly success: "#22c55e";
    readonly warn: "#fbbf24";
    readonly danger: "#f87171";
    readonly info: "#3b82f6";
    readonly shadow: "0 18px 50px rgba(0, 0, 0, 0.35)";
    readonly radiusSm: "8px";
    readonly radiusMd: "12px";
    readonly radiusLg: "16px";
    readonly radiusXl: "20px";
    readonly shellMaxWidth: "720px";
};

export declare function PageHeader({ eyebrow, title, actions, className, ...props }: PageHeaderProps): JSX.Element;

export declare interface PageHeaderProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
    eyebrow?: ReactNode;
    title: ReactNode;
    actions?: ReactNode;
}

export declare function Stat({ label, value, className, ...props }: StatProps): JSX.Element;

export declare interface StatProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string | number;
}

export declare interface ViewTabItem {
    id: string;
    label: ReactNode;
}

export declare function ViewTabs({ items, activeId, onChange, ariaLabel, className, ...props }: ViewTabsProps): JSX.Element;

export declare interface ViewTabsProps extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
    items: ViewTabItem[];
    activeId: string;
    onChange: (id: string) => void;
    ariaLabel?: string;
}

export { }
