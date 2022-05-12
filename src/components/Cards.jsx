import { Stack, Collapse } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import { useDispatch } from "react-redux";
import { setTodos } from "../store/todos";
import Card from "./Card";

const Cards = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.todos.search);
  const todos = useSelector((state) =>
    state.todos.todos.filter((elem) =>
      elem.title.toLowerCase().includes(search)
    )
  );

  useEffect(() => {
    dispatch(setTodos());
  }, []);

  window.onunload = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <TransitionGroup component={Stack}>
      {todos.map((elem) => (
        <Collapse key={elem.id}>
          <Card item={elem} />
        </Collapse>
      ))}
    </TransitionGroup>
  );
};

export default Cards;
