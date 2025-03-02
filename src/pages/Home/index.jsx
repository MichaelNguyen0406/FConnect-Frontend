import Box from "@mui/material/Box";
import { useEffect } from "react";

// Import Component
import { Button } from "@mui/material";

// Import Context
import { useWebSocket } from "../../context/WebSocketContext";

function Home() {
  const { ws } = useWebSocket();

  // useEffect(() => {
  //   console.log(messages);
  // }, [messages]);

  const handleClick = () => {
    ws.send(JSON.stringify({ type: "findMatch" }));
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          color: "#FFF",
          width: "200px",
          height: "200px",
        }}
      >
        Match
      </Button>
    </Box>
  );
}

export default Home;
