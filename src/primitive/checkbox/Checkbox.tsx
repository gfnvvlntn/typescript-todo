import React, { memo } from "react";
import styled from "styled-components";
import { ReactComponent as Off } from "assets/image/icons/check_box_outline_blank_white.svg";
import { ReactComponent as On } from "assets/image/icons/check_box_white.svg";
import { ReactComponent as OffBlack } from "assets/image/icons/check_box_outline_blank_black.svg";
import { ReactComponent as OnBlack } from "assets/image/icons/check_box_black.svg";

interface CheckboxProps {
  onClick: any;
  isChecked: boolean;
  variant: string;
}

const Checkbox = ({ onClick, isChecked, variant }: CheckboxProps) => {
  return (
    <CheckboxWrapper onClick={onClick}>
      {variant === "white" ? (
        isChecked ? (
          <On />
        ) : (
          <Off />
        )
      ) : isChecked ? (
        <OnBlack />
      ) : (
        <OffBlack />
      )}
    </CheckboxWrapper>
  );
};

export default memo(Checkbox);

const CheckboxWrapper = styled("button")`
  background-color: inherit;
  border: none;
  cursor: pointer;
`;
