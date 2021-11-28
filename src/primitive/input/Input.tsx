import React, { memo } from "react";
import styles from "./input.module.css";

interface InputProps {
  id?: number;
  value: string;
  onChange: any;
  onBlur?: any;
  placeholder?: string;
}

const Input = ({ value, id, onChange, onBlur, placeholder }: InputProps) => {
  return (
    <input
      className={styles.inp}
      type="text"
      value={value}
      id={id?.toString()}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
};

export default memo(Input);
