import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";

// Import Component
import Message from "./components/Message";

// Import React
import { useState, useEffect } from "react";

import { useWebSocket } from "../../context/WebSocketContext";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";

// Import Service
import { getMessages } from "../../services/chatService";

function Chat() {
  const [input, setInput] = useState("");
  const [renderMessages, setRenderMessages] = useState([]);
  const { ws, messages } = useWebSocket();
  const { id, receiverId } = useParams();
  const { userId } = useAuth();

  // if (id && receiverId) {
  //   console.log("ID: ", id, "ReceiverId: ", receiverId);
  // }

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await getMessages(id);
      // console.log(response);
      if (response.statusCode === 200) {
        setRenderMessages(response.data);
      }
    };

    fetchMessages();
  }, [id]);

  useEffect(() => {
    // console.log(messages);
    if (messages.matchId === id) {
      setRenderMessages((prev) => [...prev, messages]);
    }
    // alert(messages.content);
  }, [messages]);

  const sendMessage = (message) => {
    // console.log(message);
    if (ws) {
      if (message.type === "sendMessage") {
        setRenderMessages((prev) => [...prev, message]);
        ws.send(
          JSON.stringify({
            type: message.type,
            content: message.content,
            matchId: id,
            receiverId,
          })
        );
        setInput("");
      }
    }
  };

  const message = {
    type: "sendMessage",
    content: input,
    senderId: userId,
    matchId: id,
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        border: "1px solid #DEDEDE",
      }}
    >
      <Box sx={{ p: 2, height: "90%", overflowY: "scroll" }}>
        {renderMessages.map((message, index) => {
          if (message.senderId === userId) {
            return (
              <Message key={index} pos="end">
                {message.content}
              </Message>
            );
          } else {
            return (
              <Message key={index} pos="start">
                {message.content}
              </Message>
            );
          }
        })}
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          display: "flex",
          flex: 1,
          gap: 1,
          width: "calc(100% - 300px)",
          p: "10px 10px 30px  10px",
          borderRadius: "4px",
          borderTop: "1px solid #DEDEDE",
          bgcolor: "#FFF",
        }}
      >
        <TextField sx={{ flex: 8 }} onChange={handleChange} value={input} />
        <Button
          sx={{ flex: 1, color: "#FFF" }}
          variant="contained"
          onClick={() => sendMessage(message)}
        >
          SEND
        </Button>
      </Box>
    </Box>
  );
}

export default Chat;
