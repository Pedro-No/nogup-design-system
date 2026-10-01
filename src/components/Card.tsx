import type { HTMLAttributes } from "react";
import { classNames } from "../utils/classNames";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return <div className={classNames("card", className)} {...props} />;
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={classNames("card-header", className)} {...props} />;
}
