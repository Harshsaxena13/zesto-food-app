import StarIcon from "../../../../components/icons/StarIcon";
import PriceTag from "../../../../components/ui/PriceTag";
import { cx } from "../../../../lib/cx";
import styles from "./HeroVisual.module.css";

/** Featured dish card with floating badges; slides in when `visible`. */
export default function HeroVisual({ visible }: { visible: boolean }) {
  return (
    <div className={cx(styles.visual, visible && styles.visible)}>
      <div className={styles.card}>
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
          alt="Featured dish"
          className={styles.cardImg}
        />
        <div className={styles.label}>
          <span className={styles.emoji}>🥗</span>
          <div>
            <p className={styles.name}>Poke Bowl</p>
            <p className={styles.rest}>Bowl Theory</p>
          </div>
          <PriceTag className={styles.price}>₹380</PriceTag>
        </div>
      </div>
      {/* Floating badges */}
      <div className={cx(styles.badge, styles.badgeTime)}>
        <span>⚡</span>
        <span>22 min</span>
      </div>
      <div className={cx(styles.badge, styles.badgeRating)}>
        <StarIcon />
        <span>4.9 Rating</span>
      </div>
      <div className={cx(styles.badge, styles.badgeDeal)}>
        <span>🎉</span>
        <span>50% OFF</span>
      </div>
    </div>
  );
}
