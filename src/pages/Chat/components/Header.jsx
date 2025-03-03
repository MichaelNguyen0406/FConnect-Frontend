import { Box } from "@mui/material";

function Header() {
  return (
    <Box
      sx={{
        height: "88px",
        px: 3,
        display: "flex",
        alignItems: "center",
        fontSize: "28px",
        fontWeight: "bold",
        borderBottom: "1px solid rgb(233, 233, 233)",
      }}
    >
      FConnect
    </Box>
  );
}

export default Header;
