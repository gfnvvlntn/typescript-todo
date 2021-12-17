import React, { memo } from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: any;
  children: string;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

export default memo(Button);

const ButtonWrapper = styled("button")`
  background-color: white;
  color: #3c3c3c;
  transition: all 0.5s;
  position: relative;
  padding: 10px 25px;
  outline: none;
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  border-radius: 4px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
  }
  &:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    transform: scale(1.2, 1.2);
  }
  &:hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }
`;
