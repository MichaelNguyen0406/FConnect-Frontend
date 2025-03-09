// import MUI
import { Box, Typography, Divider, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoneIcon from "@mui/icons-material/Done";

// Import React
import { useState, useEffect } from "react";

// Import API
import listInterest from "../../apis/listInterest";
import listMajor from "../../apis/listMajor";
import listPicture from "../../apis/listPicture";
import listGender from "../../apis/listGender";

// Import Components
import SelectForm from "./components/SelectForm";
import InputCustom from "../../components/InputCustom";
// import ListPicture from "./components/ListPicture";
import EditListPicture from "./components/EditListPicture";
import EditAvatar from "./components/EditAvatar";
import Tag from "./components/Tag";

// Import Context
import { useAuth } from "../../context/AuthContext";

// Import Service
import { updateUser } from "../../services/profileService";

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
  const { userInfo } = useAuth();
  // const [info, setInfo] = useState({ displayName: "", major: "", gender: "" });
  const [info, setInfo] = useState(userInfo);
  const [pictures, setPictures] = useState(listPicture);

  const handleUpload = (file, index) => {
    const newPictures = [...pictures];
    newPictures[index] = { value: URL.createObjectURL(file), file };
    setPictures(newPictures);
  };

  const handleRemove = (index) => {
    const updatedList = [...pictures];
    updatedList.splice(index, 1);
    updatedList.push({ value: null });

    setPictures(updatedList);
  };

  // useEffect(() => {
  //   if (userInfo) {
  //     setInfo({
  //       displayName: userInfo.displayName || "",
  //       major: userInfo.major || "",
  //       gender: userInfo.gender || "",
  //     });
  //   }
  // }, []);

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("avatar", info.avatar);
    console.log(pictures);
    pictures.forEach((picture) => {
      if (picture.file) {
        formData.append("listPicture", picture.file);
        // console.log(picture.file);
      }
    });
    // Object.keys(info).forEach((key) => {
    //   formData.append(key, info[key]);
    // });
    // console.log(formData);

    const userId = userInfo._id;
    // console.log(info);
    const response = await updateUser(userId, formData);
    console.log(response);
  };

  const onChangeDisplayName = (e) => {
    setInfo({ ...info, displayName: e.target.value });
  };

  const onChangeMajor = (e) => {
    setInfo({ ...info, major: e.target.value });
  };

  const onChangeGender = (e) => {
    setInfo({ ...info, gender: e.target.value });
  };
  return (
    <Box>
      <Box
        sx={{
          height: "70px",
          width: "calc(100% - 88px)",
          position: "fixed",
          zIndex: 1,
          bgcolor: "#FFF",
          borderBottom: "1px solid rgb(233, 233, 233)",
          px: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton sx={{ ml: "-12px" }}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={handleSave} sx={{ mr: "-12px" }}>
          <DoneIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          pt: "40px",
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
          <EditAvatar setInfo={setInfo} />
          <Divider />
          <Box mt={2}>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}>
              PICTURE
            </Typography>
            <EditListPicture
              listValue={pictures}
              onRemove={handleRemove}
              onUpload={handleUpload}
            />
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
            <InputCustom
              value={info.displayName}
              onChange={onChangeDisplayName}
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}>
              MAJOR
            </Typography>
            <SelectForm
              onChange={onChangeMajor}
              value={info.major}
              listValue={listMajor}
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}>
              GENDER
            </Typography>
            <SelectForm
              onChange={onChangeGender}
              value={info.gender}
              listValue={listGender}
            />
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
    </Box>
  );
};

export default EditProfile;
