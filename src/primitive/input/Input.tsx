import React, { memo } from "react";
import styled from "styled-components";

interface InputProps {
  id?: number;
  value: string;
  onChange: any;
  onBlur?: any;
  placeholder?: string;
}

const Input = ({ value, id, onChange, onBlur, placeholder }: InputProps) => {
  return (
    <InputWrapper
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

const InputWrapper = styled("input")`
  width: 70%;
  border: none;
  background-color: inherit;
  color: white;
  outline: none;
  font-size: 14px;
  &::placeholder {
    font-size: 10px;
  }
`;
