import Box from "@mui/material/Box";

// Import Component
import Header from "./Header";
import Searchbar from "./Searchbar";
import RoomItem from "./RoomItem";

// eslint-disable-next-line react/prop-types
function Sidebar({ listReceiver = new Map(), matchId }) {
  // console.log(listReceiver.size);

  return (
    <Box
      sx={{
        width: "349px",
      }}
    >
      <Header />

      <Box
        sx={{
          p: "12px 0px",
        }}
      >
        <Box px={3}>
          <Searchbar />
        </Box>
        <Box mt="16px">
          {!listReceiver.size
            ? "Chưa có tin nhắn"
            : [...listReceiver.values()].map((receiver) => {
                // console.log(999);
                return (
                  <RoomItem
                    active={receiver.matchId === matchId}
                    key={receiver.matchId}
                    to={`/chat/${receiver.matchId}`}
                    displayName={receiver.displayName}
                  />
                );
              })}
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
