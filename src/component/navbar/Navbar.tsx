import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as HomePage } from "../../assets/image/icons/home_black.svg";
import { ReactComponent as TodosPage } from "../../assets/image/icons/edit_note_black.svg";

const Navbar = () => {
  return (
    <Container>
      <Link to="/">
        <HomePage />
      </Link>
      <Link to="/todo">
        <TodosPage />
      </Link>
    </Container>
  );
};

export default React.memo(Navbar);

const Container = styled("nav")`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
