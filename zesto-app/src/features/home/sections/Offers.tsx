import SectionHeader from "../../../components/ui/SectionHeader";
import { cx } from "../../../lib/cx";
import { offers } from "../data";
import layout from "./SectionLayout.module.css";
import styles from "./Offers.module.css";

export default function Offers() {
  return (
    <section className={cx(layout.section, styles.offers)}>
      <div className={layout.inner}>
        <SectionHeader
          eyebrow="Limited Time"
          title="Deals You Can't Miss"
          cta="All Offers"
        />
        <div className={styles.grid}>
          {offers.map((o, i) => (
            <div
              key={o.code}
              className={styles.card}
              style={{ background: o.bg, "--delay": `${i * 120}ms` }}
            >
              <div className={styles.cardInner}>
                <div>
                  <p className={cx(styles.headline, o.light && styles.headlineLight)}>
                    {o.headline}
                  </p>
                  <p className={cx(styles.sub, o.light && styles.subLight)}>
                    {o.sub}
                  </p>
                </div>
                <div className={cx(styles.codeWrap, o.light && styles.codeWrapLight)}>
                  <span className={styles.codeLabel}>USE CODE</span>
                  <span className={styles.code}>{o.code}</span>
                </div>
              </div>
              <div className={styles.bgCircle} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
