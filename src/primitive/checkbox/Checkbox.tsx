import React, { memo } from "react";
import styled from "styled-components";

interface CheckboxProps {
  onChange: any;
  checked: boolean;
}

const Checkbox = ({ onChange, checked }: CheckboxProps) => {
  return (
    <CheckboxWrapper type="checkbox" checked={checked} onChange={onChange} />
  );
};

export default memo(Checkbox);

const CheckboxWrapper = styled("input")`
  width: 15px;
  height: 15px;
`;
