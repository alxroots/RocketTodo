import logo from "../assets/rocket.svg";
import styles from "./header.module.css";
import { Input } from "./ui/input.tsx";
import { Button } from "./ui/button.tsx";

export function Header() {
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
        <Input />
        <Button hasIcon buttonType="create" iconPosition="right">
          Criar
        </Button>
      </div>
    </header>
  );
}
