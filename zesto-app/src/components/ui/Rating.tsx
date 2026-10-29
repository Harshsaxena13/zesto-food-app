import StarIcon from "../icons/StarIcon";
import { cx } from "../../lib/cx";
import Chip from "./Chip";
import styles from "./Rating.module.css";

interface RatingProps {
  value: number;
  className?: string;
}

/** Star rating shown as an amber Chip. */
export default function Rating({ value, className }: RatingProps) {
  return (
    <Chip className={cx(styles.rating, className)}>
      <StarIcon />
      {value}
    </Chip>
  );
}
