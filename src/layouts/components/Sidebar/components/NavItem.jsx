// Import MUI
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Hidden from "@mui/material/Hidden";
import Typography from "@mui/material/Typography";

// Import React Route Dom
import { NavLink } from "react-router-dom";

// Import Components
import IconCustom from "../../../../components/IconCustom";

// eslint-disable-next-line react/prop-types
function NavItem({ to, Icon, text, active = false, onClick }) {
  return (
    <NavLink
      to={to}
      style={{
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "inherit",
      }}
    >
      <ListItem
        onClick={onClick}
        sx={{
          bgcolor: active && "#FFF",
          borderRadius: "10px",
          "&:hover": {
            bgcolor: "#E0E0E0",
            cursor: "pointer",
          },
        }}
      >
        <Box>
          <IconCustom
            bgcolor={active ? "primary.main" : "#FFF"}
            color={!active ? "primary.main" : "#FFF"}
          >
            {Icon}
          </IconCustom>
        </Box>
        <Hidden lgDown>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              ml: 2,
              color: active ? "text.secondary" : "",
            }}
          >
            {text}
          </Typography>
        </Hidden>
      </ListItem>
    </NavLink>
  );
}

export default NavItem;
