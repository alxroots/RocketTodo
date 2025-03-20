import logo from "../assets/rocket.svg";
import styles from "./header.module.css";

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
    </header>
  );
}
