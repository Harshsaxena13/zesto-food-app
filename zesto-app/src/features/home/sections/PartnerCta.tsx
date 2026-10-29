import ArrowRightIcon from "../../../components/icons/ArrowRightIcon";
import Button from "../../../components/ui/Button";
import { cx } from "../../../lib/cx";
import styles from "./PartnerCta.module.css";

export default function PartnerCta() {
  return (
    <section className={styles.banner}>
      <div className={styles.blobs} aria-hidden="true">
        <div className={cx(styles.blob, styles.blob1)} />
        <div className={cx(styles.blob, styles.blob2)} />
      </div>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>🚀 Partner with Zesto</p>
        <h2 className={styles.title}>
          Own a restaurant?
          <br />
          Reach thousands of new customers.
        </h2>
        <p className={styles.sub}>
          Join 500+ restaurants already growing with us.
        </p>
        <div className={styles.actions}>
          <Button variant="dark">
            Register Your Restaurant <ArrowRightIcon />
          </Button>
          <Button variant="ghost" className={styles.ghostOnDark}>
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
