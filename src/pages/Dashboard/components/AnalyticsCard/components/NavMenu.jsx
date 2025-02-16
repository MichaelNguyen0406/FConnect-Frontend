import ListItem from "@mui/material/ListItem";

const colors = ["primary.main", "secondary.main", "#00EB72"];
// eslint-disable-next-line react/prop-types
function NavMenu({ children, active = false, onClick }) {
  //   console.log(Math.ceil(Math.random() * 3));
  return (
    <ListItem
      onClick={onClick}
      sx={{
        bgcolor: active && "#fff",
        color: active && colors[Math.ceil(Math.random() * 3) - 1],
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",

        "&:hover": !active && {
          bgcolor: "#E0E0E0",
          cursor: "pointer",
        },
      }}
    >
      {children}
    </ListItem>
  );
}

export default NavMenu;
