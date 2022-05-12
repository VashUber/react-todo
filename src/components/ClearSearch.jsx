import { useDispatch, useSelector } from "react-redux";
import { IconButton, Stack, Typography, Collapse } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { setSearch } from "../store/todos";

const ClearSearch = () => {
  const search = useSelector((state) => state.todos.search);
  const dispatch = useDispatch();

  const clearSearch = () => {
    dispatch(setSearch(""));
  };

  return (
    <Collapse in={!!search}>
      <Stack
        sx={{
          p: "5px 10px",
          mb: "10px",
        }}
        direction="row"
        alignItems="center"
      >
        <Typography variant="subtitle1">Search for: {search}</Typography>
        <IconButton onClick={clearSearch}>
          <ClearIcon />
        </IconButton>
      </Stack>
    </Collapse>
  );
};

export default ClearSearch;
