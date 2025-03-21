import logo from "../assets/rocket.svg";
import styles from "./header.module.css";
import { Input } from "./ui/input.tsx";
import { Button } from "./ui/button.tsx";
import { TaskPropTypes } from "./content.tsx";
import { ChangeEvent, useState } from "react";

interface HeaderProps {
  tasks?: TaskPropTypes[];
  setTasks(tasks: TaskPropTypes[]): void;
}

export function Header({ tasks = [], setTasks }: HeaderProps) {
  const [newTask, setNewTask] = useState<TaskPropTypes | undefined>(undefined);

  const handleCreateTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask({ description: "", checked: false });
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask({ description: event.target.value, checked: false });
  };

  return (
    <header className={styles["header-background"]}>
      <div className={styles["title-wrapper"]}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <h1 className={styles.title}>
          <span>to</span>do
        </h1>
      </div>
      <div className={styles["action-wrapper"]}>
        <Input onChange={handleInputChange} value={newTask?.description} />
        <Button hasIcon iconPosition="right" onClick={handleCreateTask}>
          Criar
        </Button>
      </div>
    </header>
  );
}
