const otpRegex = /^\d{6}$/;

const checkOtp = (otp) => {
  return otpRegex.test(otp);
};

export default checkOtp;
