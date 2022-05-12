import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  Collapse,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Header from "./components/Header";
import { grey } from "@mui/material/colors";
import { setSearch } from "./store/todos";

function App() {
  const search = useSelector((state) => state.todos.search);
  const dispatch = useDispatch();

  const clearSearch = () => {
    dispatch(setSearch(""));
  };

  return (
    <>
      <Header>
        <Search />
      </Header>

      <Box
        sx={{
          padding: "20px 30px",
          bgcolor: grey[100],
          minHeight: "100vh",
        }}
      >
        <Container>
          <Collapse in={search}>
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
          <Form />
          <Cards />
        </Container>
      </Box>

      <Modal />
    </>
  );
}

export default App;
