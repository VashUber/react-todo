import { InputBase, Stack, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/todos";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const onInput = (e) => {
    setSearchInput(e.target.value);
  };

  const findTodos = () => {
    if (searchInput) {
      dispatch(setSearch(searchInput));
      setSearchInput("");
    }
  };

  return (
    <Paper
      component={Stack}
      justifyContent="center"
      direction="row"
      alignItems="center"
    >
      <InputBase
        variant="filled"
        placeholder="Search"
        sx={{
          p: "5px 10px",
          width: "200px",
        }}
        value={searchInput}
        onInput={onInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") findTodos();
        }}
      />
      <IconButton onClick={findTodos}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
