import { Box, Typography, Divider } from "@mui/material";

import listInterest from "../../apis/listInterest";
import listMajor from "../../apis/listMajor";
import listPicture from "../../apis/listPicture";

import InfoForm from "./components/InfoForm";
import InputCustom from "../../components/InputCustom";
import ListPicture from "./components/ListPicture";
import CustomAvatar from "./components/CustomAvatar";
import Tag from "./components/Tag";

const listGender = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

const listMyInterest = [
  {
    value: "Football",
    label: "Football",
  },
  {
    value: "ReadBook",
    label: "Read Book",
  },
];

const EditProfile = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#FFF",
        display: "flex",
      }}
    >
      <Box
        sx={{
          flex: 1,
          p: "60px",
          overflow: "scroll",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}>
          AVATAR
        </Typography>
        <CustomAvatar />
        <Divider />
        <Box mt={2}>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}>
            PICTURE
          </Typography>
          <ListPicture listValue={listPicture} />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          p: "60px",
          border: "1px solid rgb(233, 233, 233)",
          overflow: "scroll",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}>
            NAME
          </Typography>
          <InputCustom />
        </Box>
        <Box>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}>
            MAJOR
          </Typography>
          <InfoForm listValue={listMajor} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}>
            GENDER
          </Typography>
          <InfoForm listValue={listGender} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}>
            INTEREST
          </Typography>
          <Tag listValue={listMyInterest} onRemove />
        </Box>
        <Divider />
        <Box mt={2}>
          <Tag listValue={listInterest} />
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;
