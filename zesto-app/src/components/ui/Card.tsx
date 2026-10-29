import type { ComponentPropsWithRef } from "react";
import { cx } from "../../lib/cx";
import styles from "./Card.module.css";

/** Raised surface. Layout, motion and hover effects come from `className`. */
export default function Card({ className, ...props }: ComponentPropsWithRef<"div">) {
  return <div className={cx(styles.card, className)} {...props} />;
}
