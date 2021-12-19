import React from "react";
import { TodoTypes } from "types";
import { useAppSelector } from "store/hooks";
import HistoryTodoList from "component/history-todo-list/HistoryTodoList";
import styled from "styled-components";

const HistoryTodos = () => {
  const historyTodos: TodoTypes[] = useAppSelector(
    (state) => state.history.historyTodo
  );

  return (
    <Container>
      <HistoryTodoList historyTodos={historyTodos} />
    </Container>
  );
};

export default React.memo(HistoryTodos);

const Container = styled("div")`
  max-width: 600px;
  width: 100%;
  padding: 0 40px;
`;
