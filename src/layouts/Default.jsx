import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Box from "@mui/material/Box";

// eslint-disable-next-line react/prop-types
function Default({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1440px",
        height: "100vh",
        mx: "auto",
      }}
    >
      <Sidebar />
      <Box flex={1}>
        {/* <Header /> */}
        {children}
      </Box>
    </Box>
  );
}

export default Default;
