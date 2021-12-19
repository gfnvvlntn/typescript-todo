import React from "react";

import CreateTodoForm from "form/CreateTodoForm";
import BodyTodos from "component/todo-title/TodoTitle";
import TodoList from "component/todo-list/todo-list/TodoList";

import styled from "styled-components";
import { TodoTypes } from "types";
import { useAppSelector } from "store/hooks";

const Todos = () => {
  const todos: TodoTypes[] = useAppSelector((state) => state.todos.todoList);

  return (
    <Container>
      <CreateTodoForm />
      <BodyTodos />
      <TodoList todos={todos} />
    </Container>
  );
};

export default React.memo(Todos);

const Container = styled("div")`
  max-width: 600px;
  width: 100%;
  padding: 0 40px;
`;
