import Box from "@mui/material/Box";

// Import Component
import Header from "./Header";
import Searchbar from "./Searchbar";
import RoomItem from "./RoomItem";

import { getMatches } from "../../../services/chatService";

import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";

function Sidebar() {
  const [match, setMatch] = useState([]);
  const { userId } = useAuth();

  useEffect(() => {
    const fetchMatch = async () => {
      const response = await getMatches(userId);
      if (response.statusCode === 200) {
        setMatch(response.data);
      }
    };

    fetchMatch();
  }, []);

  return (
    <Box
      sx={{
        width: "349px",
      }}
    >
      <Header />

      <Box
        sx={{
          p: "12px 24px",
        }}
      >
        <Searchbar />
        <Box mt="16px">
          {!match.length
            ? "Chưa có tin nhắn"
            : match.map((receiver) => <RoomItem key={receiver.matchId} />)}
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
