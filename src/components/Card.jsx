import React from "react";
import { Paper, IconButton, Typography, Stack } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import { grey } from "@mui/material/colors";
import { done, remove } from "../store/todos";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const Card = React.memo(({ item }) => {
  const dispatch = useDispatch();

  const doneTodo = useCallback(() => {
    dispatch(done({ id: item.id }));
  });
  const deleteTodo = useCallback(() => {
    dispatch(remove({ id: item.id }));
  });

  return (
    <Paper
      component={Stack}
      sx={{
        p: "10px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: grey[200],
        overflow: "hidden",
        m: "10px 0",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          width: "100%",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            width: "100%",
            textOverflow: "ellipsis",
            overflow: "hidden",
            textDecoration: item.done ? "line-through" : "none",
          }}
        >
          {item.title}
        </Typography>
        <IconButton onClick={doneTodo}>
          <DoneIcon />
        </IconButton>
        <IconButton onClick={deleteTodo}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
});

export default Card;
