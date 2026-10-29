import { useState } from "react";
import ClockIcon from "../../../components/icons/ClockIcon";
import TagIcon from "../../../components/icons/TagIcon";
import Badge from "../../../components/ui/Badge";
import Card from "../../../components/ui/Card";
import Chip from "../../../components/ui/Chip";
import Rating from "../../../components/ui/Rating";
import SectionHeader from "../../../components/ui/SectionHeader";
import { cx } from "../../../lib/cx";
import { useInView } from "../../../lib/hooks/useInView";
import { restaurants, type Restaurant } from "../data";
import layout from "./SectionLayout.module.css";
import styles from "./RestaurantGrid.module.css";

function RestaurantCard({ restaurant: r, delay }: { restaurant: Restaurant; delay: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [liked, setLiked] = useState(false);

  return (
    <Card
      ref={ref}
      className={cx(styles.card, inView && styles.cardVisible)}
      style={{ "--delay": `${delay}ms` }}
    >
      <div className={styles.imgWrap}>
        <img src={r.image} alt={r.name} className={styles.img} loading="lazy" />
        <Badge className={styles.tag} style={{ background: r.tagColor }}>
          {r.tag}
        </Badge>
        <button
          type="button"
          className={cx(styles.like, liked && styles.likeActive)}
          onClick={() => setLiked((l) => !l)}
          aria-label="Save restaurant"
        >
          {liked ? "❤️" : "🤍"}
        </button>
        {r.offer && (
          <div className={styles.offer}>
            <TagIcon />
            {r.offer}
          </div>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{r.name}</h3>
        <p className={styles.cuisine}>{r.cuisine}</p>
        <div className={styles.meta}>
          <Rating value={r.rating} />
          <Chip>
            <ClockIcon />
            {r.time} min
          </Chip>
          <Chip>{r.price} for two</Chip>
        </div>
      </div>
    </Card>
  );
}

export default function RestaurantGrid() {
  return (
    <section className={cx(layout.section, styles.restaurants)}>
      <div className={layout.inner}>
        <SectionHeader eyebrow="Top Picks" title="Restaurants Near You" cta="See All" />
        <div className={styles.grid}>
          {restaurants.map((r, i) => (
            <RestaurantCard key={r.id} restaurant={r} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
