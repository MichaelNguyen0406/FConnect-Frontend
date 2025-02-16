import Box from "@mui/material/Box";
import PeopleIcon from "@mui/icons-material/People";

// Import Components
import SummaryCard from "./components/SummaryCard";
import AnalyticsCard from "./components/AnalyticsCard";
// import GenderChart from "./components/GenderChart";
// import UserChart from "./components/UserChart";

function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <SummaryCard
          Icon={PeopleIcon}
          quantity="1000"
          title="Total Users"
          color="primary.main"
          height={15}
        />
        <SummaryCard
          Icon={PeopleIcon}
          quantity="1000"
          title="Total Match"
          color="secondary.main"
          height={15}
        />
        <SummaryCard
          Icon={PeopleIcon}
          quantity="1000"
          title="Total Access"
          color="#0FFF83"
          height={15}
        />
        {/* <SummaryCard Icon={PeopleIcon} quantity="1000" title="Total Users" /> */}
      </Box>
      <Box sx={{ display: "flex" }}>
        <AnalyticsCard />
        {/* <GenderChart /> */}
      </Box>
    </Box>
  );
}

export default Dashboard;
