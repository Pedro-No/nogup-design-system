import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

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
      className={cn("app-shell", centered && "loading-shell", className)}
      {...props}
    />
  );
}
