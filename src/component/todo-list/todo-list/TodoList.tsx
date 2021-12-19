import React from "react";
import { TodoTypes } from "types";
import TodoItem from "../todo-item/TodoItem";

type TodoListProps = {
  todos: TodoTypes[];
};

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <>
      {todos.map((el) => {
        return <TodoItem key={el.id} todoElement={el} />;
      })}
    </>
  );
};

export default React.memo(TodoList);
