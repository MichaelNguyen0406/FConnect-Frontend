import Box from "@mui/material/Box";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";

// Import Context
import { useWebSocket } from "../../context/WebSocketContext";
import { useAuth } from "../../context/AuthContext";

function Home() {
  const { ws } = useWebSocket();
  const { userId } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    ws.send(JSON.stringify({ type: "findMatch", userId }));
  };

  const handleCancel = () => {
    setLoading(false);
    ws.send(JSON.stringify({ type: "cancelMatch", userId }));
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
          disabled={loading}
        >
          PLAY
        </Button>

        {/* Hiển thị loader khi đang tìm kiếm */}
        {loading && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Lớp đen mờ
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF",
              fontSize: "28px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <CircularProgress color="inherit" />
              Đang tìm kiếm...
            </Box>
            <Button
              variant="outlined"
              sx={{
                color: "#FFF",
                borderColor: "#FFF",
                mt: 3,
                borderRadius: "50px",
                px: 4,
                py: 1,
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default Home;
