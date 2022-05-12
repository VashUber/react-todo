import { Button, Input, Stack } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/todos";

const Form = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    if (input.trim()) {
      dispatch(add({ title: input }));
      setInput("");
    }
  };

  return (
    <Stack spacing={2} direction="row">
      <Input
        value={input}
        onInput={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTodo();
        }}
        color="info"
      />
      <Button variant="contained" color="info" onClick={addTodo}>
        Add
      </Button>
    </Stack>
  );
};

export default Form;
