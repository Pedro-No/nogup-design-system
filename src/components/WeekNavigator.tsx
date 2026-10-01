import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../utils/classNames";

export interface WeekNavigatorProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  onPrevious: () => void;
  onNext: () => void;
  onCurrentWeek: () => void;
  isCurrentWeek?: boolean;
  currentWeekLabel?: ReactNode;
  previousLabel?: string;
  nextLabel?: string;
  prevIcon?: ReactNode;
  nextIcon?: ReactNode;
}

export function WeekNavigator({
  onPrevious,
  onNext,
  onCurrentWeek,
  isCurrentWeek = false,
  currentWeekLabel = "This week",
  previousLabel = "Previous week",
  nextLabel = "Next week",
  prevIcon = "‹",
  nextIcon = "›",
  className,
  ...props
}: WeekNavigatorProps) {
  return (
    <div
      className={classNames("week-navigation", className)}
      aria-label="Choose week"
      {...props}
    >
      <button
        type="button"
        className="week-nav-button"
        aria-label={previousLabel}
        title={previousLabel}
        onClick={onPrevious}
      >
        {prevIcon}
      </button>
      <button
        type="button"
        className="week-current-button"
        disabled={isCurrentWeek}
        onClick={onCurrentWeek}
      >
        {currentWeekLabel}
      </button>
      <button
        type="button"
        className="week-nav-button"
        aria-label={nextLabel}
        title={nextLabel}
        onClick={onNext}
      >
        {nextIcon}
      </button>
    </div>
  );
}
