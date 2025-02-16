import { TextField } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

// eslint-disable-next-line react/prop-types
function EmailForm({ value, onChange, error = null }) {
  return (
    <TextField
      label="Email"
      type="email"
      fullWidth
      error={Boolean(error)}
      helperText={
        error && (
          <span>
            <ErrorOutlineIcon
              fontSize="small"
              style={{ verticalAlign: "middle", marginRight: "4px" }}
            />{" "}
            {error}
          </span>
        )
      }
      sx={{
        mb: 2.5,
        "& .MuiFormHelperText-root": {
          m: "0.5rem 0 0 0", // Loại bỏ margin của helperText
        },
      }}
      value={value}
      onChange={onChange}
    />
  );
}

export default EmailForm;
