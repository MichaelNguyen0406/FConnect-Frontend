// Import React

// Import MUI
import Box from "@mui/material/Box";

// Import Component
import Header from "./Header";
import Searchbar from "./Searchbar";
import RoomItem from "./RoomItem";

// Import Service

// eslint-disable-next-line react/prop-types
function Sidebar({ listMatch = new Map(), loading, matchId, lastMsg }) {
  // console.log(listMatch);
  // console.log(matchId);
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
          {loading ? (
            <Box px={3}>Loading...</Box>
          ) : !listMatch.size ? (
            <Box px={3}>Chưa có tin nhắn</Box>
          ) : (
            [...listMatch.values()].map((match) => {
              return (
                <RoomItem
                  lastMessage={lastMsg || match.lastMessage.content}
                  active={match.matchId === matchId}
                  key={match.matchId}
                  to={`/chat/${match.matchId}`}
                />
              );
            })
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
