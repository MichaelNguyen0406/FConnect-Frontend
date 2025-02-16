// Import MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Import Component
import EmailForm from "./components/EmailForm";
import SubmitForm from "./components/SubmitForm";
import OtpForm from "./components/OtpForm";
import ButtonCustom from "../../components/ButtonCustom";

// Import React
import { useState } from "react";

// Import Service
import {
  loginEmail,
  sendOtp,
  verifyOtp,
  loginGoogle,
} from "../../services/authService";

// Import Helper
import checkEmail from "../../helper/checkEmail";

function Authentication() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState({ value: "", error: null });
  const [otp, setOtp] = useState({ value: "", error: null });

  const handleCheckEmail = async () => {
    if (!checkEmail(email.value)) {
      setEmail((prev) => ({ ...prev, error: "Email của bạn không hợp lệ." }));
      return;
    }
    const response = await sendOtp(email.value);
    if (response.statusCode === 200) {
      setStep(1);
    } else {
      setEmail((prev) => ({
        ...prev,
        error: "Không thể gửi OTP, vui lòng thử lại.",
      }));
    }
  };

  const handleVerifyOtp = async () => {
    const response = await verifyOtp(email.value, otp.value);
    if (response.statusCode === 200) {
      const loginResponse = await loginEmail(email.value);
      if (loginResponse.statusCode === 200) {
        localStorage.setItem(
          "userInfo",
          JSON.stringify(loginResponse?.data?.userInfo)
        );
        console.log("User info:", loginResponse.data);
      } else {
        setOtp((prev) => ({
          ...prev,
          error: "Lỗi đăng nhập, vui lòng thử lại.",
        }));
      }
    } else {
      setOtp((prev) => ({ ...prev, error: "OTP không chính xác." }));
    }
  };

  const handleChange = (setter) => (event) => {
    setter({ value: event.target.value, error: null });
  };

  const renderForm = () => {
    if (step === 1) {
      return (
        <>
          <OtpForm
            value={otp.value}
            onChange={handleChange(setOtp)}
            error={otp.error}
          />
          <SubmitForm onClick={handleVerifyOtp} variant="contained">
            Xác nhận
          </SubmitForm>
          <SubmitForm onClick={() => setStep(0)}>
            <Typography color="primary.main" sx={{ fontWeight: "bold" }}>
              Quay lại
            </Typography>
          </SubmitForm>
        </>
      );
    }
    return (
      <>
        <EmailForm
          value={email.value}
          error={email.error}
          onChange={handleChange(setEmail)}
        />
        <SubmitForm onClick={handleCheckEmail} variant="contained">
          Xác nhận
        </SubmitForm>
        <ButtonCustom variant="outlined" onClick={() => loginGoogle()}>
          Đăng nhập với Google
        </ButtonCustom>
      </>
    );
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "370px",
        textAlign: "center",
        p: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 4,
          color: "#2d333a",
        }}
      >
        Hello, Admin!
      </Typography>
      <Box>{renderForm()}</Box>
    </Box>
  );
}

export default Authentication;
