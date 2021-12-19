import React from "react";
import { TodoTypes } from "types";
import Button from "primitive/button/Button";
import { ReactComponent as Delete } from "assets/image/icons/delete_white.svg";
import styled from "styled-components";

import { useAppDispatch } from "store/hooks";
import { deleteHistoryTodoItem } from "store/HistoryTodoSlice";

interface HistoryTodoItemProps {
  historyTodoElement: TodoTypes;
}

const HistoryTodoItem = ({ historyTodoElement }: HistoryTodoItemProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(deleteHistoryTodoItem(historyTodoElement.id));
  };
  return (
    <TodoElement>
      <p>{historyTodoElement.title}</p>
      <Button onClick={handleClick}>
        <Delete />
      </Button>
    </TodoElement>
  );
};

export default React.memo(HistoryTodoItem);

const TodoElement = styled("li")`
  width: calc(100% - 60px);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: var(--background-list);
  border-radius: 5px;
  color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
