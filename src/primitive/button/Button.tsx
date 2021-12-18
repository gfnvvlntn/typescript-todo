import React, { memo } from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: any;
  children: any;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

export default memo(Button);

const ButtonWrapper = styled("button")`
  background-color: inherit;
  color: #3c3c3c;
  transition: all 0.5s;
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;
