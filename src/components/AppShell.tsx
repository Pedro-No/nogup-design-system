import type { HTMLAttributes } from "react";
import { classNames } from "../utils/classNames";

export interface AppShellProps extends HTMLAttributes<HTMLDivElement> {
  centered?: boolean;
}

export function AppShell({
  centered = false,
  className,
  ...props
}: AppShellProps) {
  return (
    <div
      className={classNames("app-shell", centered && "loading-shell", className)}
      {...props}
    />
  );
}
