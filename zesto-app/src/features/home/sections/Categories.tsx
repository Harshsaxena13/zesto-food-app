import { useState } from "react";
import SectionHeader from "../../../components/ui/SectionHeader";
import { cx } from "../../../lib/cx";
import { categories } from "../data";
import layout from "./SectionLayout.module.css";
import styles from "./Categories.module.css";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState("Pizza");

  return (
    <section className={cx(layout.section, styles.categories)}>
      <div className={layout.inner}>
        <SectionHeader eyebrow="Browse by Mood" title="What are you craving?" />
        <div className={styles.list}>
          {categories.map(({ emoji, label, color }) => (
            <button
              key={label}
              type="button"
              className={cx(styles.pill, activeCategory === label && styles.pillActive)}
              style={{ "--cat-bg": color }}
              onClick={() => setActiveCategory(label)}
            >
              <span className={styles.emoji}>{emoji}</span>
              <span className={styles.label}>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
