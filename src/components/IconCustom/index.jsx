import { SvgIcon } from "@mui/material";

// eslint-disable-next-line react/prop-types
function IconCustom({ children, color, bgcolor }) {
  return (
    <SvgIcon
      component={children}
      sx={{
        fontSize: 45,
        padding: "7.5px",
        color: color,
        bgcolor: bgcolor,
        borderRadius: "10px",
      }}
    />
  );
}

export default IconCustom;
