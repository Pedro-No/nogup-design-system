import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export type AlertTone = "warn" | "error";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  tone: AlertTone;
}

export function Alert({ tone, className, ...props }: AlertProps) {
  return <div className={cn("alert", tone, className)} role="alert" {...props} />;
}
