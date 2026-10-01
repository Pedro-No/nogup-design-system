import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../utils/classNames";

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
    <header className={classNames("topbar", className)} {...props}>
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
      </div>
      {actions}
    </header>
  );
}
