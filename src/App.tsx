import { useState } from "react";
import { Header } from "./components/header.tsx";
import { Content, TaskPropTypes } from "./components/content.tsx";

function App() {
  const [tasks, setTasks] = useState<TaskPropTypes[] | undefined>(undefined);
  console.log("tasks", tasks);
  return (
    <>
      <Header tasks={tasks} setTasks={setTasks} />
      <Content tasks={tasks} />
    </>
  );
}

export default App;
