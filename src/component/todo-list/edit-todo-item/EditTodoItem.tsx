import React, { memo, useState } from "react";
import { useAppDispatch } from "store/hooks";
import { editTodoItem } from "store/TodoListSlice";

import Input from "primitive/input/Input";

import { TodoTypes } from "types";

type EditTodoItemProps = {
  todoElement: TodoTypes;
};

const EditTodoItem = ({ todoElement }: EditTodoItemProps) => {
  let [updatedTitle, setUpdatedTitle] = useState(todoElement.title);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTitle(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editTodoItem({ newTitle: e.target.value, id: e.target.id }));
  };

  return (
    <Input
      id={todoElement.id}
      value={updatedTitle}
      onChange={handleChange}
      onBlur={handleSubmit}
    />
  );
};

export default memo(EditTodoItem);
