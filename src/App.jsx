import { Box, Container } from "@mui/material";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Modal from "./components/Modal";
import { grey } from "@mui/material/colors";

function App() {
  return (
    <>
      <Box
        sx={{
          padding: "20px 30px",
          bgcolor: grey[100],
          minHeight: "100vh",
        }}
      >
        <Container>
          <Form />
          <Cards />
        </Container>
      </Box>

      <Modal />
    </>
  );
}

export default App;
