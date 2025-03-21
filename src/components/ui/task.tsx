import { IconButton } from "./button.tsx";
import styles from "./task.module.css";
import { TaskPropTypes } from "../../types.ts";

interface TaskProps {
  id: string;
  description: string;
  checked: boolean;
  updateTask?(taskId: string, updatedProps: Partial<TaskPropTypes>): void;
  deleteTask?(taskId: string): void;
}

export function Task({
  id,
  description,
  checked,
  updateTask,
  deleteTask,
}: TaskProps) {
  const handleChangeCheck = () => {
    if (updateTask) {
      updateTask(id, { checked: !checked });
    }
  };

  const handleDeleteTask = () => {
    if (deleteTask) {
      deleteTask(id);
    }
  };
  return (
    <div className={styles.task}>
      <div>
        <input type="checkbox" checked={checked} onChange={handleChangeCheck} />
        <p className={checked ? styles["task-deleted"] : ""}>{description}</p>
      </div>
      <IconButton onClick={handleDeleteTask} />
    </div>
  );
}
