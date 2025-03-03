import Box from "@mui/material/Box";
import IconCustom from "../../../components/IconCustom";
import Input from "@mui/material/Input";
import SendIcon from "@mui/icons-material/Send";

// eslint-disable-next-line react/prop-types
function SendForm({ input, handleChange, handleKeyUp }) {
  return (
    <Box
      sx={{
        display: "flex",
        p: 3,
      }}
    >
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
          value={input}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          inputProps={{
            style: { padding: "12px 16px" },
          }}
          disableUnderline
          fullWidth
          placeholder="Gửi tin nhắn"
          endAdornment={<IconCustom>{SendIcon}</IconCustom>}
        />
      </Box>
    </Box>
  );
}

export default SendForm;
