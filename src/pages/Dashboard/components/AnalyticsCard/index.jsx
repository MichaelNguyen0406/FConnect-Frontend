import Box from "@mui/material/Box";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

// Import Components
import SummaryCard from "../SummaryCard";
import NavMenu from "./components/NavMenu";
import UserChart from "../UserChart";

const navMenu = ["Days", "Weeks", "Months"];

import { useState } from "react";
function AnalyticsCard() {
  const [active, setActive] = useState("Days");
  return (
    <Box
      sx={{
        width: "50%",
        bgcolor: "#ededed",
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <Box sx={{ display: "flex" }}>
        {navMenu.map((title, index) => (
          <NavMenu
            key={index}
            onClick={() => setActive(title)}
            active={active == title ? true : false}
          >
            {title}
          </NavMenu>
        ))}
      </Box>
      <Box sx={{ bgcolor: "#FFF" }}>
        <UserChart />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
          bgcolor: "#FFF",
        }}
      >
        <SummaryCard
          Icon={PersonAddAltIcon}
          title="New Users"
          quantity="1000"
          color="primary.main"
          Component={Box}
        />
        <SummaryCard
          Icon={SupervisedUserCircleIcon}
          title="New Match"
          quantity="1000"
          color="secondary.main"
          Component={Box}
        />

        <SummaryCard
          Icon={AccessAlarmIcon}
          title="Access"
          quantity="1000"
          color="#00EB72"
          Component={Box}
        />
        {/* <SummaryCard Icon={PersonIcon} title="New " quantity="1000" /> */}
      </Box>
    </Box>
  );
}

export default AnalyticsCard;
