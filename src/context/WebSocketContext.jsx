import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const WebSocketContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const WebSocketProvider = ({ children }) => {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  const connectWebSocket = () => {
    // Kết nối WebSocket
    const websocket = new WebSocket("ws://localhost:8080");
    setWs(websocket);

    websocket.onopen = () => {
      if (userInfo) {
        console.log("Connected to server");
        websocket.send(
          JSON.stringify({ type: "connect", userId: userInfo._id })
        );
      }
    };

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "matched") {
        navigate(`/chat/${data.matchId}`);
      } else {
        setMessages(data);
      }
    };

    websocket.onclose = () => {
      connectWebSocket();
    };
  };

  useEffect(() => {
    connectWebSocket();

    return () => {
      if (ws) {
        ws.close();
      }
    }; // Cleanup khi component unmount
  }, []);

  return (
    <WebSocketContext.Provider value={{ ws, messages }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => useContext(WebSocketContext);
