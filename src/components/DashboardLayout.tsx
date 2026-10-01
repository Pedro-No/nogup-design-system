import type { HTMLAttributes } from "react";
import { classNames } from "../utils/classNames";

/** Inner page wrapper (`.dashboard`) used inside {@link AppShell}. */
export interface DashboardLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export function DashboardLayout({ className, ...props }: DashboardLayoutProps) {
  return <div className={classNames("dashboard", className)} {...props} />;
}
