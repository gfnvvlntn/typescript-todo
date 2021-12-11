import React, { memo } from "react";
import "./checkbox.module.css";

interface CheckboxProps {
  onChange: any;
  checked: boolean;
}

const Checkbox = ({ onChange, checked }: CheckboxProps) => {
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};

export default memo(Checkbox);
