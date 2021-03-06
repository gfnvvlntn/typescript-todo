import React, { useState } from "react";
import Input from "primitive/input/Input";
import Button from "primitive/button/Button";
import { useAppDispatch } from "store/hooks";
import { createTodoItem } from "store/TodoListSlice";
import styled from "styled-components";
import { ReactComponent as Add } from "../assets/image/icons/add_white.svg";

function CreateTodoForm() {
  const [newTitle, setNewTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handlerSubmit = () => {
    if (!newTitle) return;

    const newTodo = {
      id: new Date().getTime(),
      title: newTitle,
      isDone: false,
    };
    dispatch(createTodoItem(newTodo));
    setNewTitle("");
  };

  return (
    <TodoFormContainer>
      <Input
        value={newTitle}
        onChange={handleChange}
        placeholder="enter the title todo"
      />
      <Button onClick={handlerSubmit}>
        <Add />
      </Button>
    </TodoFormContainer>
  );
}

export default React.memo(CreateTodoForm);

const TodoFormContainer = styled("div")`
  width: 100%;
  height: 60px;
  background-color: var(--background-list);
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 50px;
  margin-top: 50px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
