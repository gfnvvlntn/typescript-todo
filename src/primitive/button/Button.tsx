import React, { memo } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  onClick: any;
  children: string;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default memo(Button);