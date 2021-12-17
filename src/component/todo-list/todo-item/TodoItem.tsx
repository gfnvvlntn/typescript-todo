import React from "react";
import { useAppDispatch } from "store/hooks";
import { selectTodoItem, deleteTodoItem } from "store/slice";

import EditTodoItem from "../edit-todo-item/EditTodoItem";
import Checkbox from "primitive/checkbox/Checkbox";
import Button from "primitive/button/Button";
import { TodoTypes } from "types";
import styled from "styled-components";

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
    <TodoElement>
      <EditTodoItem todoElement={todoElement} />
      <ActionTodoElement>
        <Checkbox
          onChange={handleCheckboxChange}
          checked={todoElement.isDone}
        />
        <Button onClick={onDelete}>DELETE</Button>
      </ActionTodoElement>
    </TodoElement>
  );
};

export default React.memo(TodoItem);

const TodoElement = styled("li")`
  width: 100%;
  height: 80px;
  background-color: var(--background-list);
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const ActionTodoElement = styled("div")`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
