import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Box from "@mui/material/Box";

// eslint-disable-next-line react/prop-types
function Default({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ width: "300px" }} />
      <Box flex={1}>
        {/* <Header /> */}
        {children}
      </Box>
    </Box>
  );
}

export default Default;
