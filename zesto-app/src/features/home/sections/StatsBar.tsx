import { Fragment } from "react";
import { cx } from "../../../lib/cx";
import { useInView } from "../../../lib/hooks/useInView";
import styles from "./StatsBar.module.css";

const stats = [
  { val: "500+", label: "Restaurants" },
  { val: "30 min", label: "Avg Delivery" },
  { val: "5M+", label: "Happy Eaters" },
  { val: "50+", label: "Cuisines" },
  { val: "4.8★", label: "App Rating" },
  { val: "24/7", label: "Support" },
];

export default function StatsBar() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} className={cx(styles.bar, inView && styles.visible)}>
      {stats.map(({ val, label }, i) => (
        <Fragment key={val}>
          <div className={styles.item} style={{ "--i": i }}>
            <span className={styles.value}>{val}</span>
            <span className={styles.label}>{label}</span>
          </div>
          {i < stats.length - 1 && (
            <span className={styles.divider} aria-hidden="true">
              ·
            </span>
          )}
        </Fragment>
      ))}
    </section>
  );
}
