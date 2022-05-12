import { Box, Container, Stack } from "@mui/material";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Header from "./components/Header";
import ClearSearch from "./components/ClearSearch";
import { grey } from "@mui/material/colors";

function App() {
  return (
    <Stack minHeight="100vh">
      <Header>
        <Search />
      </Header>

      <Box
        sx={{
          padding: "20px 30px",
          bgcolor: grey[100],
          flexGrow: 1,
        }}
      >
        <Container>
          <ClearSearch />
          <Form />
          <Cards />
        </Container>
      </Box>

      <Modal />
    </Stack>
  );
}

export default App;
