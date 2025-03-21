import styles from "./display.module.css";
import { HTMLProps } from "react";

interface DisplayProps extends HTMLProps<HTMLDivElement> {
  title: string;
  value: number;
}

export function Display({ title, value, ...rest }: DisplayProps) {
  return (
    <div {...rest} className={styles["display-wrapper"]}>
      <p className={styles.title}>{title}</p>
      <div>
        <span className={styles["display-value"]}>{value}</span>
      </div>
    </div>
  );
}
