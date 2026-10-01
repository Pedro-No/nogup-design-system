import type { HTMLAttributes } from "react";
import { classNames } from "../utils/classNames";

export interface StatsRowProps extends HTMLAttributes<HTMLElement> {}

export function StatsRow({ className, ...props }: StatsRowProps) {
  return <section className={classNames("stats-row", className)} {...props} />;
}
