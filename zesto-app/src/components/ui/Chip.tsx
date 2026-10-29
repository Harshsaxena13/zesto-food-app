import type { ComponentPropsWithRef } from "react";
import { cx } from "../../lib/cx";
import styles from "./Chip.module.css";

/** Compact pill for metadata such as delivery time or price. */
export default function Chip({ className, ...props }: ComponentPropsWithRef<"span">) {
  return <span className={cx(styles.chip, className)} {...props} />;
}
