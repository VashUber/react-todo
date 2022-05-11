import React, { useState } from "react";
import {
  Paper,
  IconButton,
  Typography,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { grey } from "@mui/material/colors";
import { done, remove, edit } from "../store/todos";
import { useDispatch } from "react-redux";

const Card = React.memo(({ item }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(item.title);

  const doneTodo = () => {
    dispatch(done({ id: item.id }));
  };
  const deleteTodo = () => {
    dispatch(remove({ id: item.id }));
  };
  const editTodo = () => {
    dispatch(edit({ id: item.id, title: editTitle }));
    handlClickOutside();
  };
  const openModal = () => {
    setIsOpen((prev) => !prev);
  };
  const handlClickOutside = () => {
    setIsOpen(false);
  };
  const onChange = (e) => {
    setEditTitle(e.target.value);
  };

  return (
    <>
      <Dialog open={isOpen} onClose={handlClickOutside}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent
          sx={{
            width: "350px",
          }}
        >
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={editTitle}
            onChange={onChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlClickOutside}>Cancel</Button>
          <Button onClick={editTodo}>Edit</Button>
        </DialogActions>
      </Dialog>
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
          <IconButton onClick={openModal}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={doneTodo}>
            <DoneIcon />
          </IconButton>
          <IconButton onClick={deleteTodo}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Paper>
    </>
  );
});

export default Card;
