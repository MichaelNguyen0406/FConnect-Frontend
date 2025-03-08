import { TextField, MenuItem } from "@mui/material";

// eslint-disable-next-line react/prop-types
const SelectForm = ({ listValue = [], onChange, value }) => {
  return (
    <TextField
      id="outlined-select-currency"
      fullWidth
      select
      onChange={onChange}
      value={value}
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

export default SelectForm;
