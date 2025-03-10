export default {
  container: {
    width: "100%",
    height: "100%",
    p: "32px 24px",
    display: "flex",
    gap: "24px",
  },
  header: {
    height: "456px",
    position: "relative",
  },
  coverImage: {
    height: "310px",
    bgcolor: "#DEDEDE",
  },
  avatarContainer: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "180px",
    height: "180px",
    border: "4px solid #f0f0f0",
  },
  editButtonContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    position: "relative",
  },
  editButton: {
    p: "4px 12px",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    ":hover": {
      bgcolor: "#E0E0E0",
      cursor: "pointer",
    },
  },
  sectionContainer: {
    p: "32px 72px",
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    mt: 2,
  },
  sectionBox: {
    my: 2,
    p: "8px 16px",
    borderRadius: "8px",
    display: "inline-block",
    bgcolor: "#DEDEDE",
    alignItems: "center",
    ":hover": {
      bgcolor: "#E0E0E0",
      cursor: "pointer",
    },
  },
  interestBox: {
    my: 2,
    p: "8px 16px",
    mr: 1,
    borderRadius: "50px",
    display: "inline-block",
    bgcolor: "#DEDEDE",
    alignItems: "center",
    ":hover": {
      bgcolor: "#E0E0E0",
      cursor: "pointer",
    },
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 2,
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: "3 / 4",
    overflow: "hidden",
    borderRadius: "8px",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
