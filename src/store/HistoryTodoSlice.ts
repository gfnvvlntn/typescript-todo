import { createSlice } from "@reduxjs/toolkit";
import { TodoTypes } from "types";

const historyTodoSlice = createSlice({
  name: "historyTodo",
  initialState: {
    historyTodo: [] as TodoTypes[],
  },
  reducers: {
    addHistoryTodoItem(state, action) {
      state.historyTodo.unshift(action.payload);
    },
    deleteHistoryTodoItem(state, action) {
      state.historyTodo = state.historyTodo.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const { addHistoryTodoItem, deleteHistoryTodoItem } =
  historyTodoSlice.actions;
export default historyTodoSlice.reducer;
