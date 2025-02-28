import TextField from "@mui/material/TextField";

// eslint-disable-next-line react/prop-types
function ChatForm({ value, onChange, label }) {
  return (
    <TextField
      value={value}
      onChange={onChange}
      fullWidth
      label={label}
      sx={{
        mb: 2,
        "& .MuiFormHelperText-root": {
          m: "0.5rem 0 0 0", // Loại bỏ margin của helperText
        },
      }}
    />
  );
}

export default ChatForm;
