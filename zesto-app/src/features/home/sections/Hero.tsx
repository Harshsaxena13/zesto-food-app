import ArrowRightIcon from "../../../components/icons/ArrowRightIcon";
import Button from "../../../components/ui/Button";
import { cx } from "../../../lib/cx";
import { useInView } from "../../../lib/hooks/useInView";
import HeroVisual from "./hero/HeroVisual";
import styles from "./Hero.module.css";

export default function Hero() {
  const [ref, inView] = useInView<HTMLElement>(0.05);

  return (
    <section ref={ref} className={cx(styles.hero, inView && styles.visible)}>
      {/* Floating blobs */}
      <div className={cx(styles.blob, styles.blob1)} aria-hidden="true" />
      <div className={cx(styles.blob, styles.blob2)} aria-hidden="true" />
      <div className={cx(styles.blob, styles.blob3)} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.text}>
          <span className={styles.pill}>
            🔥 Over 500 restaurants delivering now
          </span>
          <h1 className={styles.headline}>
            Hungry?
            <br />
            <span className={styles.highlight}>We've got you</span>
            <br />
            covered. 🍽️
          </h1>
          <p className={styles.sub}>
            From street-side chaats to five-star chefs—
            <br />
            delivered hot at your door in 30 minutes or less.
          </p>
          <div className={styles.actions}>
            <Button>
              Order Now <ArrowRightIcon />
            </Button>
            <Button variant="ghost">Explore Cuisine</Button>
          </div>
          <div className={styles.trust}>
            <div className={styles.avatars}>
              {"🧑🏽🧕🏻👨🏾🧑🏼👩🏿".match(/\p{Emoji_Presentation}/gu)?.map((e, i) => (
                <span key={i} className={styles.avatar} style={{ "--i": i }}>
                  {e}
                </span>
              ))}
            </div>
            <p className={styles.trustText}>
              <strong>5M+ orders</strong> delivered this month
            </p>
          </div>
        </div>

        <HeroVisual visible={inView} />
      </div>
    </section>
  );
}
