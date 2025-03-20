import styles from "./input.module.css";

export function Input() {
  return (
    <label className={styles["input-wrapper"]}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
    </label>
  );
}
