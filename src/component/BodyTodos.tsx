import React, { useState } from "react";
import styles from "./bodyTodo.module.css";
import Button from "primitive/button/Button";
import Checkbox from "primitive/checkbox/Checkbox";
import { useAppDispatch } from "store/hooks";
import { selectAllTodoItem, deleteAllSelectedTodoItem } from "store/slice";

const BodyTodos = () => {
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
    <>
      <div className={styles.content}>
        <h2>todo list</h2>
        <div className={styles.title}>
          <Checkbox checked={isChecked} onChange={handleChange} />
          <Button onClick={handleButtonClick}>DELETE ALL</Button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default React.memo(BodyTodos);
