import { createSlice } from "@reduxjs/toolkit";
import { TodoTypes } from "types";

const todoListSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [] as TodoTypes[],
  },
  reducers: {
    createTodoItem(state, action) {
      state.todoList.unshift(action.payload);
    },
    deleteAllSelectedTodoItem(state) {
      if (state.todoList.length === 0) return;
      state.todoList = state.todoList.filter((el) => !el.isDone);
    },
    selectAllTodoItem(state, action) {
      state.todoList.forEach((el) => {
        el.isDone = !action.payload;
      });
    },
    editTodoItem(state, action) {
      state.todoList.forEach((el) => {
        if (el.id === action.payload.id) {
          el.title = action.payload.newTitle;
        }
      });
    },
    deleteTodoItem(state, action) {
      state.todoList = state.todoList.filter((el) => el.id !== action.payload);
    },
    selectTodoItem(state, action) {
      state.todoList.forEach((el) => {
        if (el.id === action.payload.id) {
          el.isDone = !action.payload.checked;
        }
      });
    },
  },
});

export const {
  createTodoItem,
  selectAllTodoItem,
  editTodoItem,
  deleteTodoItem,
  deleteAllSelectedTodoItem,
  selectTodoItem,
} = todoListSlice.actions;
export default todoListSlice.reducer;
