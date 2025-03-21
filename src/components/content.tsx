import styles from "./content.module.css";
import { Display } from "./ui/display.tsx";
import { EmptyTaskList } from "./ui/empty.tsx";
import { Task } from "./ui/task.tsx";

export type TaskPropTypes = {
  description: string;
  checked: boolean;
};

interface ContentProps {
  tasks?: TaskPropTypes[];
}

export function Content({ tasks }: ContentProps) {
  return (
    <main className={styles["content-wrapper"]}>
      <div className={styles["display-container"]}>
        <Display
          title="Tarefas criadas"
          value={tasks?.length || 0}
          style={{ color: "#4ea8de" }}
        />
        <Display title="Concluídas" value={0} style={{ color: "#8a84fa" }} />
      </div>
      {tasks && tasks.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {tasks.map((task, index) => (
            <Task
              key={index}
              description={task.description}
              checked={task.checked}
            />
          ))}
        </div>
      ) : (
        <EmptyTaskList />
      )}
    </main>
  );
}
