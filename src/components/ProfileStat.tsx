import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../utils/classNames";

export interface ProfileStatProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  label: ReactNode;
  value: ReactNode;
}

export function ProfileStat({
  icon,
  label,
  value,
  className,
  ...props
}: ProfileStatProps) {
  return (
    <div className={classNames("profile-stat", className)} {...props}>
      {icon}
      <span className="stat-label">{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export interface ProfileStatsGridProps extends HTMLAttributes<HTMLDivElement> {}

export function ProfileStatsGrid({
  className,
  ...props
}: ProfileStatsGridProps) {
  return <div className={classNames("profile-stats", className)} {...props} />;
}
