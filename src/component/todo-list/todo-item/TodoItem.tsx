import React, { useEffect, useState } from "react";
import { useAppDispatch } from "store/hooks";
import { selectTodoItem, deleteTodoItem } from "store/slice";

import EditTodoItem from "../edit-todo-item/EditTodoItem";
import Checkbox from "primitive/checkbox/Checkbox";
import Button from "primitive/button/Button";
import { TodoTypes } from "types";
import { ReactComponent as Delete } from "assets/image/icons/delete_white.svg";
import styled from "styled-components";

type TodoItemProps = {
  todoElement: TodoTypes;
};

const TodoItem = ({ todoElement }: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState(todoElement.isDone);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsChecked(todoElement.isDone);
  }, [todoElement.isDone]);

  const handleClick = () => {
    dispatch(selectTodoItem({ checked: isChecked, id: todoElement.id }));
    setIsChecked(!isChecked);
  };

  const onDelete = () => {
    dispatch(deleteTodoItem(todoElement.id));
  };

  return (
    <TodoElement>
      <EditTodoItem todoElement={todoElement} />
      <ActionTodoElement>
        <Checkbox
          onClick={handleClick}
          isChecked={isChecked}
          variant={"white"}
        />
        <Button onClick={onDelete}>
          <Delete />
        </Button>
      </ActionTodoElement>
    </TodoElement>
  );
};

export default React.memo(TodoItem);

const TodoElement = styled("li")`
  width: 100%;
  height: 60px;
  background-color: var(--background-list);
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const ActionTodoElement = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
