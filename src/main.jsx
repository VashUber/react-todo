import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/index.css";
import App from "./App";
import store from "./store";
import CssBaseline from "@mui/material/CssBaseline";

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos.todos));
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </Provider>
);
