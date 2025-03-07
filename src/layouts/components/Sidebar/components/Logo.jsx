import Box from "@mui/material/Box";

import logo from "../../../../assets/Logo.webp";

function Logo() {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <img style={{ width: "56px", height: "auto" }} src={logo} />
    </Box>
  );
}

export default Logo;
