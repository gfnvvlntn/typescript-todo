import React from "react";
import Todos from "pages/todos/Todos";
import styled from "styled-components";

const App = () => {
  return (
    <TodosContainer>
      <Todos />
    </TodosContainer>
  );
};

export default App;

const TodosContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;
