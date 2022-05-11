import { Button, Input, Stack } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/todos";

const Form = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = (e) => {
    if ((e.key === "Enter" || !e.key) && input) {
      dispatch(add({ title: input }));
      setInput("");
    }
  };

  return (
    <Stack spacing={2} direction="row">
      <Input
        value={input}
        onInput={(e) => setInput(e.target.value)}
        onKeyDown={(e) => addTodo(e)}
        color="info"
      />
      <Button variant="contained" color="info" onClick={addTodo}>
        Add
      </Button>
    </Stack>
  );
};

export default Form;
