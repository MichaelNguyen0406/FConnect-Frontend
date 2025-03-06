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
          color: pos === "start" ? "#333" : "#FFF",
          bgcolor: pos === "start" ? "#E0E0E0" : "primary.main",
          p: "8px 12px",
          borderRadius: "50px",
          display: "inline-block",
          mb: "2px",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

export default Message;
