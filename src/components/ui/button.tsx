import { ButtonHTMLAttributes } from "react";
import { PlusCircle, Trash } from "phosphor-react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasIcon?: boolean;
  iconPosition?: "left" | "right";
}

export function Button({
  hasIcon,
  iconPosition,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} className={styles["custom-button"]}>
      {hasIcon && iconPosition === "left" && <PlusCircle size={16} />}
      {children}
      {hasIcon && iconPosition === "right" && <PlusCircle size={16} />}
    </button>
  );
}

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton({ ...rest }: IconButtonProps) {
  return (
    <button {...rest} className={styles["icon-button"]}>
      <Trash size={16} />
    </button>
  );
}
