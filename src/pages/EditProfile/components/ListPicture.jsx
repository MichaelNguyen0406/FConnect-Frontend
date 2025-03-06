import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

// eslint-disable-next-line react/prop-types
const ListPicture = ({ listValue = [], onRemove }) => {
  return (
    <Box display="flex" flexWrap="wrap" gap="8px">
      {listValue.map((option, index) => (
        <Box
          key={option.label}
          sx={{
            position: "relative",
            borderRadius: "8px",
            width: "calc(50% - 4px)", // 50% trừ đi nửa của gap
            aspectRatio: "3 / 4",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: option.value ? "transparent" : "#f0f0f0",
            border: option.value ? "none" : "2px dashed #ccc",
            transition: "border-color 0.3s",
            "&:hover": {
              cursor: option.value ? "default" : "pointer",
              bgcolor: option.value ? "transparent" : "rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          {option.value ? (
            <>
              {/* Ảnh */}
              <img
                src={option.value}
                alt={option.label}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />

              <IconButton
                onClick={() => onRemove(index)}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "white",
                  width: 24,
                  height: 24,
                  transition: "opacity 0.3s",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  },
                }}
              >
                <CloseIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </>
          ) : (
            <AddIcon sx={{ fontSize: 40, color: "#888" }} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ListPicture;
