import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// eslint-disable-next-line react/prop-types
const ListMyInterest = ({ listValue = [], onRemove }) => {
  return (
    <Box display="flex" flexWrap="wrap" mb={1}>
      {listValue.map((option, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            p: "8px 16px",
            borderRadius: "50px",
            display: "inline-block",
            alignItems: "center",
            bgcolor: "#DEDEDE",
            mr: 1,
            mb: 1,
            ":hover": {
              bgcolor: "#E0E0E0",
              cursor: "pointer",
            },
          }}
        >
          {option.label}

          {onRemove && (
            <IconButton
              sx={{
                position: "absolute",
                top: "-4px",
                right: "-4px",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                width: 18,
                height: 18,
                padding: 0,
                transition: "opacity 0.3s",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <CloseIcon sx={{ fontSize: 14 }} />
            </IconButton>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ListMyInterest;
