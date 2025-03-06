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
import { getMessages, getListMatch } from "../../services/chatService";

import Lottie from "lottie-react";
import typingAnimation from "../../assets/animationTyping.json";

function Chat() {
  const [input, setInput] = useState("");
  const [renderMessages, setRenderMessages] = useState([]);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const { ws, messages } = useWebSocket();
  const { matchId } = useParams();
  const { userId } = useAuth();
  const chatContainerRef = useRef(null);
  const [listMatch, setListMatch] = useState(new Map());
  const [loadingListMatch, setLoadingListMatch] = useState(true);
  const [isFirstTyping, setIsFirstTyping] = useState(true);
  const typingTimeout = useRef(null);
  const [candidateTyping, setCandidateTyping] = useState(false);
  const [lastMsg, setLastMsg] = useState(null);

  useEffect(() => {
    if (isAtBottom && matchId) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
    if (isAtBottom && candidateTyping && matchId) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [renderMessages, candidateTyping]);

  // Fetch List Match Sidebar
  useEffect(() => {
    const fetchListMatch = async () => {
      const response = await getListMatch(userId);
      // console.log(response);
      if (response.statusCode === 200) {
        response.data.forEach((match) => {
          const receiverId =
            match.userId1 === userId ? match.userId2 : match.userId1;
          const matchId = match._id;
          listMatch.set(matchId, {
            receiverId,
            matchId,
            lastMessage: match.lastMessage,
          });
        });
        setListMatch(listMatch);
      }
      setLoadingListMatch(false);
    };

    fetchListMatch();
  }, []);

  // Fetch List Message
  useEffect(() => {
    const fetchMessages = async () => {
      const response = await getMessages(matchId);
      if (response.statusCode === 200) {
        setRenderMessages(response.data);
        setIsReady(true);
      }
    };
    if (matchId) {
      fetchMessages();
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [matchId]);

  useEffect(() => {
    if (messages.type === "receiveMessage" && messages.matchId === matchId) {
      setRenderMessages((prev) => [...prev, messages]);
    }
    if (messages.type === "typing" && messages.matchId === matchId) {
      setCandidateTyping(messages.status);
    }
  }, [messages]);

  const sendMessage = (message) => {
    if (ws) {
      if (message.type === "sendMessage") {
        setRenderMessages((prev) => [...prev, message]);
        ws.send(
          JSON.stringify({
            type: message.type,
            content: message.content,
            matchId,
            receiverId: listMatch.get(matchId).receiverId,
          })
        );
        setInput("");
      } else if (message.type === "typing") {
        if (isFirstTyping) {
          ws.send(
            JSON.stringify({
              type: message.type,
              matchId,
              status: true,
              receiverId: listMatch.get(matchId).receiverId,
            })
          );
          setIsFirstTyping(false);
        }
        if (typingTimeout.current) {
          clearTimeout(typingTimeout.current);
        }

        typingTimeout.current = setTimeout(() => {
          ws.send(
            JSON.stringify({
              type: message.type,
              matchId,
              status: false,
              receiverId: listMatch.get(matchId).receiverId,
            })
          );
          setIsFirstTyping(true);
        }, 3000);
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
    sendMessage({
      type: "typing",
      matchId,
    });
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      sendMessage(message);
      setLastMsg(message.content);
    }
  };

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        chatContainerRef.current;
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 10);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        bgcolor: "#FFF",
      }}
    >
      <Sidebar
        listMatch={listMatch}
        loading={loadingListMatch}
        matchId={matchId}
        lastMsg={lastMsg}
      />
      <Box
        sx={{
          border: "1px solid rgb(233, 233, 233)",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {matchId && (
          <>
            <HeaderChat displayName="Anonymous" />
            <Box
              ref={chatContainerRef}
              onScroll={handleScroll}
              sx={{
                p: 3,
                flex: 1,
                overflowY: "auto",
                opacity: isReady ? 1 : 0,
              }}
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
              {candidateTyping && (
                <Lottie
                  animationData={typingAnimation}
                  loop={true}
                  style={{
                    width: 53,
                    height: 40,
                    backgroundColor: "#E0E0E0",
                    borderRadius: "50px",
                    marginTop: "2px",
                  }}
                />
              )}
            </Box>
            <SendForm
              input={input}
              handleChange={handleChange}
              handleKeyUp={handleKeyUp}
            />
          </>
        )}
      </Box>
    </Box>
  );
}

export default Chat;
