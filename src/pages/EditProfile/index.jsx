// import MUI
import { Box, Typography, Divider, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoneIcon from "@mui/icons-material/Done";

// Import React
import { useState, useEffect } from "react";

// Import API
import listOriginInterest from "../../apis/listInterest";
import listMajor from "../../apis/listMajor";
import listPicture from "../../apis/listPicture";
import listGender from "../../apis/listGender";

// Import Components
import SelectForm from "./components/SelectForm";
import InputCustom from "../../components/InputCustom";
import ListMyInterest from "../components/ListMyInterest";
import ListInterest from "./components/ListInterest";
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
  const [info, setInfo] = useState(userInfo);
  const [updateData, setUpdateData] = useState({});
  const [pictures, setPictures] = useState(listPicture);
  const [loading, setLoading] = useState(false);

  // console.log(userInfo);

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
    // console.log(pictures);
    pictures.forEach((picture) => {
      if (picture.file) {
        formData.append("listPicture", picture.file);
        // console.log(picture.file);
      }
    });

    Object.keys(updateData).forEach((key) => {
      if (key === "listInterest") {
        formData.append(key, JSON.stringify(updateData[key]));
      } else if (updateData[key] !== userInfo[key]) {
        formData.append(key, updateData[key]);
      }
    });
    const userId = userInfo._id;
    setLoading(true);
    const response = await updateUser(userId, formData);
    setLoading(false);
    console.log(response);
  };

  const onChangeDisplayName = (e) => {
    setInfo({ ...info, displayName: e.target.value });
    setUpdateData({ ...updateData, displayName: e.target.value });
  };

  const onChangeMajor = (e) => {
    setInfo({ ...info, major: e.target.value });
    setUpdateData({ ...updateData, major: e.target.value });
  };

  const onChangeGender = (e) => {
    setInfo({ ...info, gender: e.target.value });
    setUpdateData({ ...updateData, gender: e.target.value });
  };

  const onChangeInterest = (e) => {
    setInfo({ ...info, interest: e.target.value });
    setUpdateData({ ...updateData, interest: e.target.value });
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
          {loading ? <Box>Loading...</Box> : <DoneIcon />}
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
              value={info?.displayName}
              onChange={onChangeDisplayName}
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}>
              MAJOR
            </Typography>
            <SelectForm
              onChange={onChangeMajor}
              value={info?.major}
              listValue={listMajor}
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}>
              GENDER
            </Typography>
            <SelectForm
              onChange={onChangeGender}
              value={info?.gender}
              listValue={listGender}
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 2 }}>
              INTEREST
            </Typography>
            <ListMyInterest listValue={listMyInterest} onRemove />
          </Box>
          <Divider />
          <Box mt={2}>
            <ListInterest listOriginalValue={listOriginInterest} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;
