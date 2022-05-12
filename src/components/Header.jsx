import { Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

const Header = ({ children }) => {
  return (
    <Stack
      justifyContent="center"
      direction="row"
      alignItems="center"
      minHeight={60}
      bgcolor={grey[300]}
    >
      {children}
    </Stack>
  );
};

export default Header;
