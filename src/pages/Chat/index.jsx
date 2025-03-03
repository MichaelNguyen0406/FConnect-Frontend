import Box from "@mui/material/Box";

// Import Component
import Message from "./components/Message";
import Sidebar from "./components/Sidebar";
import HeaderChat from "./components/HeaderChat";
import SendForm from "./components/SendForm";

// Import React
import { useState, useEffect, useRef } from "react";

import { useWebSocket } from "../../context/WebSocketContext";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";

// Import Service
import { getMessages, getMatches } from "../../services/chatService";

// const listReceiver = new Map();

function Chat() {
  const [input, setInput] = useState("");
  // const [listReceiver, setListReceiver] = useState([]);
  const [match, setMatch] = useState([]);
  const [renderMessages, setRenderMessages] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [listReceiver, setListReceiver] = useState(new Map());
  const { ws, messages } = useWebSocket();
  const { matchId } = useParams();
  const { userId } = useAuth();
  const chatContainerRef = useRef(null);

  // Scroll xuống cuối mỗi khi có tin nhắn mới
  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [renderMessages]);

  // if (id && receiverId) {
  //   console.log("ID: ", id, "ReceiverId: ", receiverId);
  // }

  useEffect(() => {
    const fetchMatch = async () => {
      const response = await getMatches(userId);
      if (response.statusCode === 200) {
        // setMatch(response.data);
        const receiverMap = new Map();
        response.data.forEach((receiver) => {
          receiverMap.set(receiver.matchId, receiver);
        });
        setListReceiver(receiverMap);
      }
    };

    fetchMatch();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await getMessages(matchId);
      // console.log(response);
      if (response.statusCode === 200) {
        setRenderMessages(response.data);
        setIsReady(true);
      }
    };
    if (matchId) {
      fetchMessages();
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
      // console.log(listReceiver);
    }
  }, [matchId]);

  useEffect(() => {
    // console.log(messages.length, messages.matchId === matchId);
    if (messages && messages.matchId === matchId) {
      // console.log(messages);
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
            matchId,
            receiverId: listReceiver.get(matchId)?.receiverId,
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
    matchId,
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

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        chatContainerRef.current;
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 10);
    }
  };

  // console.log(renderMessages);
  // console.log(receiver);
  // console.log(matchId);
  // console.log(listReceiver.get(matchId));
  console.log(listReceiver);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        bgcolor: "#FFF",
      }}
    >
      <Sidebar listReceiver={listReceiver} matchId={matchId} />
      <Box
        sx={{
          border: "1px solid rgb(233, 233, 233)",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HeaderChat displayName={listReceiver.get(matchId)?.displayName} />
        <Box
          ref={chatContainerRef}
          onScroll={handleScroll}
          sx={{ p: 3, flex: 1, overflowY: "auto", opacity: isReady ? 1 : 0 }}
        >
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
