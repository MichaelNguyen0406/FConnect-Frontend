import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

// Import Component
import { Button } from "@mui/material";

// Import Context
import { useWebSocket } from "../../context/WebSocketContext";

import { useNavigate } from "react-router-dom";

// import videoBg from "../../assets/videoBg.mp4";

function Home() {
  const { ws, messages } = useWebSocket();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(messages);
    if (messages.type === "matched") {
      setLoading(false);
      navigate(`/chat/${messages.matchId}/${messages.opponentId}`);
    }
  }, [messages]);

  const handleClick = () => {
    setLoading(true);
    ws.send(JSON.stringify({ type: "findMatch" }));
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      <video
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
        src="https://cdn.pixabay.com/video/2021/11/26/98970-650472561_large.mp4"
        autoPlay
        loop
        muted
      />
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Button
          variant="contained"
          sx={{
            color: "#FFF",
            width: "560px",
            borderRadius: "50px",
            p: 1,
            position: "absolute",
            bottom: "88px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "20px",
          }}
          onClick={handleClick}
        >
          PLAY
        </Button>
        {loading && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#FFF",
              fontSize: "28px",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <CircularProgress color="inherit" />
            Đang tìm kếm...
          </Box>
        )}
      </Box>
    </div>
  );
}

export default Home;
