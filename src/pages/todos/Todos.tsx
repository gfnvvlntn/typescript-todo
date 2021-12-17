import React from "react";

import CreateTodoForm from "form/CreateTodoForm";
import BodyTodos from "component/todo-title/TodoTitle";
import TodoList from "component/todo-list/todo-list/TodoList";

import styled from "styled-components";

const Todos = () => {
  return (
    <TodoContainer>
      <CreateTodoForm />
      <BodyTodos />
      <TodoList />
    </TodoContainer>
  );
};

export default React.memo(Todos);

const TodoContainer = styled("div")`
  max-width: 1000px;
  width: 100%;
  padding: 0 40px;
`;
