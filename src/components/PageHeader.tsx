import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

export interface PageHeaderProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: ReactNode;
  title: ReactNode;
  actions?: ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  actions,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <header className={cn("topbar", className)} {...props}>
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
      </div>
      {actions}
    </header>
  );
}
