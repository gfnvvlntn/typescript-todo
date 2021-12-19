import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as HomePage } from "assets/image/icons/home_black.svg";
import { ReactComponent as TodosPage } from "assets/image/icons/edit_note_black.svg";
import { ReactComponent as HistoryTodosPage } from "assets/image/icons/history_black.svg";
import Flex from "primitive/flex/Flex";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Flex gap={"20px"}>
        <Link to="/">
          <HomePage />
        </Link>
        <Link to="/todo">
          <TodosPage />
        </Link>
        <Link to="/history-todos">
          <HistoryTodosPage />
        </Link>
      </Flex>
    </NavbarContainer>
  );
};

export default React.memo(Navbar);

const NavbarContainer = styled("nav")`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
