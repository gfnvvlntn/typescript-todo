import React, { useState } from "react";
import Button from "primitive/button/Button";
import Checkbox from "primitive/checkbox/Checkbox";
import { useAppDispatch } from "store/hooks";
import { selectAllTodoItem, deleteAllSelectedTodoItem } from "store/slice";
import { ReactComponent as DeleteAll } from "assets/image/icons/delete_black.svg";
import styled from "styled-components";

const TodoTitle = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useAppDispatch();

  const handleClick = () => {
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
        <Checkbox
          isChecked={isChecked}
          onClick={handleClick}
          variant={"black"}
        />
        <Button onClick={handleButtonClick}>
          <DeleteAll />
        </Button>
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
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
