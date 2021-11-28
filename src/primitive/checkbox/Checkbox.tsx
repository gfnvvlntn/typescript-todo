import React, { memo } from "react";
import "./checkbox.module.css";

interface CheckboxProps {
  onChange: any;
  id?: number;
  checked: boolean;
}

const Checkbox = ({ onChange, id, checked }: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      id={id?.toString()}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default memo(Checkbox);
