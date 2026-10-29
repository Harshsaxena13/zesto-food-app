import type { ComponentPropsWithRef } from "react";
import { cx } from "../../lib/cx";
import styles from "./Button.module.css";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  /** `dark` is the white pill used as the primary action on dark surfaces. */
  variant?: "primary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(styles.button, styles[variant], styles[size], className)}
      {...props}
    />
  );
}
