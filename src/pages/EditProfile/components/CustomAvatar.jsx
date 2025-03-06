import { Avatar, Box } from "@mui/material";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
const CustomAvatar = () => {
  return (
    <Box
      position="relative"
      width="180px"
      height="180px"
      margin="0 auto"
      mb={2}
    >
      {/* Avatar chính */}
      <Avatar
        src="https://i.pinimg.com/736x/fb/d3/a7/fbd3a701e65149dbe1813bddecbbce5b.jpg"
        sx={{
          width: "100%",
          height: "100%",
          // borderBlock: "6px",
          border: "4px solid #f0f0f0",
          // borderStyle: "solid",
          // borderColor: "#FF6738",
        }}
      />

      {/* Lớp đen mờ */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Màu đen mờ 40%
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          cursor: "pointer",
          "&:hover": {
            opacity: 1, // Hiện overlay khi hover
          },
        }}
      >
        {/* Icon camera */}
        <CenterFocusWeakIcon sx={{ color: "white", fontSize: 62 }} />
      </Box>
    </Box>
  );
};

export default CustomAvatar;
