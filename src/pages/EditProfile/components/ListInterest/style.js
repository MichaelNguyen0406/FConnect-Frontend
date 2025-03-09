const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    mb: 1,
  },
  chip: {
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
  },
  closeButton: {
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
  },
  closeIcon: {
    fontSize: 14,
  },
};

export default styles;
