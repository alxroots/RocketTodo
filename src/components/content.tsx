import styles from "./content.module.css";
import { Display } from "./ui/display.tsx";

export function Content() {
  return (
    <main className={styles["content-wrapper"]}>
      <div className={styles["display-container"]}>
        <Display
          title="Tarefas criadas"
          value={0}
          style={{ color: "#4ea8de" }}
        />
        <Display title="Concluídas" value={0} style={{ color: "#8a84fa" }} />
      </div>
    </main>
  );
}
