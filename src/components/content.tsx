import styles from "./content.module.css";
import { Display } from "./ui/display.tsx";
import { EmptyTaskList } from "./ui/empty.tsx";
import { Task } from "./ui/task.tsx";
import { TaskPropTypes } from "../types.ts";

interface ContentProps {
  tasks?: TaskPropTypes[];
  updateTask?(taskId: string, updatedProps: Partial<TaskPropTypes>): void;
  deleteTask?(taskId: string): void;
}

export function Content({ tasks, updateTask, deleteTask }: ContentProps) {
  const tasksDone = tasks?.filter((task) => task.checked);
  return (
    <main className={styles["content-wrapper"]}>
      <div className={styles["display-container"]}>
        <Display
          title="Tarefas criadas"
          displayType="total"
          totalTasks={tasks?.length}
          tasksDone={tasksDone?.length}
          style={{ color: "#4ea8de" }}
        />
        <Display
          title="Concluídas"
          displayType="done"
          totalTasks={tasks?.length}
          tasksDone={tasksDone?.length}
          style={{ color: "#8a84fa" }}
        />
      </div>
      {tasks && tasks.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              description={task.description}
              checked={task.checked}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      ) : (
        <EmptyTaskList />
      )}
    </main>
  );
}
