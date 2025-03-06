import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
// eslint-disable-next-line react/prop-types
import { NavLink } from "react-router-dom";
import { useWebSocket } from "../../../context/WebSocketContext";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function RoomItem({ to, active, lastMessage }) {
  // const [lastMsg, setLastMsg] = useState(lastMessage);
  // const { messages } = useWebSocket();
  // useEffect(() => {
  //   if (messages.type === "receiveMessage") {
  //     setLastMsg(messages.content);
  //   }
  // }, [messages]);
  return (
    <NavLink
      to={to}
      style={{
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "inherit",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: "12px 24px",
          // borderRadius: "8px",
          bgcolor: active && "#E0E0E0",
          ":hover": {
            bgcolor: "#E0E0E0",
            cursor: "pointer",
          },
        }}
      >
        <Avatar sx={{ width: 48, height: 48 }} />
        <Box sx={{ ml: "16px" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            Anonymous
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#777" }}>...</Typography>
        </Box>
      </Box>
    </NavLink>
  );
}

export default RoomItem;
