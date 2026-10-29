import type { CSSProperties } from "react";
import { cx } from "../../lib/cx";
import styles from "./Skeleton.module.css";

interface SkeletonProps {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  radius?: CSSProperties["borderRadius"];
  className?: string;
}

/** Shimmering placeholder shown while content loads. */
export default function Skeleton({
  width = "100%",
  height = 16,
  radius = 8,
  className,
}: SkeletonProps) {
  return (
    <span
      className={cx(styles.skeleton, className)}
      style={{ width, height, borderRadius: radius }}
      aria-hidden="true"
    />
  );
}
