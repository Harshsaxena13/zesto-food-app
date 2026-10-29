import type { ComponentPropsWithRef } from "react";
import { cx } from "../../lib/cx";
import styles from "./PriceTag.module.css";

/** Brand-coloured price, e.g. `<PriceTag>₹320</PriceTag>`. */
export default function PriceTag({ className, ...props }: ComponentPropsWithRef<"span">) {
  return <span className={cx(styles.price, className)} {...props} />;
}
