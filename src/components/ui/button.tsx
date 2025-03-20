import { ButtonHTMLAttributes } from "react";
import { PlusCircle, Trash } from "phosphor-react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasIcon?: boolean;
  iconPosition?: "left" | "right";
  buttonType?: "delete" | "create";
}

export function Button({
  hasIcon,
  buttonType,
  iconPosition,
  children,
  ...rest
}: ButtonProps) {
  const Icon = buttonType === "delete" ? Trash : PlusCircle;
  return (
    <button {...rest} className={styles["custom-button"]}>
      {hasIcon && iconPosition === "left" && <Icon size={16} />}
      {children}
      {hasIcon && iconPosition === "right" && <Icon size={16} />}
    </button>
  );
}
