import { Stack, Collapse } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import Card from "./Card";

const Cards = () => {
  const todos = useSelector((state) => state.todos.todos);

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
