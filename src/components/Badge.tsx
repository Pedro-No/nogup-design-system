import type { HTMLAttributes } from "react";
import { classNames } from "../utils/classNames";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export function Badge({ className, ...props }: BadgeProps) {
  return <span className={classNames("badge", className)} {...props} />;
}
