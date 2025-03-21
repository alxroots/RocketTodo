import styles from "./content.module.css";
import { Display } from "./ui/display.tsx";
import { EmptyTaskList } from "./ui/empty.tsx";
import { Task } from "./ui/task.tsx";

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
      <EmptyTaskList />
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Task description="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
        <Task description="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
        <Task description="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
      </div>
    </main>
  );
}
