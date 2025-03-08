import { useRef, useState } from "react";
import { Avatar, Box } from "@mui/material";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import styles from "./style"; // Import styles từ file JS

const EditAvatar = () => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(
    "https://i.pinimg.com/736x/fb/d3/a7/fbd3a701e65149dbe1813bddecbbce5b.jpg"
  );
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    fileInputRef.current.click(); // Mở file chọn ảnh
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <Box
      sx={styles.avatarContainer}
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Avatar */}
      <Avatar src={preview} sx={styles.avatarImage} />

      {/* Overlay khi hover */}
      <Box sx={{ ...styles.overlay, ...(hover ? styles.overlayVisible : {}) }}>
        <CenterFocusWeakIcon sx={styles.overlayIcon} />
      </Box>

      {/* Input file ẩn */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
    </Box>
  );
};

export default EditAvatar;
