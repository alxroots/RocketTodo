import { IconButton } from "./button.tsx";
import styles from "./task.module.css";

interface TaskProps {
  description: string;
  checked: boolean;
}

export function Task({ description }: TaskProps) {
  return (
    <div className={styles.task}>
      <div>
        <input type="checkbox" />
        <p>{description}</p>
      </div>
      <IconButton />
    </div>
  );
}
