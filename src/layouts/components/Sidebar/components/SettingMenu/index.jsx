import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import LogoutIcon from "@mui/icons-material/Logout";

// Import Components
import IconCustom from "../../../../../components/IconCustom";

// Import Context
import { useAuth } from "../../../../../context/AuthContext";
const ITEM_HEIGHT = 48;

export default function SettingMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { logoutUser } = useAuth();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    logoutUser();
  };

  return (
    <div>
      <Box sx={{ color: "primary.main", fontSize: 45 }} onClick={handleClick}>
        <IconCustom color="primary.main">{SettingsSuggestIcon}</IconCustom>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <LogoutIcon />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
