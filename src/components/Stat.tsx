import type { HTMLAttributes } from "react";
import { classNames } from "../utils/classNames";

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
}

export function Stat({ label, value, className, ...props }: StatProps) {
  return (
    <div className={classNames("stat", className)} {...props}>
      <span className="stat-label">{label}</span>
      <strong className="stat-value">{value}</strong>
    </div>
  );
}
