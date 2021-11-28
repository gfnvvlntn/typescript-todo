import React, { useState } from "react";
import styles from "./createTodoForm.module.css";
import Input from "primitive/input/Input";
import Button from "primitive/button/Button";
import { useAppDispatch } from "store/hooks";
import { createTodoItem } from "store/slice";

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
    <div>
      <h2>create a record</h2>
      <div className={styles.formItem}>
        <Input
          value={newTitle}
          onChange={handleChange}
          placeholder="enter the title todo"
        />
        <Button onClick={handlerSubmit}>CREATE</Button>
      </div>
      <hr />
    </div>
  );
}

export default React.memo(CreateTodoForm);
