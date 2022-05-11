import { useSelector, useDispatch } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { closeModal } from "../store/modal";
import { edit } from "../store/todos";

const Modal = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const id = useSelector((state) => state.modal.id);
  const item = useSelector((state) =>
    state.todos.todos.find((elem) => elem.id === id)
  );
  const [editTitle, setEditTitle] = useState("");
  const dispatch = useDispatch();

  const handleClickOutside = () => {
    dispatch(closeModal());
  };

  const changeTitle = (e) => {
    setEditTitle(e.target.value);
  };

  const submitChanges = () => {
    dispatch(edit({ id, title: editTitle }));
    handleClickOutside();
  };

  useEffect(() => {
    if (item) setEditTitle(item.title);
  }, [item]);

  return (
    <Dialog open={isOpen} onClose={handleClickOutside}>
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
          onChange={changeTitle}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              submitChanges();
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClickOutside}>Cancel</Button>
        <Button onClick={submitChanges}>Edit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
