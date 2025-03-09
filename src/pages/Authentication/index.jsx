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
import { sendOtp } from "../../services/authService";

// Import Helper
import checkEmail from "../../helper/checkEmail";
import checkOtp from "../../helper/checkOtp";

// Import Context
import { useAuth } from "../../context/AuthContext";

function Authentication() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState({ value: "", error: null });
  const [otp, setOtp] = useState({ value: "", error: null });

  const { login } = useAuth();
  const navigate = useNavigate();

  // SEND OTP
  const handleSendOtp = async () => {
    if (!checkEmail(email.value)) {
      setEmail((prev) => ({ ...prev, error: "Email của bạn không hợp lệ." }));
      return;
    }
    setLoading(true);
    const response = await sendOtp(email.value);
    setLoading(false);
    if (response.statusCode === 200) {
      setStep(1);
    } else {
      setEmail((prev) => ({
        ...prev,
        error: "Không thể gửi OTP, vui lòng thử lại.",
      }));
    }
  };

  // VERIFY OTP
  const handleVerifyOtp = async () => {
    if (!checkOtp(otp.value)) {
      setOtp((prev) => ({ ...prev, error: "OTP không hợp lệ." }));
      return;
    }
    setLoading(true);
    const success = await login(email.value, otp.value);
    setLoading(false);
    if (success) {
      navigate("/");
    } else {
      setOtp((prev) => ({ ...prev, error: "OTP không chính xác." }));
    }
  };

  // HANDLE CHANGE
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
          <ButtonCustom
            onClick={handleVerifyOtp}
            variant="contained"
            loading={loading}
          >
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
        <ButtonCustom
          onClick={handleSendOtp}
          variant="contained"
          loading={loading}
        >
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
