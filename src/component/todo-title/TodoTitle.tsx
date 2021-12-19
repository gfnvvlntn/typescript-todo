import React, { useState } from "react";
import Button from "primitive/button/Button";
import Checkbox from "primitive/checkbox/Checkbox";
import { useAppDispatch } from "store/hooks";
import {
  selectAllTodoItem,
  deleteAllSelectedTodoItem,
} from "store/TodoListSlice";
import { ReactComponent as DeleteAll } from "assets/image/icons/delete_black.svg";
import Flex from "../../primitive/flex/Flex";

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
    <Flex justifyContent={"flex-end"}>
      <Checkbox isChecked={isChecked} onClick={handleClick} variant={"black"} />
      <Button onClick={handleButtonClick}>
        <DeleteAll />
      </Button>
    </Flex>
  );
};

export default React.memo(TodoTitle);
