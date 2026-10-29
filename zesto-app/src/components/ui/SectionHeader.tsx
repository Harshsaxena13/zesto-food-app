import type { ReactNode } from "react";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import styles from "./SectionHeader.module.css";

/** Small uppercase label above a heading. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className={styles.eyebrow}>{children}</span>;
}

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  cta?: string;
}

export default function SectionHeader({ eyebrow, title, cta }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {cta && (
        <button type="button" className={styles.cta}>
          {cta} <ArrowRightIcon />
        </button>
      )}
    </div>
  );
}
