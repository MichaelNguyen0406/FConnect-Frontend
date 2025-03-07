import { TextField, MenuItem } from "@mui/material";

// eslint-disable-next-line react/prop-types
const InfoForm = ({ listValue = [] }) => {
  return (
    <TextField
      id="outlined-select-currency"
      fullWidth
      select
      defaultValue={listValue[0].value}
      sx={{ mb: 2 }}
    >
      {listValue.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default InfoForm;
