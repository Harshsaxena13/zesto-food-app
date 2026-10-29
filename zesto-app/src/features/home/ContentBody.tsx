import Hero from "./sections/Hero";
import StatsBar from "./sections/StatsBar";
import Offers from "./sections/Offers";
import Categories from "./sections/Categories";
import TrendingDishes from "./sections/TrendingDishes";
import RestaurantGrid from "./sections/RestaurantGrid";
import WhyZesto from "./sections/WhyZesto";
import PartnerCta from "./sections/PartnerCta";
import styles from "./ContentBody.module.css";

export default function ContentBody() {
  return (
    <main className={styles.content}>
      <Hero />
      <StatsBar />
      <Offers />
      <Categories />
      <TrendingDishes />
      <RestaurantGrid />
      <WhyZesto />
      <PartnerCta />
    </main>
  );
}
