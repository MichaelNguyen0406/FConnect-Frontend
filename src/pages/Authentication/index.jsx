// Import MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Import Component
import EmailForm from "./components/EmailForm";
import OtpForm from "./components/OtpForm";
import ButtonCustom from "../../components/ButtonCustom";

// Import React
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import Service
import { sendOtp, verifyOtp } from "../../services/authService";

// Import Helper
import checkEmail from "../../helper/checkEmail";

// Import Context
import { useAuth } from "../../context/AuthContext";

function Authentication() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState({ value: "", error: null });
  const [otp, setOtp] = useState({ value: "", error: null });

  // console.log(useAuth());
  const { setUserLogin } = useAuth();

  const navigate = useNavigate();

  const handleCheckEmail = async () => {
    if (!checkEmail(email.value)) {
      setEmail((prev) => ({ ...prev, error: "Email của bạn không hợp lệ." }));
      return;
    }
    const response = await sendOtp(email.value);
    console.log(response);
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
    console.log(response);
    if (response.statusCode === 200) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      setUserLogin(true);
      // setUserInfo(response.data.userInfo);
      navigate("/chat");
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
            error={otp.error}
            onChange={handleChange(setOtp)}
          />
          <ButtonCustom onClick={handleVerifyOtp} variant="contained">
            Xác nhận
          </ButtonCustom>
          <ButtonCustom onClick={() => setStep(0)}>
            <Typography color="primary.main" sx={{ fontWeight: "bold" }}>
              Quay lại
            </Typography>
          </ButtonCustom>
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
        <ButtonCustom onClick={handleCheckEmail} variant="contained">
          Xác nhận
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
