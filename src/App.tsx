import { useState } from "react";
import { Header } from "./components/header.tsx";
import { Content } from "./components/content.tsx";
import { TaskPropTypes } from "./types.ts";

function App() {
  const [tasks, setTasks] = useState<TaskPropTypes[] | undefined>(undefined);

  const updateTask = (taskId: string, updatedProps: Partial<TaskPropTypes>) => {
    setTasks((originalTasks) =>
      originalTasks?.map((task) =>
        task.id === taskId ? { ...task, ...updatedProps } : task,
      ),
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks((originalTasks) =>
      originalTasks?.filter((task) => task.id !== taskId),
    );
  };

  return (
    <>
      <Header tasks={tasks} setTasks={setTasks} />
      <Content tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </>
  );
}

export default App;
