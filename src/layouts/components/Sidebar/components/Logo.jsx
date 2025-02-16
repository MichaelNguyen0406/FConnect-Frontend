import Box from "@mui/material/Box";

function Logo() {
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "center", py: 1 }}
    >
      <img
        style={{ height: "70px", width: "auto" }}
        src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
      />
    </Box>
  );
}

export default Logo;
