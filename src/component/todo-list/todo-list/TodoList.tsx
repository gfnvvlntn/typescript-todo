import React from "react";
import { useAppSelector } from "store/hooks";
import { TodoTypes } from "types";
import TodoItem from "../todo-item/TodoItem";

const TodoList = () => {
  const todos: TodoTypes[] = useAppSelector((state) => state.todos.todoList);
  return (
    <>
      {todos.map((el) => {
        return <TodoItem key={el.id} todoElement={el} />;
      })}
    </>
  );
};

export default React.memo(TodoList);
