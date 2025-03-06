import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function HeaderChat({ displayName, status }) {
  return (
    <Box
      sx={{
        height: "92px",
        borderBottom: "1px solid rgb(233, 233, 233)",
        display: "flex",
        alignItems: "center",
        p: 3,
      }}
    >
      <Avatar sx={{ width: 48, height: 48 }} />
      <Box sx={{ ml: "16px" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {displayName}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#777" }}>...</Typography>
      </Box>
    </Box>
  );
}

export default HeaderChat;
