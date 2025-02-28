import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const WebSocketContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const WebSocketProvider = ({ children }) => {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const { userId } = useAuth();

  const connectWebSocket = () => {
    // Kết nối WebSocket
    const websocket = new WebSocket("ws://localhost:8080");
    setWs(websocket);

    websocket.onopen = () => {
      console.log("Connected to server");
      websocket.send(JSON.stringify({ type: "connect", userId }));
    };

    websocket.onmessage = (event) => {
      console.log(event.data);
      const data = JSON.parse(event.data);
      if (data.type === "history") {
        setMessages(data.data);
      } else if (data.type === "sendMessage") {
        setMessages((prev) => [...prev, data]);
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
