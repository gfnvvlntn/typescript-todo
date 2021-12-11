import React from "react";
import { useAppDispatch } from "store/hooks";
import { selectTodoItem, deleteTodoItem } from "store/slice";

import EditTodoItem from "./EditTodoItem";
import Checkbox from "primitive/checkbox/Checkbox";
import Button from "primitive/button/Button";
import { TodoTypes } from "types";

import styles from "./todoList.module.css";

type TodoItemProps = {
  todoElement: TodoTypes;
};

const TodoItem = ({ todoElement }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectTodoItem({ checked: e.target.checked, id: todoElement.id }));
  };

  const onDelete = () => {
    dispatch(deleteTodoItem(todoElement.id));
  };

  return (
    <li className={styles.todoList}>
      <EditTodoItem todoElement={todoElement} />
      <div className={styles.todoButtons}>
        <Checkbox
          onChange={handleCheckboxChange}
          checked={todoElement.isDone}
        />
        <Button onClick={onDelete}>DELETE</Button>
      </div>
    </li>
  );
};

export default React.memo(TodoItem);
