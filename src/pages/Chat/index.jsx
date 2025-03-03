import Box from "@mui/material/Box";

// Import Component
import Message from "./components/Message";
import Sidebar from "./components/Sidebar";
import HeaderChat from "./components/HeaderChat";
import SendForm from "./components/SendForm";

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
    if (id) {
      fetchMessages();
    }
  }, [id]);

  useEffect(() => {
    // console.log(messages);
    if (messages.length && messages.matchId === id) {
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
    // console.log(e.key);
    setInput(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      sendMessage(message);
    }
  };

  console.log(renderMessages);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        bgcolor: "#FFF",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          border: "1px solid rgb(233, 233, 233)",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HeaderChat displayName="Nguyen Truong An" />

        <Box sx={{ p: 3, flex: 1 }}>
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

        <SendForm
          input={input}
          handleChange={handleChange}
          handleKeyUp={handleKeyUp}
        />
      </Box>
    </Box>
  );
}

export default Chat;
