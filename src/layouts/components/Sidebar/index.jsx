// Import MUI
import Box from "@mui/material/Box";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";
// Import Components
import NavItem from "./components/NavItem";
import SettingMenu from "./components/SettingMenu";
import Logo from "./components/Logo";

// Import CSS
import { container } from "./style";

// Import Context
import { useAuth } from "../../../context/AuthContext";

function Sidebar() {
  const { userInfo } = useAuth();

  return (
    <Box sx={container}>
      <Box>
        <Logo />
        <Box
          sx={{
            mt: "68px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NavItem Icon={HolidayVillageIcon} to="/" />
          <NavItem Icon={ChatIcon} to="/chat" />
          <NavItem Icon={PersonIcon} to={`/profile/${userInfo?._id}`} />
        </Box>
      </Box>
      <SettingMenu />
    </Box>
  );
}

export default Sidebar;
