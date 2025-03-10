// Import MUI
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

// Import React
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

// Import Context
import { useAuth } from "../../context/AuthContext";

// Import Styles
import styles from "./style";

// Import Service
import { getProfile } from "../../services/profileService";
import { Icon, IconButton } from "@mui/material";

function Profile() {
  const { userInfo } = useAuth();
  const { userId } = useParams();
  const [active, setActive] = useState("MAJOR");
  const [profile, setProfile] = useState(
    userInfo?._id === userId ? userInfo : null
  );

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getProfile(userId);
      if (response.statusCode === 200) {
        setProfile(response.data);
      }
    };
    if (!profile) {
      fetchProfile();
    }
  }, []);

  const handleActive = (item) => {
    setActive(item);
  };

  return (
    <Box sx={styles.container}>
      <Box
        sx={{
          width: "calc(50% - 12px)",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "200px",
            borderRadius: "8px",
            bgcolor: "#C29EFF",
            p: "24px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <Avatar
            src="https://i.pinimg.com/736x/fb/d3/a7/fbd3a701e65149dbe1813bddecbbce5b.jpg"
            sx={{
              borderRadius: "50%",
              height: "152px",
              width: "152px",
              bgcolor: "#D9D9D9",
              border: "4px solid #2AB7A4",
            }}
          />
          <Box>
            <Typography
              sx={{ fontWeight: "900", fontSize: "32px", color: "#FFF" }}
            >
              {profile?.displayName}
            </Typography>
            <NavLink to={`/edit-profile/${profile?._id}`}>
              <IconButton sx={styles.editButton}>
                <ModeEditIcon />
              </IconButton>
            </NavLink>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            bgcolor: "#C29EFF",
            borderRadius: "8px",
            p: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Box
            sx={{
              width: "calc(100% + 48px)",
              height: "61px",
              bgcolor: "#FFAEC0",
              mx: "-24px",
              display: "flex",
            }}
          >
            {["MAJOR", "INTEREST", "GENDER"].map((item) => (
              <Button
                key={item}
                onClick={() => handleActive(item)}
                sx={{
                  bgcolor: item == active ? "#FF98AF" : "#FFAEC0",
                  flex: 1,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ fontWeight: "900", fontSize: "24px", color: "#2AB7A4" }}
                >
                  {item}
                </Typography>
              </Button>
            ))}
          </Box>
          {active === "INTEREST" && (
            <Box
              sx={{
                width: "100%",
              }}
            >
              {profile?.listInterest}
            </Box>
          )}
          {active === "GENDER" && (
            <Box
              sx={{
                width: "100%",
              }}
            >
              {profile?.gender}
            </Box>
          )}
          {active === "MAJOR" && (
            <Box
              sx={{
                width: "100%",
              }}
            >
              {profile?.major}
            </Box>
            // <Box
            //   sx={{
            //     flex: 1,
            //     display: "flex",
            //     justifyContent: "center",
            //     alignItems: "center",
            //   }}
            // >
            //   <Box
            //     sx={{
            //       width: "60%",
            //       bgcolor: "#D9D9D9",
            //       aspectRatio: "3/4",
            //       borderRadius: "8px",
            //       overflow: "hidden",
            //     }}
            //   >
            //     <img
            //       src="https://i.pinimg.com/736x/cc/7f/10/cc7f10c24bd4a62fd84d2b1f1ebe8875.jpg"
            //       style={{ objectFit: "cover", width: "100%", height: "100%" }}
            //     />
            //   </Box>
            // </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          width: "calc(50% - 12px)",
          borderRadius: "8px",
          bgcolor: "#C29EFF",
          display: "flex",
          flexDirection: "column",
          py: "24px",
        }}
      >
        <Box
          sx={{
            bgcolor: "#FFAEC0",
            width: "100%",
            height: "71px",
            px: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ fontWeight: "900", fontSize: "32px", color: "#2AB7A4" }}
          >
            PICTURE
          </Typography>
          <Typography
            sx={{
              fontWeight: "900",
              fontSize: "32px",
              color: "#2AB7A4",
              letterSpacing: "4px",
            }}
          >
            3/9
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            mt: "24px",
            px: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <Button
            sx={{
              color: "#FFF",
              bgcolor: "#2AB7A4",
              width: "calc(50% - 12px)",
              fontSize: "24px",
              fontWeight: "900",
              borderRadius: "8px",
            }}
          >
            ALL
          </Button>
          <Button
            sx={{
              color: "#FFF",
              bgcolor: "#2AB7A4",
              width: "calc(50% - 12px)",
              fontSize: "24px",
              fontWeight: "900",
              borderRadius: "8px",
            }}
          >
            ONE
          </Button>
        </Box>
        <Box
          sx={{
            flex: 1,
            width: "100%",
            mt: "24px",
            px: "24px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            overflowY: "scroll",
          }}
        >
          {profile?.listPicture?.map((item) => (
            <Box
              key={item}
              sx={{
                border: "4px solid #2AB7A4",
                borderRadius: "8px",
                aspectRatio: "3 / 4",
                bgcolor: "#D9D9D9",
                gridItem: "span 1",
                overflow: "hidden",
              }}
            >
              <img
                src={item}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
