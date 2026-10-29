import type { ComponentPropsWithRef } from "react";
import { cx } from "../../lib/cx";
import styles from "./Badge.module.css";

/** Small solid label. Override the colour with `style={{ background }}`. */
export default function Badge({ className, ...props }: ComponentPropsWithRef<"span">) {
  return <span className={cx(styles.badge, className)} {...props} />;
}
