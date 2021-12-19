import React from "react";
import styled from "styled-components";

interface FlexProps {
  children: JSX.Element | JSX.Element[];
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  gap?: string;
}

const Flex = (props: FlexProps) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Flex;

const Container = styled.div<FlexProps>`
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  gap: ${(props) => (props.gap ? props.gap : "0px")};
`;
