import Box from "@mui/material/Box";
import styles from "./style";

// eslint-disable-next-line react/prop-types
const ListInterest = ({ listOriginalValue = [], listMyInterest = [] }) => {
  return (
    <Box sx={styles.container}>
      {listOriginalValue.map((interest, index) => {
        if (!listMyInterest.includes(interest)) {
          return (
            <Box key={index} sx={styles.chip}>
              {interest}
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default ListInterest;
