import { SvgIcon } from "@mui/material";

// eslint-disable-next-line react/prop-types
function IconCustom({ children, color, bgcolor }) {
  return (
    <SvgIcon
      component={children}
      sx={{
        fontSize: 50,
        padding: "7.5px",
        color: color,
        bgcolor: bgcolor,
        borderRadius: "50%",
        ":hover": {
          bgcolor: "#E0E0E0",
          cursor: "pointer",
        },
      }}
    />
  );
}

export default IconCustom;
