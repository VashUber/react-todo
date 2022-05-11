import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos";
import modalReducer from "./modal";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    modal: modalReducer,
  },
});

export default store;
