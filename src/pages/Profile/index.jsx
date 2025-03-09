import { Box, Avatar, Typography } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { NavLink, useParams } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function Profile() {
  // const { userId } = useParams();
  const { userInfo } = useAuth();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "#FFF",
        overflow: "scroll",
      }}
    >
      <Box sx={{ height: "456px", position: "relative" }}>
        <Box sx={{ height: "310px", bgcolor: "#DEDEDE" }}></Box>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            src={userInfo?.avatar}
            sx={{
              width: "180px",
              height: "180px",
              border: "4px solid #f0f0f0",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              position: "relative",
            }}
          >
            <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
              {userInfo?.displayName}
            </Typography>
            <NavLink
              to={`/edit-profile/${userInfo?._id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                position: "absolute",
                right: "-60px",
              }}
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
            {userInfo?.major}
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
            {userInfo?.gender}
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
        <Box>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold", mt: 2 }}>
            Picture
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2, // Khoảng cách giữa các ảnh
            }}
          >
            {userInfo?.listPicture?.map((image, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%", // Để grid chia đều 3 ảnh trên mỗi hàng
                  aspectRatio: "3 / 4", // Giữ tỷ lệ ảnh 3:4
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={image}
                  alt={`image-${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Đảm bảo ảnh không bị méo
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;

/* HTML: <div class="loader"></div> */
