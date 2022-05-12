import { InputBase, Stack, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <Paper
      component={Stack}
      justifyContent="center"
      direction="row"
      alignItems="center"
    >
      <InputBase
        variant="filled"
        placeholder="Search todo"
        sx={{
          p: "5px 10px",
          width: "200px",
        }}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
