import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
// eslint-disable-next-line react/prop-types
function RoomItem({ displayName }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: "12px",
        borderRadius: "8px",
        ":hover": {
          bgcolor: "#E0E0E0",
          cursor: "pointer",
        },
      }}
    >
      <Avatar sx={{ width: 48, height: 48 }} />
      <Box sx={{ ml: "16px" }}>
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
          {displayName}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#777" }}>Hello</Typography>
      </Box>
    </Box>
  );
}

export default RoomItem;
