import { configureStore, Middleware } from "@reduxjs/toolkit";
import todoReducer from "./slice";

const localStorageMiddleware: Middleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("todoList", JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem("todoList") !== null) {
    return JSON.parse(localStorage.getItem("todoList") || "");
  }
};

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
