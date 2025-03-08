const listPictureStyles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  imageBox: {
    position: "relative",
    borderRadius: "8px",
    width: "calc(50% - 4px)", // 50% trừ đi nửa của gap
    aspectRatio: "3 / 4",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "border-color 0.3s",
  },
  defaultBox: {
    backgroundColor: "#f0f0f0",
    border: "2px dashed #ccc",
    "&:hover": {
      cursor: "pointer",
      bgcolor: "rgba(0, 0, 0, 0.2)",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  closeButton: {
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
  },
  addIcon: {
    fontSize: 40,
    color: "#888",
  },
  fileInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
  },
};

export default listPictureStyles;
