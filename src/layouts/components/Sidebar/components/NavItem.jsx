// Import MUI
import Box from "@mui/material/Box";

// Import React Route Dom
import { NavLink } from "react-router-dom";

// Import Components
import IconCustom from "../../../../components/IconCustom";

// eslint-disable-next-line react/prop-types
function NavItem({ to, Icon, active = false }) {
  return (
    <NavLink
      to={to}
      style={{
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "inherit",
      }}
    >
      <Box
        sx={{
          mb: 1,
        }}
      >
        <IconCustom
          bgcolor={active ? "primary.main" : "#FFF"}
          color={!active ? "primary.main" : "#FFF"}
        >
          {Icon}
        </IconCustom>
      </Box>
    </NavLink>
  );
}

export default NavItem;
