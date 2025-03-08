const customAvatarStyles = {
  avatarContainer: {
    position: "relative",
    width: "180px",
    height: "180px",
    margin: "0 auto",
    marginBottom: "16px",
    cursor: "pointer",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    border: "4px solid #f0f0f0",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  },
  overlayVisible: {
    opacity: 1,
  },
  overlayIcon: {
    color: "white",
    fontSize: "62px",
  },
};

export default customAvatarStyles;
