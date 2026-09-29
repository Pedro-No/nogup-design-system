import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
}

export function Stat({ label, value, className, ...props }: StatProps) {
  return (
    <div className={cn("stat", className)} {...props}>
      <span className="stat-label">{label}</span>
      <strong className="stat-value">{value}</strong>
    </div>
  );
}
