import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
function Searchbar() {
  return (
    <Box
      width="100%"
      borderRadius="28px"
      border="1px solid #eee"
      sx={{
        background: "#eee",
      }}
    >
      <Input
        type="text"
        inputProps={{
          style: { padding: "10px" },
        }}
        disableUnderline
        fullWidth
        placeholder="Tìm kiếm"
        startAdornment={<SearchIcon sx={{ color: "#777", ml: 2 }} />}
      />
    </Box>
  );
}

export default Searchbar;
