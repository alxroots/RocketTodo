import styles from "./display.module.css";
import { HTMLProps } from "react";

interface DisplayProps extends HTMLProps<HTMLDivElement> {
  title: string;
  totalTasks?: number;
  tasksDone?: number;
  displayType?: "total" | "done";
}

export function Display({
  title,
  totalTasks,
  tasksDone,
  displayType,
  ...rest
}: DisplayProps) {
  return (
    <div {...rest} className={styles["display-wrapper"]}>
      <p className={styles.title}>{title}</p>
      <div>
        {displayType === "total" ? (
          <span className={styles["display-value"]}>
            {totalTasks ? totalTasks : 0}
          </span>
        ) : (
          <span className={styles["display-value"]}>
            {totalTasks ? `${tasksDone} de ${totalTasks}` : 0}
          </span>
        )}
      </div>
    </div>
  );
}
