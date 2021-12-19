import React from "react";
import { TodoTypes } from "types";
import HistoryTodoItem from "./history-todo-item/HistoryTodoItem";

interface HistoryTodoListProps {
  historyTodos: TodoTypes[];
}

const HistoryTodoList = ({ historyTodos }: HistoryTodoListProps) => {
  return (
    <>
      {historyTodos.map((el) => {
        return <HistoryTodoItem key={el.id} historyTodoElement={el} />;
      })}
    </>
  );
};

export default React.memo(HistoryTodoList);
