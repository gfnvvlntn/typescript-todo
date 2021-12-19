import React from "react";
import { Route, Routes } from "react-router-dom";
import Todos from "../pages/todos/Todos";
import Home from "../pages/home/Home";
import NotFound from "../pages/not-found/NotFound";
import HistoryTodos from "../pages/history-todos/HistoryTodos";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todos />} />
      <Route path="/history-todos" element={<HistoryTodos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
