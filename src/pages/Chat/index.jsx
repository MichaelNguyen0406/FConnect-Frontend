import Box from "@mui/material/Box";

// Import Component
import ChatForm from "./components/ChatForm";
import Message from "./components/Message";
import ButtonCustom from "../../components/ButtonCustom";

// Import React
import { useState, useEffect } from "react";

import { useAuth } from "../../context/AuthContext";

function Chat() {
  const [input, setInput] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const { userId } = useAuth();
  console.log(userId);

  // ws.onmessage = (event) => console.log("Message:", event.data);

  const sendMessage = (message) => {
    console.log(message);
    if (ws) {
      // console.log("Sended");
      if (message.type === "connect") {
        ws.send(JSON.stringify({ type: "connect", userId }));
      } else if (message.type === "sendMessage") {
        ws.send(
          JSON.stringify({
            type: message.type,
            content: message.text,
            receiverId,
          })
        );
        setInput("");
      }
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleRoom = (e) => {
    setReceiverId(e.target.value);
  };

  // console.log(messages);

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "400px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        // border: "1px solid #333",
      }}
    >
      {/* <ChatForm onChange={handleUser} value={user} label="Name" /> */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <ChatForm onChange={handleRoom} value={receiverId} label="ReceiverId" />
        <ButtonCustom
          variant="contained"
          onClick={() => sendMessage({ type: "connect", userId })}
        >
          Connect
        </ButtonCustom>
      </Box>
      {/* <Box
        sx={{
          height: "100%",
          p: 2,
        }}
      >
        {messages.map((message, index) => (
          <Message key={index} pos={message.user == user ? "end" : "start"}>
            {message.message}
          </Message>
        ))}
      </Box> */}
      <ChatForm onChange={handleChange} value={input} label="Message" />
      <ButtonCustom
        variant="contained"
        onClick={() => sendMessage({ type: "sendMessage", text: input })}
      >
        Send Message
      </ButtonCustom>
    </Box>
  );
}

export default Chat;
