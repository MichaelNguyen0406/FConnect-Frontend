/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

// Import Components
import IconCustom from "../../../components/IconCustom";

function SummaryCard({
  Icon,
  quantity,
  title,
  color,
  Component = Card,
  height = 1,
}) {
  return (
    <Component
      sx={{
        bgcolor: "#FFF",
        width: "32%",
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography fontWeight="bold">{title}</Typography>
        <Typography
          fontWeight="bold"
          sx={{ fontSize: 20, color: "#2D3748", mt: height }}
        >
          {quantity}
        </Typography>
      </Box>
      <IconCustom bgcolor={color} color="#FFF">
        {Icon}
      </IconCustom>
    </Component>
  );
}

export default SummaryCard;
