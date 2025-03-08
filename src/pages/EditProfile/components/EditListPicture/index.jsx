import { useRef } from "react";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./style"; // Import file styles

// eslint-disable-next-line react/prop-types
const ListPicture = ({ listValue = [], onRemove, onUpload }) => {
  const fileInputRefs = useRef([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Chỉ được chọn file ảnh!");
        return;
      }

      const emptyIndex = listValue.findIndex((item) => !item.value);

      if (emptyIndex !== -1) {
        onUpload(file, emptyIndex);
      } else {
        alert("Không còn vị trí trống!");
      }

      event.target.value = "";
    }
  };

  return (
    <Box sx={styles.container}>
      {listValue.map((option, index) => (
        <Box
          key={index}
          sx={{
            ...styles.imageBox,
            ...(option.value ? {} : styles.defaultBox),
          }}
          //   onClick={() => {
          //     if (!option.value) fileInputRefs.current[index].click();
          //   }}
        >
          {option.value ? (
            <>
              <img src={option.value} alt={option.label} style={styles.image} />
              <IconButton
                onClick={() => onRemove(index)}
                sx={styles.closeButton}
              >
                <CloseIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </>
          ) : (
            <>
              <AddIcon sx={styles.addIcon} />
              <input
                type="file"
                accept="image/*"
                style={styles.fileInput}
                ref={(el) => (fileInputRefs.current[index] = el)}
                onChange={(event) => handleFileChange(event, index)}
              />
            </>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ListPicture;
