import type { HTMLAttributes } from "react";
import { classNames } from "../utils/classNames";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

/** Shimmer placeholder block; set size with className or style. */
export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={classNames("skeleton", className)}
      aria-hidden
      {...props}
    />
  );
}

export function SkeletonText({
  className,
  ...props
}: SkeletonProps) {
  return <Skeleton className={classNames("skeleton-text", className)} {...props} />;
}

/** Matches `.stat` layout while data loads. */
export function StatSkeleton({ className, ...props }: SkeletonProps) {
  return (
    <div className={classNames("stat skeleton-stat", className)} aria-hidden {...props}>
      <SkeletonText className="skeleton-stat-label" />
      <Skeleton className="skeleton-stat-value" />
    </div>
  );
}

/** Prompt / timer card placeholder (pushups game view). */
export function PromptCardSkeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={classNames("card prompt-card skeleton-prompt-card", className)}
      aria-busy="true"
      aria-label="Loading"
      {...props}
    >
      <div className="card-header">
        <div className="skeleton-prompt-heading">
          <SkeletonText className="skeleton-eyebrow" />
          <Skeleton className="skeleton-title" />
        </div>
        <Skeleton className="skeleton-phase-badge" />
      </div>
      <Skeleton className="skeleton-countdown" />
      <Skeleton className="skeleton-primary-btn" />
    </div>
  );
}

/** Ladder card with row placeholders. */
export function LadderCardSkeleton({
  rows = 4,
  className,
  ...props
}: SkeletonProps & { rows?: number }) {
  return (
    <div
      className={classNames("card ladder-card skeleton-ladder-card", className)}
      aria-busy="true"
      aria-label="Loading ladder"
      {...props}
    >
      <div className="card-header ladder-card-header">
        <Skeleton className="skeleton-ladder-title" />
        <SkeletonText className="skeleton-ladder-timer" />
      </div>
      <ul className="ladder-list skeleton-ladder-list">
        {Array.from({ length: rows }, (_, i) => (
          <li key={i} className="ladder-row skeleton-ladder-row">
            <Skeleton className="skeleton-rank" />
            <SkeletonText className="skeleton-name" />
            <Skeleton className="skeleton-score" />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Weekly chart area placeholder. */
export function ChartSkeleton({ className, ...props }: SkeletonProps) {
  return (
    <Skeleton
      className={classNames("skeleton-chart", className)}
      aria-busy="true"
      aria-label="Loading chart"
      {...props}
    />
  );
}
