import type { HTMLAttributes } from "react";
import { classNames } from "../utils/classNames";

/** Centered auth screen wrapper (`.auth-shell`). */
export interface AuthLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export function AuthLayout({ className, ...props }: AuthLayoutProps) {
  return <div className={classNames("auth-shell", className)} {...props} />;
}
