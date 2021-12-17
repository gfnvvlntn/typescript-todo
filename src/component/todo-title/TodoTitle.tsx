import React, { useState } from "react";
import Button from "primitive/button/Button";
import Checkbox from "primitive/checkbox/Checkbox";
import { useAppDispatch } from "store/hooks";
import { selectAllTodoItem, deleteAllSelectedTodoItem } from "store/slice";
import styled from "styled-components";

const TodoTitle = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    setIsChecked(!isChecked);
    dispatch(selectAllTodoItem(isChecked));
  };

  const handleButtonClick = () => {
    dispatch(deleteAllSelectedTodoItem());
    if (isChecked) {
      setIsChecked(!isChecked);
    }
  };

  return (
    <TodoTitleContainer>
      <ActionTodoTitle>
        <Checkbox checked={isChecked} onChange={handleChange} />
        <Button onClick={handleButtonClick}>DELETE ALL</Button>
      </ActionTodoTitle>
    </TodoTitleContainer>
  );
};

export default React.memo(TodoTitle);

const TodoTitleContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionTodoTitle = styled("div")`
  width: 23%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
