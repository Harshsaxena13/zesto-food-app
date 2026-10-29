import { useState } from "react";
import Card from "../../../components/ui/Card";
import PriceTag from "../../../components/ui/PriceTag";
import SectionHeader from "../../../components/ui/SectionHeader";
import { cx } from "../../../lib/cx";
import { useInView } from "../../../lib/hooks/useInView";
import { trendingDishes, type Dish } from "../data";
import layout from "./SectionLayout.module.css";
import styles from "./TrendingDishes.module.css";

function DishCard({ dish, index }: { dish: Dish; index: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [added, setAdded] = useState(false);

  return (
    <Card
      ref={ref}
      className={cx(styles.card, inView && styles.cardVisible)}
      style={{ "--delay": `${index * 80}ms` }}
    >
      <div className={styles.imgWrap}>
        <img src={dish.image} alt={dish.name} className={styles.img} loading="lazy" />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{dish.name}</p>
        <p className={styles.rest}>{dish.rest}</p>
        <div className={styles.foot}>
          <PriceTag>{dish.price}</PriceTag>
          <span className={styles.cal}>{dish.cal}</span>
        </div>
      </div>
      <button
        type="button"
        className={cx(styles.add, added && styles.addDone)}
        onClick={() => setAdded((a) => !a)}
      >
        {added ? "✓" : "+"}
      </button>
    </Card>
  );
}

export default function TrendingDishes() {
  return (
    <section className={cx(layout.section, styles.dishes)}>
      <div className={layout.inner}>
        <SectionHeader eyebrow="Right Now" title="Trending Dishes 🔥" cta="View All" />
        <div className={styles.list}>
          {trendingDishes.map((d, i) => (
            <DishCard key={d.name} dish={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
