import React from "react";

import CreateTodoForm from "form/CreateTodoForm";
import BodyTodos from "component/BodyTodos";
import TodoList from "component/todo-list/TodoList";

import styles from "./todo.module.css";

const Todos = () => {
  return (
    <div className={styles.container}>
      <CreateTodoForm />
      <BodyTodos />
      <TodoList />
    </div>
  );
};

export default React.memo(Todos);
