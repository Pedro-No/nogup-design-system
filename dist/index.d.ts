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

export declare function AuthLayout({ className, ...props }: AuthLayoutProps): JSX.Element;

/** Centered auth screen wrapper (`.auth-shell`). */
export declare interface AuthLayoutProps extends HTMLAttributes<HTMLDivElement> {
}

export declare function Badge({ className, ...props }: BadgeProps): JSX.Element;

export declare interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
}

/** Build seven daily points (Mon–Sun) for a UTC week from sparse daily counts. */
export declare function buildWeekChartSeries(rows: DailyCountRow[], weekStart: Date): WeeklyChartPoint[];

export declare function Button({ variant, className, type, ...props }: ButtonProps): JSX.Element;

export declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

export declare type ButtonVariant = "primary" | "ghost" | "small" | "link";

export declare function Card({ className, ...props }: CardProps): JSX.Element;

export declare function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element;

export declare interface CardProps extends HTMLAttributes<HTMLDivElement> {
}

/** Weekly chart area placeholder. */
export declare function ChartSkeleton({ className, ...props }: SkeletonProps): JSX.Element;

/** Join CSS class strings; skips `false`, `null`, and `undefined` (handy for conditional classes). */
export declare function classNames(...values: Array<string | false | null | undefined>): string;

export declare function cycleNogupLanguage(language: NogupLanguage): NogupLanguage;

export declare interface DailyCountRow {
    date: string;
    count: number;
}

export declare function DashboardLayout({ className, ...props }: DashboardLayoutProps): JSX.Element;

/** Inner page wrapper (`.dashboard`) used inside {@link AppShell}. */
export declare interface DashboardLayoutProps extends HTMLAttributes<HTMLDivElement> {
}

export declare function dateKey(date: Date): string;

export declare function dayChartLabel(date: Date): string;

/** Ladder card with row placeholders. */
export declare function LadderCardSkeleton({ rows, className, ...props }: SkeletonProps & {
    rows?: number;
}): JSX.Element;

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

/** Recharts styling aligned with Nogup tokens. */
export declare const nogupChartTheme: {
    readonly barFill: "#f97316";
    /** Selected day — solid fill + stroke (no Recharts activeBar overlay). */
    readonly barSelectedFill: "#ea580c";
    readonly barSelectedStroke: "#fdba74";
    readonly gridStroke: "rgba(148, 163, 184, 0.12)";
    readonly axisTickFill: "#94a3b8";
    readonly tooltipBackground: "#111827";
    readonly tooltipBorder: "1px solid rgba(148, 163, 184, 0.2)";
    readonly tooltipBorderRadius: 8;
    readonly barRadius: [number, number, number, number];
    readonly maxBarSize: 42;
};

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

export declare function ProfileStat({ icon, label, value, className, ...props }: ProfileStatProps): JSX.Element;

export declare interface ProfileStatProps extends HTMLAttributes<HTMLDivElement> {
    icon: ReactNode;
    label: ReactNode;
    value: ReactNode;
}

export declare function ProfileStatsGrid({ className, ...props }: ProfileStatsGridProps): JSX.Element;

export declare interface ProfileStatsGridProps extends HTMLAttributes<HTMLDivElement> {
}

/** Prompt / timer card placeholder (pushups game view). */
export declare function PromptCardSkeleton({ className, ...props }: SkeletonProps): JSX.Element;

export declare function shiftWeek(weekStart: Date, weeks: number): Date;

/** Shimmer placeholder block; set size with className or style. */
export declare function Skeleton({ className, ...props }: SkeletonProps): JSX.Element;

export declare interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
}

export declare function SkeletonText({ className, ...props }: SkeletonProps): JSX.Element;

export declare function Stat({ label, value, className, ...props }: StatProps): JSX.Element;

export declare interface StatProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string | number;
}

/** Matches `.stat` layout while data loads. */
export declare function StatSkeleton({ className, ...props }: SkeletonProps): JSX.Element;

export declare function StatsRow({ className, ...props }: StatsRowProps): JSX.Element;

export declare interface StatsRowProps extends HTMLAttributes<HTMLElement> {
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

export declare function WeeklyBarChart({ data, height, regionLabel, valueFormatter, className, ...props }: WeeklyBarChartProps): JSX.Element;

export declare interface WeeklyBarChartProps extends HTMLAttributes<HTMLDivElement> {
    data: WeeklyChartPoint[];
    height?: number;
    regionLabel?: string;
    valueFormatter?: (value: number) => string;
    /** @deprecated Tooltip shows the formatted value only; kept for API compatibility. */
    tooltipValueLabel?: string;
}

export declare interface WeeklyChartPoint {
    date: string;
    label: string;
    value: number;
}

export declare function WeekNavigator({ onPrevious, onNext, onCurrentWeek, isCurrentWeek, currentWeekLabel, previousLabel, nextLabel, prevIcon, nextIcon, className, ...props }: WeekNavigatorProps): JSX.Element;

export declare interface WeekNavigatorProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    onPrevious: () => void;
    onNext: () => void;
    onCurrentWeek: () => void;
    isCurrentWeek?: boolean;
    currentWeekLabel?: ReactNode;
    previousLabel?: string;
    nextLabel?: string;
    prevIcon?: ReactNode;
    nextIcon?: ReactNode;
}

export declare function weekRangeLabel(weekStart: Date): string;

export declare function weekStartFor(dateString: string): Date;

export { }
