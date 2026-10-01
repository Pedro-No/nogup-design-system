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
      {eyebrow ? <p className="eyebrow topbar-eyebrow">{eyebrow}</p> : null}
      <div className="topbar-main">
        <h1 className="topbar-title">{title}</h1>
        {actions ? <div className="topbar-actions">{actions}</div> : null}
      </div>
    </header>
  );
}
