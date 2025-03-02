import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// eslint-disable-next-line react/prop-types
function Message({ pos, children }) {
  return (
    <Box
      sx={{
        textAlign: pos,
      }}
    >
      <Typography
        sx={{
          color: "#FFF",
          bgcolor: "#333",
          p: 1.5,
          borderRadius: 2,
          display: "inline-block",
          mb: 1,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

export default Message;
