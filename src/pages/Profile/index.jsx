import { Box, Avatar, Typography } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { NavLink, useParams } from "react-router-dom";

function Profile() {
  const { userId } = useParams();

  return (
    <Box sx={{ width: "100%", height: "100vh", bgcolor: "#FFF" }}>
      <Box sx={{ height: "456px", position: "relative" }}>
        <Box sx={{ height: "310px", bgcolor: "#DEDEDE" }}></Box>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "0",
          }}
        >
          <Avatar
            src="https://i.pinimg.com/736x/fb/d3/a7/fbd3a701e65149dbe1813bddecbbce5b.jpg"
            sx={{
              width: "180px",
              height: "180px",
              // borderBlock: "6px",
              border: "4px solid #f0f0f0",
              // borderStyle: "solid",
              // borderColor: "#FF6738",
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
              Anonymous
            </Typography>
            <NavLink
              to={`/edit-profile/${userId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  p: "4px 12px",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  ":hover": {
                    bgcolor: "#E0E0E0",
                    cursor: "pointer",
                  },
                }}
              >
                <ModeEditIcon />
              </Box>
            </NavLink>
          </Box>
        </Box>
      </Box>
      <Box sx={{ p: "32px 72px" }}>
        <Box>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold", mt: 2 }}>
            MAJOR
          </Typography>
          <Box
            sx={{
              my: 2,
              p: "8px 16px",
              borderRadius: "8px",
              display: "inline-block",
              bgcolor: "#DEDEDE",
              alignItems: "center",
              ":hover": {
                bgcolor: "#E0E0E0",
                cursor: "pointer",
              },
            }}
          >
            Artificial Intelligence
          </Box>
        </Box>
        {/* <Divider /> */}
        <Box>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold", mt: 2 }}>
            GENDER
          </Typography>
          <Box
            sx={{
              my: 2,
              p: "8px 16px",
              borderRadius: "8px",
              display: "inline-block",
              bgcolor: "#DEDEDE",
              alignItems: "center",
              ":hover": {
                bgcolor: "#E0E0E0",
                cursor: "pointer",
              },
            }}
          >
            Male
          </Box>
        </Box>
        {/* <Divider /> */}
        <Box>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold", mt: 2 }}>
            INTEREST
          </Typography>
          <Box
            sx={{
              my: 2,
              p: "8px 16px",
              borderRadius: "50px",
              display: "inline-block",
              bgcolor: "#DEDEDE",
              mr: 1,
              alignItems: "center",
              ":hover": {
                bgcolor: "#E0E0E0",
                cursor: "pointer",
              },
            }}
          >
            Football
          </Box>
          <Box
            sx={{
              my: 2,
              p: "8px 16px",
              mr: 1,
              borderRadius: "50px",
              display: "inline-block",
              bgcolor: "#DEDEDE",
              alignItems: "center",
              ":hover": {
                bgcolor: "#E0E0E0",
                cursor: "pointer",
              },
            }}
          >
            Travel
          </Box>
          <Box
            sx={{
              my: 2,
              p: "8px 16px",
              mr: 1,
              borderRadius: "50px",
              display: "inline-block",
              bgcolor: "#DEDEDE",
              alignItems: "center",
              ":hover": {
                bgcolor: "#E0E0E0",
                cursor: "pointer",
              },
            }}
          >
            Read Book
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;

/* HTML: <div class="loader"></div> */
