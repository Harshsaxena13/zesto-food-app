import ArrowRightIcon from "../../../components/icons/ArrowRightIcon";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import { Eyebrow } from "../../../components/ui/SectionHeader";
import { whyUs } from "../data";
import styles from "./WhyZesto.module.css";

export default function WhyZesto() {
  return (
    <section className={styles.why}>
      <div className={styles.inner}>
        <div className={styles.textCol}>
          <Eyebrow>Why Zesto</Eyebrow>
          <h2 className={styles.title}>
            Built for the love
            <br />
            of good food.
          </h2>
          <p className={styles.desc}>
            We obsess over every detail — from the moment you tap "Order" to
            the first bite. Fast, safe, and always delicious.
          </p>
          <Button>
            Learn More <ArrowRightIcon />
          </Button>
        </div>
        <div className={styles.grid}>
          {whyUs.map(({ icon: Icon, title, desc }, i) => (
            <Card
              key={title}
              className={styles.card}
              style={{ "--delay": `${i * 100}ms` }}
            >
              <div className={styles.cardIcon}>
                <Icon />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
