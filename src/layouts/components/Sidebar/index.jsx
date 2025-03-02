// Import MUI
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import Diversity3Icon from "@mui/icons-material/Diversity3";
// import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

// Import Components
import NavItem from "./components/NavItem";
import Logo from "./components/Logo";

// Import CSS
import { container } from "./indexStyle";

import { useState, useEffect } from "react";

// Import Service
import { getMatches } from "../../../services/chatService";

// Import Context
import { useAuth } from "../../../context/AuthContext";

// const navList = [
//   {
//     to: "/dashboard",
//     icon: DashboardIcon,
//     text: "Dashboard",
//   },
//   {
//     to: "/user",
//     icon: Diversity3Icon,
//     text: "User",
//   },
//   {
//     to: "/setting",
//     icon: SettingsSuggestIcon,
//     text: "Setting",
//   },
// ];

function Sidebar() {
  const { userId } = useAuth();
  const [match, setMatch] = useState([]);

  useEffect(() => {
    const fetchMatch = async () => {
      const response = await getMatches(userId);
      if (response.statusCode === 200) {
        setMatch(response.data);
      }
    };

    fetchMatch();
  }, []);

  console.log(match);
  return (
    <Box sx={container}>
      <Logo />
      <Divider />
      <Box>
        {match.map((receiver) => (
          <NavItem
            key={receiver.matchId}
            text={receiver.displayName}
            to={`/chat/${receiver.matchId}/${receiver.receiverId}`}
          />
        ))}
      </Box>
      {/* <Divider /> */}
    </Box>
  );
}

export default Sidebar;
