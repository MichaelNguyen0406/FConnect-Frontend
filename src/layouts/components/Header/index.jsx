import Box from "@mui/material/Box";

import { Link } from "react-router-dom";

// Import CSS
import { container } from "./indexStyle";
function Header() {
  return (
    <Box sx={container}>
      <Link to="/">Home</Link>
      <Link>chat</Link>
    </Box>
  );
}

export default Header;
