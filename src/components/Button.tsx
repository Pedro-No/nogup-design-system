import type { ButtonHTMLAttributes } from "react";
import { classNames } from "../utils/classNames";

export type ButtonVariant = "primary" | "ghost" | "small" | "link";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn primary",
  ghost: "btn ghost",
  small: "btn small",
  link: "link-btn",
};

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={classNames(variantClass[variant], className)}
      {...props}
    />
  );
}
