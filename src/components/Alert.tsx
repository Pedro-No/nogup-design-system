import type { HTMLAttributes } from "react";
import { classNames } from "../utils/classNames";

export type AlertTone = "warn" | "error";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  tone: AlertTone;
}

export function Alert({ tone, className, ...props }: AlertProps) {
  return <div className={classNames("alert", tone, className)} role="alert" {...props} />;
}
