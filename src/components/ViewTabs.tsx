import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

export interface ViewTabItem {
  id: string;
  label: ReactNode;
}

export interface ViewTabsProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  items: ViewTabItem[];
  activeId: string;
  onChange: (id: string) => void;
  ariaLabel?: string;
}

export function ViewTabs({
  items,
  activeId,
  onChange,
  ariaLabel = "Main views",
  className,
  ...props
}: ViewTabsProps) {
  return (
    <nav className={cn("view-tabs", className)} aria-label={ariaLabel} {...props}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={activeId === item.id ? "is-active" : undefined}
          aria-current={activeId === item.id ? "page" : undefined}
          onClick={() => onChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
