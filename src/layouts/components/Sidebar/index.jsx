// Import MUI
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

// Import Components
import NavItem from "./components/NavItem";
import Logo from "./components/Logo";

// Import CSS
import { container } from "./indexStyle";

import { useState, useEffect } from "react";

// Import Service
import { getReceivers } from "../../../services/chatService";

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
  const [active, setActive] = useState(0);
  const [receivers, setReceivers] = useState([]);

  useEffect(() => {
    const fetchReceivers = async () => {
      const response = await getReceivers(userId);
      if (response.statusCode === 200) {
        setReceivers(response.data.receivers);
      }
    };

    fetchReceivers();
  }, []);

  console.log(receivers);
  return (
    <Box sx={container}>
      <Logo />
      <Divider />
      <Box>
        {/* {navList.map((item, index) => (
          <NavItem
            to={item.to}
            Icon={item.icon}
            text={item.text}
            key={index}
            active={active == index ? true : false}
            onClick={() => setActive(index)}
          />
        ))} */}
        {receivers.map((receiver) => (
          <Box key={receiver._id}>{receiver.displayName}</Box>
        ))}
      </Box>
      {/* <Divider /> */}
    </Box>
  );
}

export default Sidebar;
