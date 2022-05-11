import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      const todo = { id: uniqid(), title: action.payload.title, done: false };
      state.todos = [...state.todos, todo];
    },
    remove: (state, action) => {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload.id);
    },
    done: (state, action) => {
      const todo = state.todos.find((elem) => elem.id === action.payload.id);
      todo.done = !todo.done;
    },
  },
});

export const { add, done, remove, setTodos } = todosSlice.actions;
export default todosSlice.reducer;
