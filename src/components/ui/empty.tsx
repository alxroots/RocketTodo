import image from "../../assets/clipboard.svg";
import styles from "./empty.module.css";

export function EmptyTaskList() {
  return (
    <div className={styles["empty-task-wrapper"]}>
      <img src={image} alt="empty task list" />
      <p className={styles.title}>Você ainda não tem tarefas cadastradas</p>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
