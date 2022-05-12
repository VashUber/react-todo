import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const initialState = {
  todos: [],
  search: "",
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
    edit: (state, action) => {
      const todo = state.todos.find((elem) => elem.id === action.payload.id);
      todo.title = action.payload.title;
    },
    setTodos: (state) => {
      state.todos = JSON.parse(localStorage.getItem("todos")) || [];
    },
    setSearch: (state, action) => {
      state.search = action.payload.toLowerCase();
    },
  },
});

export const { add, done, remove, edit, setTodos, setSearch } =
  todosSlice.actions;
export default todosSlice.reducer;
