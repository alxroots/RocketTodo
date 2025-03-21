import { IconButton } from "./button.tsx";
import styles from "./task.module.css";

interface TaskProps {
  description: string;
}
export function Task({ description }: TaskProps) {
  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <p>{description}</p>
      <IconButton />
    </div>
  );
}
