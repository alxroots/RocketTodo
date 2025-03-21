import styles from "./input.module.css";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...rest }: InputProps) {
  return (
    <label className={styles["input-wrapper"]}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={rest.onChange}
        value={rest.value}
      />
    </label>
  );
}
