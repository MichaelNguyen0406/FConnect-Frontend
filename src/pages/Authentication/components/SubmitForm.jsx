import Button from "@mui/material/Button";

// eslint-disable-next-line react/prop-types
function SubmitForm({ loading, onClick, children, ...props }) {
  return (
    <Button
      fullWidth
      loading={loading}
      onClick={onClick}
      type="submit"
      {...props}
      sx={{
        height: "1.4375em",
        p: "16.5px 0px",
        boxSizing: "content-box",
        mb: 2,
        color: "#FFF",
      }}
    >
      {children}
    </Button>
  );
}

export default SubmitForm;
